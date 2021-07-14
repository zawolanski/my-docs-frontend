import { Divider, Paper } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import BlockButton from 'components/slate/BlockButton/blockbutton';
import { useStyles } from './styles';
import TextTools from '../Tools/text';
import ScriptTools from '../Tools/script';
import RemoveTools from '../Tools/remove';

const Toolbar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Paper elevation={0} className={classes.paper}>
        <BlockButton format="block-quote" title="Quoteblock">
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
