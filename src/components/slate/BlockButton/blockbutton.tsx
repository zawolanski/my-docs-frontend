import { Tooltip } from '@material-ui/core';
import clsx from 'clsx';
import { useSlate } from 'slate-react';
import { isBlockActive, toggleBlock } from 'util/element';
import { StyledIconButton, useStyles } from './styles';
import { MarkButtonProps } from './types';

const BlockButton = ({
  children,
  format,
  title,
}: MarkButtonProps): JSX.Element => {
  const editor = useSlate();
  const classes = useStyles();
  const isActive = isBlockActive(editor, format);

  return (
    <Tooltip title={title} arrow>
      <StyledIconButton
        classes={{
          root: clsx(isActive ? classes.active : classes.inactive),
        }}
        onClick={() => toggleBlock(editor, format)}
        size="small"
      >
        {children}
      </StyledIconButton>
    </Tooltip>
  );
};

export default BlockButton;
