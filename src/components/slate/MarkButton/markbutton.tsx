import clsx from 'clsx';
import { useSlate } from 'slate-react';
import { isMarkActive, toggleMark } from 'util/mark';
import { StyledIconButton, useStyles } from './styles';
import { MarkButtonProps } from './types';

const MarkButton = ({ children, format }: MarkButtonProps): JSX.Element => {
  const editor = useSlate();
  const classes = useStyles();
  const isActive = isMarkActive(editor, format);

  return (
    <StyledIconButton
      classes={{
        root: clsx(isActive ? classes.active : classes.inactive),
      }}
      onClick={() => toggleMark(editor, format)}
      size="small"
    >
      {children}
    </StyledIconButton>
  );
};

export default MarkButton;
