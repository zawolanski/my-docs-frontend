import { IconButton } from '@material-ui/core';
import { useAuthContext } from 'context/auth/AuthContext';
import LogoutIcon from '@material-ui/icons/ExitToAppOutlined';

const Documents = (): JSX.Element => {
  const { logout } = useAuthContext();

  return (
    <>
      <IconButton onClick={() => logout()}>
        <LogoutIcon />
      </IconButton>
      <div>Documents</div>
    </>
  );
};

export default Documents;
