import Toolbar from 'components/organisms/DocumentBar/Toolbar/toolbar';
import { useStyles } from './styles';
import InfoBar from './InfoBar/infoBar';

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
