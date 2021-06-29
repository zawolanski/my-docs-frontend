import { useAuthContext } from 'context/auth/AuthContext';
import { createContext, useContext, useReducer } from 'react';
import io from 'socket.io-client';
import { IChildren } from 'types/util';
import { initialState } from './initialState';
import { reducer } from './reducer';
import { ISocketContext } from './types';

let socket: undefined | SocketIOClient.Socket;

const SocketContext = createContext<ISocketContext>({
  socket,
  state: initialState,
  dispatch: () => null,
});

const { Provider } = SocketContext;

export const SocketProvider = ({ children }: IChildren): JSX.Element => {
  const {
    data: { token },
  } = useAuthContext();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  socket = io.connect(process.env.REACT_APP_SOCKET_URL!, {
    transportOptions: {
      polling: { extraHeaders: { authorization: `Bearer ${token}` } },
    },
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ socket, state, dispatch }}>{children}</Provider>;
};

export const useSocketContext = (): ISocketContext => useContext(SocketContext);
