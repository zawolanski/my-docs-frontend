import { useMemo, useState } from 'react';
import { createEditor, Descendant } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';

const App = (): JSX.Element => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [content, setContent] = useState<Descendant[]>([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
    {
      type: 'paragraph',
      children: [{ text: 'A second line of text in a paragraph.' }],
    },
  ]);

  return (
    <Slate
      editor={editor}
      value={content}
      onChange={(newValue: Descendant[]) => setContent(newValue)}
    >
      <Editable />
    </Slate>
  );
};

export default App;
