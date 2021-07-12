/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';
import { Editable as Edit, RenderLeafProps, useSlate } from 'slate-react';
import { toggleMark } from 'util/mark';
import { Leaf } from 'components/slate/Elements/Leaf';
import { HOTKEYS } from 'util/hotkeys';
import isHotkey from 'is-hotkey';
import { Keys, MarkTypes } from 'types/util';
import styled from './editable.module.scss';
import { EditableProps } from './types';

const Editable = ({ permissions }: EditableProps): JSX.Element => {
  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );

  const editor = useSlate();

  return (
    <div className={styled.wrapper}>
      <div className={styled['editor-wrapper']}>
        <Edit
          readOnly={!(permissions === 'editor')}
          autoFocus
          renderLeaf={renderLeaf}
          onKeyDown={(event) => {
            if (
              !isHotkey('mod', event as any) &&
              !isHotkey('opt', event as any) &&
              !isHotkey('opt+mod', event as any)
            ) {
              (Object.keys(HOTKEYS) as Keys[]).forEach((hotkey: Keys) => {
                if (isHotkey(hotkey, event as any)) {
                  event.preventDefault();
                  const mark = HOTKEYS[hotkey] as MarkTypes;
                  toggleMark(editor, mark);
                }
              });
            }
          }}
        />
      </div>
    </div>
  );
};

export default Editable;
