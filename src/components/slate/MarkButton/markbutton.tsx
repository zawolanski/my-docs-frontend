import { Tooltip } from '@material-ui/core';
import clsx from 'clsx';
import { useSlate } from 'slate-react';
import { isMarkActive, removeMarks, toggleMark } from 'util/mark';
import { StyledIconButton, useStyles } from './styles';
import { MarkButtonProps } from './types';

const MarkButton = ({
  children,
  format,
  title,
  isRemove = false,
}: MarkButtonProps): JSX.Element => {
  const editor = useSlate();
  const classes = useStyles();
  const isActive = isMarkActive(editor, format);

  return (
    <Tooltip title={title} arrow>
      <StyledIconButton
        focusRipple={false}
        classes={{
          root: clsx(isActive ? classes.active : classes.inactive),
        }}
        onClick={
          isRemove
            ? () => removeMarks(editor)
            : () => toggleMark(editor, format)
        }
        size="small"
      >
        {children}
      </StyledIconButton>
    </Tooltip>
  );
};

export default MarkButton;
