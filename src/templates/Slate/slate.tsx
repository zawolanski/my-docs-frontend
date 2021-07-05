/* eslint-disable react-hooks/exhaustive-deps */
import { useSocketContext } from 'context/socket/SocketContext';
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
  const dispatch = useDispatch();
  const { socket } = useSocketContext();
  const editor = useMemo(() => withReact(createEditor()), []);
  const remote = useRef(false);
  const socketID = useRef(socket?.id);
  const socketchange = useRef(false);
  const { docId } = useParams<RouteParam>();

  const [content, setContent] = useState<Descendant[]>(documentContent);

  useEffect(() => {
    dispatch(updateContent(JSON.stringify(content)));
  }, [content]);

  useEffect(() => {
    if (socket) {
      socket.emit('joinRoom', docId);

      socket.on('exception', (data: IError) => {
        console.log(data);
      });

      socket.on('editRoom', (data: IJoined) => {
        dispatch(setConnectedUsers(data.connectedUsers));
      });

      socket.on('content', ({ ops, editorId }: IContent) => {
        dispatch(setWasChange(true));
        if (editorId !== socketID.current && ops !== null) {
          remote.current = true;
          Editor.withoutNormalizing(editor, () =>
            ops.forEach((op) => editor.apply(op))
          );
          remote.current = false;
          socketchange.current = true;
        }
      });

      window.addEventListener('beforeunload', () => {
        socket.emit('leaveRoom', docId);
      });
    }

    return () => {
      if (socket) {
        socket.emit('leaveRoom', docId);
      }
    };
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
            editorId: socketID.current,
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
