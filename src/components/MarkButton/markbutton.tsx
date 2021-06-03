import { IconButton } from '@material-ui/core';
import { useSlate } from 'slate-react';
import { isMarkActive, toggleMark } from '../../util/mark';
import { useStyles } from './styles';
import { MarkButtonProps } from './types';

const MarkButton = ({ children, format }: MarkButtonProps): JSX.Element => {
  const editor = useSlate();
  const classes = useStyles();

  return (
    <IconButton
      className={
        isMarkActive(editor, format) ? classes.active : classes.inactive
      }
      onClick={() => toggleMark(editor, format)}
      size="small"
    >
      {children}
    </IconButton>
  );
};

export default MarkButton;
