import { BlockTypes } from 'types/util';

export interface MarkButtonProps {
  children: JSX.Element | string;
  format: BlockTypes;
  title: string;
}
