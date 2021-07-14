import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  blockquote: {
    margin: 0,
    padding: theme.spacing(1.5),
    borderLeft: `3px solid ${theme.palette.grey[500]}`,
    color: theme.palette.grey[400],
  },
}));
