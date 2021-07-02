import { Descendant, Operation } from 'slate';
import { IConnectedUser } from 'types/util';

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
