import { remove } from 'lodash';
import { Editor } from 'slate';
import { CustomText } from 'types/global';
import { MarkTypes } from '../types/util';

export const getMarks = (editor: Editor): Omit<CustomText, 'text'> | null =>
  Editor.marks(editor);

export const isMarkActive = (editor: Editor, format: MarkTypes): boolean => {
  const marks = getMarks(editor);
  return marks ? marks[format] === true : false;
};

export const isMarkShouldToggle = (
  editor: Editor,
  elements: MarkTypes[]
): boolean => {
  const marks = getMarks(editor);
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

export const removeMarks = (editor: Editor): void => {
  const marks = getMarks(editor);
  if (marks !== null)
    Object.keys(marks).forEach((mark) => Editor.removeMark(editor, mark));
};
