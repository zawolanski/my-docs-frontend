import { useCallback } from 'react';
import { Editable, RenderLeafProps, useSlate } from 'slate-react';
import { toggleMark } from '../../util/mark';
import { Leaf } from '../Elements/Leaf';
import styled from './editor.module.scss';

const Editor = (): JSX.Element => {
  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );

  const editor = useSlate();

  return (
    <div className={styled.wrapper}>
      <div className={styled['editor-wrapper']}>
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
      </div>
    </div>
  );
};

export default Editor;
