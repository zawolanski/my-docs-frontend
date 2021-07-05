import { makeStyles } from '@material-ui/core';
import {
  amber,
  blue,
  blueGrey,
  brown,
  deepOrange,
  grey,
  indigo,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
  size: {
    width: theme.spacing(4.25),
    height: theme.spacing(4.25),
    fontSize: '1rem',
    margin: '0 0.2rem',
  },
  wrapper: {
    display: 'flex',
  },
  0: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  1: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  2: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
  },
  3: {
    color: theme.palette.getContrastText(indigo[500]),
    backgroundColor: indigo[500],
  },
  4: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  5: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
  },
  6: {
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[500],
  },
  7: {
    color: theme.palette.getContrastText(lime[500]),
    backgroundColor: lime[500],
  },
  8: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
  },
  9: {
    color: theme.palette.getContrastText(amber[500]),
    backgroundColor: amber[500],
  },
  10: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  11: {
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
  },
  12: {
    color: theme.palette.getContrastText(brown[500]),
    backgroundColor: brown[500],
  },
  13: {
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
  },
  14: {
    color: theme.palette.getContrastText(blueGrey[500]),
    backgroundColor: blueGrey[500],
  },
}));
