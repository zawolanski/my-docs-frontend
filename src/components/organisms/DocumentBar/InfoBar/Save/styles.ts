import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    alignItems: 'center',
    gridGap: '0.5rem',
  },
  spinner: {
    color: theme.palette.grey[50],
  },
  iconTitle: {
    fontSize: '0.6rem',
  },
}));
