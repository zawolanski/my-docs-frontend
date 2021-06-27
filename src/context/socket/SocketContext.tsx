import { createContext, useContext, useReducer } from 'react';

import io from 'socket.io-client';
import { IChildren } from 'types/util';
import { IState, ISocketContext, ActionKind, SocketAction } from './types';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const socket = io(process.env.REACT_APP_SOCKET_URL!);

const initialState: IState = {
  wasContentChange: false,
  connectedUsers: [],
};

const SocketContext = createContext<ISocketContext>({
  socket,
  state: initialState,
  dispatch: () => null,
});

const { Provider } = SocketContext;

const reducer = (state: IState, action: SocketAction) => {
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

export const SocketProvider = ({ children }: IChildren): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ socket, state, dispatch }}>{children}</Provider>;
};

export const useSocketContext = (): ISocketContext => useContext(SocketContext);
