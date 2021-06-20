import { AuthProvider } from 'context/auth/AuthContext';
import { FetchProvider } from 'context/fetch/FetchContext';
import SnackbarTemplate from 'templates/Snackbar/snackbar';

const MainTemplate = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <SnackbarTemplate>
    <AuthProvider>
      <FetchProvider>{children}</FetchProvider>
    </AuthProvider>
  </SnackbarTemplate>
);

export default MainTemplate;
