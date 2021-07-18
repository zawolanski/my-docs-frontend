import { BlockTypes, IChildren, MarkTypes } from 'types/util';

export interface IToolbarButtonProps_ extends IChildren {
  onClick?: () => void;
  tooltipTitle?: string;
}

export interface IBlock {
  isBlock: boolean;
  format: BlockTypes;
}

export interface IMark {
  isMark: boolean;
  format: MarkTypes;
}

export type ToolbarButtonProps =
  | (IToolbarButtonProps_ & IBlock)
  | (IToolbarButtonProps_ & IMark);
