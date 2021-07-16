import { Typography } from '@material-ui/core';
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
    case 'heading':
      return (
        <Typography {...attributes} variant={element.variant} component="p">
          {children}
        </Typography>
      );
    default:
      return <p {...attributes}>{children}</p>;
  }
};
