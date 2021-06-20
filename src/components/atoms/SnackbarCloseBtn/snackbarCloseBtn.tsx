import { IconButton } from '@material-ui/core';
import { Close as IconClose } from '@material-ui/icons';
import { useSnackbar, SnackbarKey } from 'notistack';

const SnackbarCloseBtn = ({ key }: { key: SnackbarKey }): JSX.Element => {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton onClick={() => closeSnackbar(key)}>
      <IconClose />
    </IconButton>
  );
};

export default SnackbarCloseBtn;
