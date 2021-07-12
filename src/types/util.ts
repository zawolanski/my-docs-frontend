import { Editor } from 'slate';

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

export interface IUserSettings {
  colorNumber: number;
}

export interface IUser {
  email: string;
  name: string;
  _id: string;
  settings: IUserSettings;
  userType: 'logged' | 'guest';
}

export type IConnectedUser = IUser;

export type MarkTypes =
  | 'bold'
  | 'italic'
  | 'code'
  | 'underline'
  | 'sup'
  | 'sub'
  | 'strikethrough'
  | 'link'
  | 'remove';

export type Keys =
  | 'mod+b'
  | 'mod+i'
  | 'mod+u'
  | 'mod+`'
  | 'mod+.'
  | 'mod+,'
  | 'mod+5'
  | 'mod+k';
