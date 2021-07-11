import Toolbar from 'components/organisms/Toolbar/toolbar';
import InfoBar from 'components/organisms/InfoBar/infoBar';
import { useStyles } from './styles';

const DocumentBar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.mainWrapper}>
      <InfoBar />
      <Toolbar />
    </div>
  );
};

export default DocumentBar;
