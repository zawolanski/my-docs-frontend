/* eslint-disable no-param-reassign */
import { RenderLeafProps } from 'slate-react';

export const Leaf = ({
  attributes,
  children,
  leaf,
}: RenderLeafProps): JSX.Element => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  if (leaf.sup) {
    children = <sup>{children}</sup>;
  }

  return <span {...attributes}>{children}</span>;
};
