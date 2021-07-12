import { Divider, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import TextTools from '../Tools/Text/text';
import ScriptTools from '../Tools/Text/script';

const Toolbar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Paper elevation={0} className={classes.paper}>
        <Divider orientation="vertical" className={classes.divider} />
        <TextTools />
        <Divider orientation="vertical" className={classes.divider} />
        <ScriptTools />
        <Divider orientation="vertical" className={classes.divider} />
      </Paper>
    </div>
  );
};

export default Toolbar;
