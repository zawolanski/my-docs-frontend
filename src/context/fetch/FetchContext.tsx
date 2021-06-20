import { createContext, useContext } from 'react';
import axios from 'axios';
import { useAuthContext } from 'context/auth/AuthContext';
import { IFetchContext } from './types';

const FetchContext = createContext<IFetchContext>({ authAxios: null });

const { Provider } = FetchContext;

export const FetchProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const {
    data: { token },
  } = useAuthContext();

  const authAxios = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return <Provider value={{ authAxios }}>{children}</Provider>;
};

export const useFetchContext = (): IFetchContext => useContext(FetchContext);
