import { ActionKind, IState, SocketAction } from './types';

export const reducer = (state: IState, action: SocketAction): IState => {
  switch (action.type) {
    case ActionKind.ChangeContent:
      return { ...state, wasContentChange: action.flag };
    case ActionKind.UpdateUser:
      // if (state.connectedUsers.includes(action.userId)) return state;

      return {
        ...state,
        connectedUsers: action.connectedUsers,
      };
    default:
      return state;
  }
};
