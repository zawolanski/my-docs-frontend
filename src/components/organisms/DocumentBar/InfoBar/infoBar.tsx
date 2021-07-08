import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useStyles } from './styles';
import Save from './Save/save';
import Users from './Users/users';
import DocumentName from './DocumentName/documentName';

const InfoBar = (): JSX.Element | null => {
  const classes = useStyles();
  const { connectedUsers, currentDocument } = useSelector(
    ({ editor }: RootState) => editor
  );

  if (!currentDocument) return null;

  return (
    <div className={clsx(classes.flex, classes.infoBarWrapper)}>
      <div className={classes.flex}>
        <DocumentName
          currentName={currentDocument.name}
          docId={currentDocument._id}
        />
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
