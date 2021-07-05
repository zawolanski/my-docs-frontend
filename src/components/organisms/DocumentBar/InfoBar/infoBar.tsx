import { Tooltip, Typography, TextField } from '@material-ui/core';
import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DescriptionIcon from '@material-ui/icons/Description';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useStyles } from './styles';
import Save from './Save/save';
import Users from './Users/users';

const InfoBar = (): JSX.Element | null => {
  const classes = useStyles();
  const { connectedUsers, currentDocument } = useSelector(
    ({ editor }: RootState) => editor
  );

  const [title, setTitle] = useState('Dokument 1');

  const handleUpdateTitle = (value: string): void => {
    setTitle(value);
  };

  if (!currentDocument) return null;

  return (
    <div className={clsx(classes.flex, classes.infoBarWrapper)}>
      <div className={classes.flex}>
        <Tooltip title="Go to documents">
          <div className={clsx(classes.flex, classes.iconWrapper)}>
            <Link to="/documents">
              <DescriptionIcon />
            </Link>
          </div>
        </Tooltip>
        <Tooltip title="Change document name">
          <div className={classes.titleInputWrapper}>
            <Typography className={classes.titleTypography}>{title}</Typography>
            <TextField
              value={title}
              variant="outlined"
              className={classes.textField}
              fullWidth
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleUpdateTitle(e.target.value)
              }
            />
          </div>
        </Tooltip>
        <div className={classes.iconsBar}>
          <Save />
        </div>
      </div>
      <div className={classes.flex}>
        {connectedUsers.length > 0 ? <Users /> : null}
      </div>
    </div>
  );
};

export default InfoBar;
