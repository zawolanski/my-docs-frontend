import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderBottom: `1px solid ${theme.palette.divider}`,
    height: `${theme.sizes.toolbar.height}rem`,
  },
  paper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  divider: {
    margin: '0 0.15rem',
  },
}));
