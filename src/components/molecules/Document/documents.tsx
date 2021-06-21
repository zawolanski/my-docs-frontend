import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link } from 'react-router-dom';
import { IDocumentProps } from './types';
import styles from './document.module.scss';

const Document = ({ name, id }: IDocumentProps): JSX.Element => (
  <Link to={`/document/${id}`}>
    <ListItem button>
      <ListItemIcon>
        <Avatar>
          <DescriptionIcon />
        </Avatar>
      </ListItemIcon>
      <ListItemText className={styles.text} primary={name} />
    </ListItem>
  </Link>
);

export default Document;
