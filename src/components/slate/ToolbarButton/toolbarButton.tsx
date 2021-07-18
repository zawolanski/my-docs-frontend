/* eslint-disable @typescript-eslint/no-empty-function */
import { useSlate } from 'slate-react';
import { Tooltip } from '@material-ui/core';
import { isBlockActive, toggleBlock } from 'util/element';
import { isMarkActive, toggleMark } from 'util/mark';
import clsx from 'clsx';
import { StyledIconButton, useStyles } from './styles';
import { IBlock, IMark, ToolbarButtonProps } from './types';

const ToolbarButton = ({
  children,
  onClick,
  tooltipTitle,
  ...props
}: ToolbarButtonProps): JSX.Element => {
  const editor = useSlate();
  const classes = useStyles();

  let isActive;
  let clickEvent;

  if ((props as IBlock)?.isBlock) {
    const block = props as IBlock;
    clickEvent = () => toggleBlock(editor, block.format);
    isActive = isBlockActive(editor, block.format);
  } else if ((props as IMark)?.isMark) {
    const mark = props as IMark;
    clickEvent = () => toggleMark(editor, mark.format);
    isActive = isMarkActive(editor, mark.format);
  }

  if (onClick !== undefined) clickEvent = onClick;

  const button = (
    <StyledIconButton
      focusRipple={false}
      size="small"
      classes={{
        root: clsx(isActive ? classes.active : classes.inactive),
      }}
      onClick={clickEvent}
    >
      {children}
    </StyledIconButton>
  );

  if (tooltipTitle !== undefined && tooltipTitle !== '')
    return <Tooltip title={tooltipTitle}>{button}</Tooltip>;

  return button;
};

export default ToolbarButton;
