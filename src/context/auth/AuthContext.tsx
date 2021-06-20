/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useState } from 'react';
import { removeItemFromStorage, setItemInLocalStorage } from 'util/helpers';
import { IAuthContext, IAuthData, SetAuthState } from './types';

const initialData = {
  email: '',
  firstname: '',
  lastname: '',
  _id: '',
  token: '',
};

const AuthContext = createContext<IAuthContext>({
  data: initialData,
  setAuthState: () => {},
  logout: () => {},
});

const { Provider } = AuthContext;

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [authData, setAuthData] = useState<IAuthData>(initialData);

  const setAuthState: SetAuthState = (data) => {
    setItemInLocalStorage('authData', JSON.stringify(data));
    setAuthData(data);
  };

  const logout = (): void => {
    removeItemFromStorage('authData');
  };

  return (
    <Provider value={{ data: authData, setAuthState, logout }}>
      {children}
    </Provider>
  );
};

export const useAuthContext = (): IAuthContext => useContext(AuthContext);
