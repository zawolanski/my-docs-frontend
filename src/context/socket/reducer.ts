import { ActionKind, IState, SocketAction } from './types';

export const reducer = (state: IState, action: SocketAction): IState => {
  switch (action.type) {
    case ActionKind.ChangeContent:
      return { ...state, wasContentChange: action.flag };
    case ActionKind.AddUser:
      return {
        ...state,
        connectedUsers: [...state.connectedUsers, action.userId],
      };
    default:
      return state;
  }
};
