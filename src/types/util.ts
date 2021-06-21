import { Editor } from 'slate';

export type MarkTypes = 'bold' | 'italic' | 'code' | 'underline' | 'sup';
export type ToggleMarkFun = (editor: Editor, format: MarkTypes) => void;

export interface IDocument {
  _id: string;
  name: string;
  content: string;
  access: string;
  owner: string;
  permissions: string;
  users: string[];
}
