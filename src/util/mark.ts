import { remove } from 'lodash';
import { Editor } from 'slate';
import { MarkTypes } from '../types/util';

export const isMarkActive = (editor: Editor, format: MarkTypes): boolean => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export const isMarkShouldToggle = (
  editor: Editor,
  elements: MarkTypes[]
): boolean => {
  const marks = Editor.marks(editor);
  if (marks !== null)
    Object.keys(marks).forEach((mark) => {
      elements.forEach((el) => {
        if (el === mark) Editor.removeMark(editor, el);
      });
    });
  return true;
};

export const toggleMark = (editor: Editor, format: MarkTypes): void => {
  const isActive = isMarkActive(editor, format);

  if (format === 'sub' || format === 'sup')
    isMarkShouldToggle(
      editor,
      remove(['sub', 'sup'], (n) => n !== format)
    );

  if (!isActive) Editor.addMark(editor, format, true);
  else Editor.removeMark(editor, format);
};
