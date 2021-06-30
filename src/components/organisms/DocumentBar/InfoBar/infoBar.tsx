import { Tooltip, Typography, TextField, Button } from '@material-ui/core';
import clsx from 'clsx';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DescriptionIcon from '@material-ui/icons/Description';
import { useSocketContext } from 'context/socket/SocketContext';
import { RouteParam } from 'templates/Slate/types';
import { useStyles } from './styles';

const InfoBar = (): JSX.Element => {
  const classes = useStyles();
  const { socket } = useSocketContext();
  const { docId } = useParams<RouteParam>();

  const [title, setTitle] = useState('Dokument 1');

  const handleUpdateTitle = (value: string): void => {
    setTitle(value);
  };

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
      </div>
      <div className={classes.flex}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (socket) socket.emit('save', { room: docId, content: '123' });
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default InfoBar;
