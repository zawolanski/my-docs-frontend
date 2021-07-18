import SubscriptIcon from '@material-ui/icons/Subscript';
import SuperscriptIcon from '@material-ui/icons/Superscript';
import ToolbarButton from 'components/slate/ToolbarButton/toolbarButton';

const ScriptTools = (): JSX.Element => (
  <>
    <ToolbarButton isMark format="sub" tooltipTitle="Subscript (Ctrl+,)">
      <SubscriptIcon />
    </ToolbarButton>
    <ToolbarButton isMark format="sup" tooltipTitle="Superscript (Ctrl+.)">
      <SuperscriptIcon />
    </ToolbarButton>
  </>
);

export default ScriptTools;
