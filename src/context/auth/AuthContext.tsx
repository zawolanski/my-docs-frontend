/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  getItemFromStorage,
  removeItemFromStorage,
  setItemInLocalStorage,
} from 'util/helpers';
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
  isAuthenticated: () => false,
});

const { Provider } = AuthContext;

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const initialState = getItemFromStorage('authData');
  let init: IAuthData | null = null;

  if (initialState !== null) {
    init = JSON.parse(initialState);
  }

  const [authData, setAuthData] = useState<IAuthData>(
    init === null ? initialData : init
  );
  const history = useHistory();

  const setAuthState: SetAuthState = (data) => {
    setItemInLocalStorage('authData', JSON.stringify(data));
    setAuthData(data);
  };

  const logout = (): void => {
    removeItemFromStorage('authData');
    history.push('/');
  };

  const isAuthenticated = (): boolean => {
    if (
      !authData._id ||
      !authData.email ||
      !authData.firstname ||
      !authData.lastname ||
      !authData.token
    ) {
      return false;
    }
    return true;
  };

  return (
    <Provider value={{ data: authData, setAuthState, logout, isAuthenticated }}>
      {children}
    </Provider>
  );
};

export const useAuthContext = (): IAuthContext => useContext(AuthContext);
