import { IConnectedUser } from 'templates/Slate/types';

export type HandleContentChange = (flag: boolean) => void;

export interface IState {
  wasContentChange: boolean;
  connectedUsers: IConnectedUser[];
}

export interface ISocketContext {
  socket: SocketIOClient.Socket | undefined;
  state: IState;
  dispatch: React.Dispatch<SocketAction>;
}

export enum ActionKind {
  ChangeContent = 'CHANGE_CONTENT',
  UpdateUser = 'UPDATE_USER',
}

export type SocketAction =
  | { type: ActionKind.ChangeContent; flag: boolean }
  | { type: ActionKind.UpdateUser; connectedUsers: IConnectedUser[] };
