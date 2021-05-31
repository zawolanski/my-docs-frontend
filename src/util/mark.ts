import { Editor } from 'slate';
import { MarkTypes } from '../types/util';

export const isMarkActive = (editor: Editor, format: MarkTypes): boolean => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export const toggleMark = (editor: Editor, format: MarkTypes): void => {
  const isActive = isMarkActive(editor, format);

  if (!isActive) Editor.addMark(editor, format, true);
  else Editor.removeMark(editor, format);
};
