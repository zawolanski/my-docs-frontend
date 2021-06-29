import { Descendant, Operation } from 'slate';

export interface SlateTemplateProps {
  children: React.ReactNode;
  documentContent: Descendant[];
}

export interface IError {
  status: string;
  maessage: string;
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

export interface IJoined {
  client: string;
  room: string;
  connectedUsers: IConnectedUser[];
}

export interface IContent {
  editorId: string;
  ops: Operation[];
}

export interface RouteParam {
  docId: string;
}
