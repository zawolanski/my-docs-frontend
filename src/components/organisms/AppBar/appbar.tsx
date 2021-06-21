import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import LogoutIcon from '@material-ui/icons/ExitToAppOutlined';
import { useAuthContext } from 'context/auth/AuthContext';
import styles from './appbar.module.scss';

const AppBar = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { logout } = useAuthContext();

  return (
    <>
      <MuiAppBar>
        <Toolbar>
          <Typography className={styles.title} variant="h6">
            My docs
          </Typography>
          <IconButton className={styles.icon} onClick={() => logout()}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
      {children}
    </>
  );
};

export default AppBar;
