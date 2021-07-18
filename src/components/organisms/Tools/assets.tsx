import ToolbarButton from 'components/slate/ToolbarButton/toolbarButton';
import InsertLinkIcon from '@material-ui/icons/InsertLink';

const AssetsTools = (): JSX.Element => (
  <ToolbarButton isBlock format="link">
    <InsertLinkIcon />
  </ToolbarButton>
);

export default AssetsTools;
