import { useSocketContext } from 'context/socket/SocketContext';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createEditor, Descendant, Editor, Operation } from 'slate';
import { Slate, withReact } from 'slate-react';
import { SlateTemplateProps } from './types';

// const socket = socketIOClient('http://localhost:4000');

const SlateTemplate = ({
  children,
  documentContent,
}: SlateTemplateProps): JSX.Element => {
  const { socket } = useSocketContext();
  const editor = useMemo(() => withReact(createEditor()), []);
  const remote = useRef(false);
  const socketchange = useRef(false);

  const [content, setContent] = useState<Descendant[]>(documentContent);

  useEffect(() => {
    // eslint-disable-next-line no-console
    socket.on('connection', (data: string) => console.log(data));
    socket.on(
      'content',
      ({ ops, editorId }: { ops: Operation[]; editorId: string }) => {
        if (editorId !== socket.id && ops !== null) {
          remote.current = true;
          Editor.withoutNormalizing(editor, () =>
            ops.forEach((op) => editor.apply(op))
          );
          remote.current = false;
          socketchange.current = true;
        }
      }
    );

    return () => {
      socket.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Slate
        editor={editor}
        value={content}
        onChange={(newValue: Descendant[]) => {
          setContent(newValue);

          const ops = editor.operations.filter(
            (o) => o.type !== 'set_selection'
          );

          if (ops.length && !socketchange.current && !remote.current) {
            socket.emit('content', { ops, editorId: socket.id });
          }
          socketchange.current = false;
        }}
      >
        {children}
      </Slate>
      <button type="button">CLICK ME!</button>
    </>
  );
};

export default SlateTemplate;
