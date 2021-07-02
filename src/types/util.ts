import { Editor } from 'slate';

export type MarkTypes = 'bold' | 'italic' | 'code' | 'underline' | 'sup';
export type ToggleMarkFun = (editor: Editor, format: MarkTypes) => void;

export type Permissions = 'editor' | 'viewer';
export type Access = 'restricted' | 'full';

export interface IDocument {
  _id: string;
  name: string;
  content: string;
  access: Access;
  owner: string;
  permissions: Permissions;
  users: string[];
}

export interface IChildren {
  children: React.ReactChild;
}

export interface IAuthData {
  email: string;
  firstname: string;
  lastname: string;
  _id: string;
}

export interface IUser {
  email: string;
  exp: number;
  iat: number;
  firstname: string;
  lastname: string;
  _id: string;
}

export interface IConnectedUser {
  clientId: string;
  user: IUser;
}
