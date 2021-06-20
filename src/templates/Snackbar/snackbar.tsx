import { SnackbarProvider } from 'notistack';
import SnackbarCloseBtn from 'components/atoms/SnackbarCloseBtn/snackbarCloseBtn';

const SnackbarTemplate = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <SnackbarProvider
    autoHideDuration={3500}
    preventDuplicate
    action={(key) => <SnackbarCloseBtn key={key} />}
  >
    {children}
  </SnackbarProvider>
);

export default SnackbarTemplate;
