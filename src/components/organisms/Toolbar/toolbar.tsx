import { Divider, Paper } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import BlockButton from 'components/slate/BlockButton/blockbutton';
import HeaderTypes from 'components/slate/HeaderType/headertype';
import { useStyles } from './styles';
import TextTools from '../Tools/text';
import ScriptTools from '../Tools/script';
import RemoveTools from '../Tools/remove';

const Toolbar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Paper elevation={0} className={classes.paper}>
        <Divider orientation="vertical" className={classes.divider} />
        <HeaderTypes />
        <Divider orientation="vertical" className={classes.divider} />
        <BlockButton format="block-quote" title="Block quote">
          <FormatQuoteIcon />
        </BlockButton>
        <Divider orientation="vertical" className={classes.divider} />
        <TextTools />
        <Divider orientation="vertical" className={classes.divider} />
        <ScriptTools />
        <Divider orientation="vertical" className={classes.divider} />
        <RemoveTools />
      </Paper>
    </div>
  );
};

export default Toolbar;
