import { Editor } from 'slate';

export type MarkTypes = 'bold' | 'italic' | 'code' | 'underline' | 'sup';
export type ToggleMarkFun = (editor: Editor, format: MarkTypes) => void;
