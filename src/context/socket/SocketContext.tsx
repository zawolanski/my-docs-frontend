import { useAuthContext } from 'context/auth/AuthContext';
import { createContext, useContext, useReducer, useRef } from 'react';
import io from 'socket.io-client';
import { IChildren } from 'types/util';
import { initialState } from './initialState';
import { reducer } from './reducer';
import { ISocketContext } from './types';

let s: undefined | SocketIOClient.Socket;

const SocketContext = createContext<ISocketContext>({
  socket: s,
  state: initialState,
  dispatch: () => null,
});

const { Provider } = SocketContext;

export const SocketProvider = ({ children }: IChildren): JSX.Element => {
  const {
    data: { token },
  } = useAuthContext();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  s = io.connect(process.env.REACT_APP_SOCKET_URL!, {
    transportOptions: {
      polling: { extraHeaders: { authorization: `Bearer ${token}` } },
    },
  });

  const socket = useRef(s);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Provider value={{ socket: socket.current, state, dispatch }}>
      {children}
    </Provider>
  );
};

export const useSocketContext = (): ISocketContext => useContext(SocketContext);
