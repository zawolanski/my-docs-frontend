import { createContext, useContext } from 'react';
import io from 'socket.io-client';
import { IChildren } from 'types/util';
import { ISocketContext } from './types';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const socket = io(process.env.REACT_APP_SOCKET_URL!);

const SocketContext = createContext<ISocketContext>({
  socket,
});

const { Provider } = SocketContext;

export const SocketProvider = ({ children }: IChildren): JSX.Element => (
  <Provider value={{ socket }}>{children}</Provider>
);

export const useSocketContext = (): ISocketContext => useContext(SocketContext);
