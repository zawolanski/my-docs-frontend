import { IconButton, makeStyles, withStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  inactive: {
    color: theme.palette.text.secondary,
  },
  active: {
    backgroundColor: theme.palette.action.selected,
    color: theme.palette.text.primary,
  },
}));

export const StyledIconButton = withStyles({
  root: {
    margin: '0.3rem 0.2rem',
    borderRadius: '15%',
  },
})(IconButton);
