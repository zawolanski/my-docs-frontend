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
}));
