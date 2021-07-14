import { RenderElementProps } from 'slate-react';
import { useStyles } from './styles';

export const Element = ({
  attributes,
  children,
  element,
}: RenderElementProps): JSX.Element => {
  const classes = useStyles();

  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote {...attributes} className={classes.blockquote}>
          {children}
        </blockquote>
      );
    default:
      return <p {...attributes}>{children}</p>;
  }
};
