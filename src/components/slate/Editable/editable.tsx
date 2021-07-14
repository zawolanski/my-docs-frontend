/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';
import {
  Editable as Edit,
  RenderElementProps,
  RenderLeafProps,
  useSlate,
} from 'slate-react';
import { removeMarks, toggleMark } from 'util/mark';
import { Leaf } from 'components/slate/Elements/Leaf';
import { HOTKEYS } from 'util/hotkeys';
import isHotkey from 'is-hotkey';
import { Keys, MarkTypes } from 'types/util';
import styled from './editable.module.scss';
import { EditableProps } from './types';
import { Element } from '../Elements/Block';

const Editable = ({ permissions }: EditableProps): JSX.Element => {
  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );

  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
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
          renderElement={renderElement}
          onKeyDown={(event) => {
            if (isHotkey('mod+/', event as any)) removeMarks(editor);
            else if (
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
