import { useSocketContext } from 'context/socket/SocketContext';
import { ActionKind } from 'context/socket/types';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createEditor, Descendant, Editor } from 'slate';
import { Slate, withReact } from 'slate-react';
import {
  IError,
  IContent,
  IJoined,
  RouteParam,
  SlateTemplateProps,
} from './types';

const SlateTemplate = ({
  children,
  documentContent,
}: SlateTemplateProps): JSX.Element => {
  const { socket, dispatch, state } = useSocketContext();
  const editor = useMemo(() => withReact(createEditor()), []);
  const remote = useRef(false);
  const socketchange = useRef(false);
  const { docId } = useParams<RouteParam>();

  const [content, setContent] = useState<Descendant[]>(documentContent);

  useEffect(() => {
    if (!state.wasContentChange)
      dispatch({ type: ActionKind.ChangeContent, flag: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  useEffect(() => {
    if (socket) {
      socket.emit('joinRoom', docId);

      socket.on('exception', (data: IError) => {
        console.log(data);
      });

      socket.on('joinRoom', (data: IJoined) => {
        dispatch({
          type: ActionKind.UpdateUser,
          connectedUsers: data.connectedUsers,
        });
      });

      socket.on('leaveRoom', (data: IJoined) => {
        dispatch({
          type: ActionKind.UpdateUser,
          connectedUsers: data.connectedUsers,
        });
      });

      socket.on('content', ({ ops, editorId }: IContent) => {
        if (editorId !== socket.id && ops !== null) {
          remote.current = true;
          Editor.withoutNormalizing(editor, () =>
            ops.forEach((op) => editor.apply(op))
          );
          remote.current = false;
          socketchange.current = true;
        }
      });
    }

    return () => {
      if (socket) {
        socket.emit('leaveRoom', docId);
        socket.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docId]);

  if (!socket) return <div>Invalid socket</div>;

  return (
    <Slate
      editor={editor}
      value={content}
      onChange={(newValue: Descendant[]) => {
        setContent(newValue);

        const ops = editor.operations.filter((o) => o.type !== 'set_selection');

        if (ops.length && !socketchange.current && !remote.current) {
          socket.emit('changeContent', {
            room: docId,
            ops,
            editorId: socket.id,
          });
        }
        socketchange.current = false;
      }}
    >
      {children}
    </Slate>
  );
};

export default SlateTemplate;
