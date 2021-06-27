export type HandleContentChange = (flag: boolean) => void;

export interface IState {
  wasContentChange: boolean;
  connectedUsers: string[];
}

export interface ISocketContext {
  socket: SocketIOClient.Socket;
  state: IState;
  dispatch: React.Dispatch<SocketAction>;
}

export enum ActionKind {
  ChangeContent = 'CHANGE_CONTENT',
  AddUser = 'ADD_USER',
}

export type SocketAction =
  | { type: ActionKind.ChangeContent; flag: boolean }
  | { type: ActionKind.AddUser; userId: string };
