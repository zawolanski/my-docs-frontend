import { createContext, useContext, useReducer } from 'react';
import io from 'socket.io-client';
import { IChildren } from 'types/util';
import { initialState } from './initialState';
import { reducer } from './reducer';
import { ISocketContext } from './types';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const socket = io(process.env.REACT_APP_SOCKET_URL!);

const SocketContext = createContext<ISocketContext>({
  socket,
  state: initialState,
  dispatch: () => null,
});

const { Provider } = SocketContext;

export const SocketProvider = ({ children }: IChildren): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ socket, state, dispatch }}>{children}</Provider>;
};

export const useSocketContext = (): ISocketContext => useContext(SocketContext);
