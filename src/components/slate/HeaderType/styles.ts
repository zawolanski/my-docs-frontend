import { makeStyles, Select, withStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  select: {
    borderRadius: '0.4rem',
    overflow: 'hidden',
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
    },
    '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
    },
  },
  menu: {
    '& ul': {
      display: 'grid',
      gridTemplateRows: 'repeat(6, 1fr)',
    },
    '& ul > li:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
}));

export const StyledSelect = withStyles((theme) => ({
  root: {
    width: '7.5rem',
    margin: '0 0.15rem',
    padding: theme.spacing(0.7),
    '& > p': {
      fontSize: '1rem',
    },

    '& ~ fieldset': {
      borderColor: 'transparent',
    },

    '&:hover': {
      background: theme.palette.action.hover,
    },
  },
}))(Select);
