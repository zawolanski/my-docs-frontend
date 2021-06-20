import { useAuthContext } from 'context/auth/AuthContext';
import { Redirect, Route } from 'react-router-dom';
import { IAuthRouteProps } from './types';

const AuthRoute = ({ children, ...props }: IAuthRouteProps): JSX.Element => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Route {...props}>
      {isAuthenticated() ? children : <Redirect to="/" />}
    </Route>
  );
};

export default AuthRoute;
