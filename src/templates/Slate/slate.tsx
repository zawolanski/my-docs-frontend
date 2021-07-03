import { useSocketContext } from 'context/socket/SocketContext';
import { ActionKind } from 'context/socket/types';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createEditor, Descendant, Editor } from 'slate';
import { Slate, withReact } from 'slate-react';
import {
  setConnectedUsers,
  updateContent,
  setWasChange,
} from 'redux/slice/editor';
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
  const reduxDispatch = useDispatch();
  const { socket, dispatch, state } = useSocketContext();
  const editor = useMemo(() => withReact(createEditor()), []);
  const remote = useRef(false);
  const scoketID = useRef(socket?.id);
  const socketchange = useRef(false);
  const { docId } = useParams<RouteParam>();

  const [content, setContent] = useState<Descendant[]>(documentContent);

  useEffect(() => {
    if (!state.wasContentChange)
      dispatch({ type: ActionKind.ChangeContent, flag: false });

    reduxDispatch(updateContent(JSON.stringify(content)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  useEffect(() => {
    if (socket) {
      socket.emit('joinRoom', docId);

      socket.on('exception', (data: IError) => {
        console.log(data);
      });

      socket.on('joinRoom', (data: IJoined) => {
        reduxDispatch(setConnectedUsers(data.connectedUsers));
      });

      socket.on('leaveRoom', (data: IJoined) => {
        reduxDispatch(setConnectedUsers(data.connectedUsers));
      });

      socket.on('content', ({ ops, editorId }: IContent) => {
        reduxDispatch(setWasChange(true));
        if (editorId !== scoketID.current && ops !== null) {
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
            editorId: scoketID.current,
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
