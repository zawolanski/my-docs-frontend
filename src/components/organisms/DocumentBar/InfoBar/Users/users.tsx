/* eslint-disable global-require */
import { useAuthContext } from 'context/auth/AuthContext';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { Avatar, Tooltip } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './styles';

const Users = (): JSX.Element => {
  const classes = useStyles();
  const {
    data: { _id },
  } = useAuthContext();

  const { connectedUsers } = useSelector(({ editor }: RootState) => ({
    connectedUsers: editor.connectedUsers!,
  }));

  const filteredUsers = connectedUsers.filter((el) => el._id !== _id);

  const avatars = filteredUsers.map(({ _id: id, name, settings }) =>
    name ? (
      <Tooltip key={id} title={name}>
        <Avatar
          alt={name}
          className={clsx(classes[settings.colorNumber], classes.size)}
        >
          {name.trimStart()[0]}
        </Avatar>
      </Tooltip>
    ) : null
  );

  return <div className={classes.wrapper}>{avatars}</div>;
};

export default Users;
