/* eslint-disable no-nested-ternary */
import { CircularProgress } from '@material-ui/core';
import { useFetchContext } from 'context/fetch/FetchContext';
import { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import CenterWrapper from 'components/atoms/CenterWrapper/centerWrapper';
import { IAuthRouteProps } from './types';

const AuthRoute = ({ children, ...props }: IAuthRouteProps): JSX.Element => {
  const { authAxios } = useFetchContext();
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUserLogged = async (): Promise<void> => {
      try {
        await authAxios?.get('/user/data');
        setIsAuth(true);
        setIsLoading(false);
      } catch (e) {
        setIsAuth(false);
        setIsLoading(false);
      }
    };

    checkUserLogged();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Route {...props}>
      {isLoading ? (
        <CenterWrapper>
          <CircularProgress />
        </CenterWrapper>
      ) : isAuth ? (
        children
      ) : (
        <Redirect to="/" />
      )}
    </Route>
  );
};

export default AuthRoute;
