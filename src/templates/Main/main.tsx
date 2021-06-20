import { AuthProvider } from 'context/auth/AuthContext';
import { FetchProvider } from 'context/fetch/FetchContext';

const MainTemplate = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <AuthProvider>
    <FetchProvider>{children}</FetchProvider>
  </AuthProvider>
);

export default MainTemplate;
