import { useMutation, useSubscription } from '@apollo/client';
import { useCallback, useEffect } from 'react';
import { Editable, RenderLeafProps, useSlate } from 'slate-react';
import { CONTENT, CHANGE_CONTENT } from '../../graphql/content';
import { toggleMark } from '../../util/mark';
import { Leaf } from '../Elements/Leaf';
import styled from './editor.module.scss';
import { Subscription, MutationExecuteSubArgs } from '../../generated/graphql';

const Editor = (): JSX.Element => {
  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );

  const editor = useSlate();

  const { data } = useSubscription<Subscription>(CONTENT);
  const [changeContent] = useMutation<string, MutationExecuteSubArgs>(
    CHANGE_CONTENT,
    { variables: { name: 'Seba' } }
  );

  useEffect(() => {
    (async () => {
      await changeContent();
    })();
  }, [editor.children]);

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
