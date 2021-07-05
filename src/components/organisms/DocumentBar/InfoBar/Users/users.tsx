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

  const avatars = filteredUsers.map(
    ({ _id: id, firstname, lastname, classNumber }) => (
      <Tooltip key={id} title={`${firstname} ${lastname}`}>
        <Avatar
          alt={`${firstname} ${lastname}`}
          className={clsx(classes[classNumber], classes.size)}
        >
          {`${firstname[0]}${lastname[0]}`}
        </Avatar>
      </Tooltip>
    )
  );

  return <div className={classes.wrapper}>{avatars}</div>;
};

export default Users;
