import { useCallback } from 'react';
import { Editable as Edit, RenderLeafProps, useSlate } from 'slate-react';
import { toggleMark } from 'util/mark';
import { Leaf } from 'components/slate/Elements/Leaf';
import { useAuthContext } from 'context/auth/AuthContext';
import styled from './editable.module.scss';
import { EditableProps } from './types';

const Editable = ({ permissions }: EditableProps): JSX.Element => {
  const { data: authData } = useAuthContext();

  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );

  const editor = useSlate();

  return (
    <div className={styled.wrapper}>
      {authData.email}
      {authData.firstname}
      <br />
      <div className={styled['editor-wrapper']}>
        <Edit
          readOnly={!(permissions === 'editor')}
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

export default Editable;
