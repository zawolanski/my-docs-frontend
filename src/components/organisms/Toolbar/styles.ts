import { makeStyles, TextField, withStyles } from '@material-ui/core';

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

export const StyledTextField = withStyles((theme) => ({
  root: {
    width: '7.5rem',
    margin: '0 0.15rem',
    borderRadius: '0.25rem',
    overflow: 'hidden',

    '&:hover, & .MuiOutlinedInput-input:focus': {
      background: theme.palette.action.hover,
    },

    '& .MuiOutlinedInput-input': {
      padding: theme.spacing(0.7),
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'transparent',
      },
      '&:hover fieldset': {
        borderColor: 'transparent',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'transparent',
      },
    },
  },
}))(TextField);
