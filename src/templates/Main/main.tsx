import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { AuthProvider } from 'context/auth/AuthContext';
import { FetchProvider } from 'context/fetch/FetchContext';
import SnackbarTemplate from 'templates/Snackbar/snackbar';
import { MUItheme } from 'theme/mui';
import { SocketProvider } from 'context/socket/SocketContext';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'redux/store';

const MainTemplate = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={MUItheme}>
      <CssBaseline />
      <SnackbarTemplate>
        <AuthProvider>
          <SocketProvider>
            <FetchProvider>{children}</FetchProvider>
          </SocketProvider>
        </AuthProvider>
      </SnackbarTemplate>
    </ThemeProvider>
  </ReduxProvider>
);

export default MainTemplate;
