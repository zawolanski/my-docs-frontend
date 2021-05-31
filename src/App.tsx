import { useCallback, useMemo, useState } from 'react';
import { createEditor, Descendant } from 'slate';
import { Editable, RenderLeafProps, Slate, withReact } from 'slate-react';
import { Leaf } from './components/Elements/Leaf';
import { toggleMark } from './util/mark';

const App = (): JSX.Element => {
  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );

  const editor = useMemo(() => withReact(createEditor()), []);
  const [isBold, setIsBold] = useState(false);
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

  const toggleBold = (): void => setIsBold((prevState) => !prevState);

  return (
    <div
      style={{ backgroundColor: '#fff', maxWidth: '800px', margin: '0 auto' }}
    >
      <Slate
        editor={editor}
        value={content}
        onChange={(newValue: Descendant[]) => setContent(newValue)}
      >
        <Editable
          renderLeaf={renderLeaf}
          onKeyDown={(event) => {
            if (!event.ctrlKey) {
              return;
            }

            event.preventDefault();
            switch (event.key) {
              case 'b': {
                toggleMark(editor, 'bold');
                break;
              }
              case 'u': {
                toggleMark(editor, 'underline');
                break;
              }
              case 's': {
                toggleMark(editor, 'sup');
                break;
              }
              case 'c': {
                toggleMark(editor, 'code');
                break;
              }
              case 'i': {
                toggleMark(editor, 'italic');
                break;
              }

              default:
                break;
            }
          }}
        />
      </Slate>
      <button onClick={toggleBold} type="button">
        LogContent
      </button>
      <p>{isBold ? 'bold' : 'not bold :)'}</p>
    </div>
  );
};

export default App;
