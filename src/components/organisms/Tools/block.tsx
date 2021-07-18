import ToolbarButton from 'components/slate/ToolbarButton/toolbarButton';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const BlockTools = (): JSX.Element => (
  <ToolbarButton isBlock format="block-quote" tooltipTitle="Block quote">
    <FormatQuoteIcon />
  </ToolbarButton>
);

export default BlockTools;
