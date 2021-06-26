import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.background.default,
    zIndex: 100,
  },
}));
