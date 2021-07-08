import { Tooltip, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DescriptionIcon from '@material-ui/icons/Description';
import clsx from 'clsx';
import { useSocketContext } from 'context/socket/SocketContext';
import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { useStyles } from './styles';
import { IDocumentNameProps } from './types';

const DocumentName = ({
  currentName,
  docId,
}: IDocumentNameProps): JSX.Element | null => {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { socket } = useSocketContext() as any;

  const [name, setName] = useState(currentName);

  const handleUpdateTitle = (value: string): void => {
    setName(value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const save = useCallback(
    debounce((newName: string) => {
      socket.emit('changeDocumentName', {
        room: docId,
        name: newName,
      });
    }, 1250),
    []
  );

  useEffect(() => {
    handleUpdateTitle(currentName);
  }, [currentName]);

  useEffect(() => {
    if (name !== currentName) save(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, save]);

  return (
    <>
      <Tooltip title="Go to documents">
        <div className={clsx(classes.flex, classes.iconWrapper)}>
          <Link to="/documents">
            <DescriptionIcon />
          </Link>
        </div>
      </Tooltip>
      <Tooltip title="Change document name">
        <div className={classes.titleInputWrapper}>
          <Typography className={classes.titleTypography}>{name}</Typography>
          <TextField
            value={name}
            variant="outlined"
            className={classes.textField}
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateTitle(e.target.value)
            }
          />
        </div>
      </Tooltip>
    </>
  );
};

export default DocumentName;
