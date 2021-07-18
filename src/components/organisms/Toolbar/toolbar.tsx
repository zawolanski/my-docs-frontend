import { Divider, Paper } from '@material-ui/core';
import HeaderTypes from 'components/slate/HeaderType/headertype';
import { useStyles } from './styles';
import TextTools from '../Tools/text';
import ScriptTools from '../Tools/script';
import RemoveTools from '../Tools/remove';
import AssetsTools from '../Tools/assets';
import BlockTools from '../Tools/block';

const Toolbar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Paper elevation={0} className={classes.paper}>
        <Divider orientation="vertical" className={classes.divider} />
        <HeaderTypes />
        <Divider orientation="vertical" className={classes.divider} />
        <BlockTools />
        <Divider orientation="vertical" className={classes.divider} />
        <TextTools />
        <Divider orientation="vertical" className={classes.divider} />
        <ScriptTools />
        <Divider orientation="vertical" className={classes.divider} />
        <RemoveTools />
        <Divider orientation="vertical" className={classes.divider} />
        <AssetsTools />
        <Divider orientation="vertical" className={classes.divider} />
      </Paper>
    </div>
  );
};

export default Toolbar;
