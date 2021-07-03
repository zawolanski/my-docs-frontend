/* eslint-disable react-hooks/exhaustive-deps */
import { Tooltip, CircularProgress } from '@material-ui/core';
import { useSocketContext } from 'context/socket/SocketContext';
import { useCallback, useEffect, useState } from 'react';
import { setWasChange } from 'redux/slice/editor';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { debounce } from 'lodash';
import { useAuthContext } from 'context/auth/AuthContext';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import { useStyles } from './styles';

const Save = (): JSX.Element => {
  const classes = useStyles();
  const { socket } = useSocketContext();
  const { data } = useAuthContext();
  const {
    connectedUsers,
    wasChange,
    currentDocument: { _id, content },
  } = useSelector(({ editor }: RootState) => ({
    connectedUsers: editor.connectedUsers!,
    wasChange: editor.wasChange,
    currentDocument: editor.currentDocument!,
  }));
  const dispatch = useDispatch();
  const [saving, setSaving] = useState(false);

  const save = useCallback(
    debounce((con: string) => {
      if (socket && data._id === connectedUsers?.[0].user._id) {
        socket.emit('save', {
          room: _id,
          content: con,
        });
      }
    }, 1000),
    [connectedUsers]
  );

  useEffect(() => {
    if (wasChange) setSaving(true);
    save(content);
  }, [content, save]);

  useEffect(() => {
    if (socket)
      socket.on('saved', () => {
        dispatch(setWasChange(false));
        setSaving(false);
      });
  }, []);

  return (
    <Tooltip title={saving ? 'Saving...' : 'Document saved'}>
      <div className={classes.wrapper}>
        {saving ? (
          <CircularProgress size={15} className={classes.spinner} />
        ) : (
          <CloudDoneIcon fontSize="small" />
        )}
      </div>
    </Tooltip>
  );
};

export default Save;
