import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  iconsBar: {
    margin: '0 1.5rem',
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    alignItems: 'center',
    gridGap: '0.5rem',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: '2.75rem',

    '& svg': {
      transform: 'scale(1.4)',
      color: theme.palette.warning.dark,
    },
  },
  infoBarWrapper: {
    padding: theme.spacing(1.25),
    justifyContent: 'space-between',
  },
  titleInputWrapper: {
    position: 'relative',
    width: 'fit-content',
  },
  titleTypography: {
    padding: '6px 9px',
    visibility: 'hidden',
    maxWidth: '40vw',
    whiteSpace: 'pre',
  },
  textField: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 0,
    '& input': {
      padding: '6px 9px',
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'transparent',
      },
      '&:hover fieldset': {
        borderColor: theme.palette.divider,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.info.dark,
      },
    },
  },
}));
