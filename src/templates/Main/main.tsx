import { useMemo, useState } from 'react';
import { createEditor, Descendant } from 'slate';
import { Slate, withReact } from 'slate-react';

const MainTemplate = ({ children }: { children: JSX.Element }): JSX.Element => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [content, setContent] = useState<Descendant[]>([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
    {
      type: 'paragraph',
      children: [
        {
          text: 'A second line of text in a paragraph.',
          bold: true,
          italic: true,
        },
        {
          text: ' How are you?',
        },
      ],
    },
  ]);

  return (
    <Slate
      editor={editor}
      value={content}
      onChange={(newValue: Descendant[]) => setContent(newValue)}
    >
      {children}
    </Slate>
  );
};

export default MainTemplate;
