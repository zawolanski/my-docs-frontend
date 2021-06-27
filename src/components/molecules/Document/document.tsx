import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link } from 'react-router-dom';
import { IDocumentProps } from './types';
import { useStyles } from './styles';

const Document = ({ name, id }: IDocumentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Link to={`/document/${id}`}>
      <ListItem button>
        <ListItemIcon>
          <Avatar>
            <DescriptionIcon />
          </Avatar>
        </ListItemIcon>
        <ListItemText className={classes.text} primary={name} />
      </ListItem>
    </Link>
  );
};

export default Document;
