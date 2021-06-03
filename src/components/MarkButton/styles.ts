import { makeStyles } from '@material-ui/core';
import hexRgb from 'hex-rgb';

export const useStyles = makeStyles({
  active: {
    color: 'black',
  },
  inactive: {
    color: hexRgb('#000000', { format: 'css', alpha: 0.35 }),
  },
});
