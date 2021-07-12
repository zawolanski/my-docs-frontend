import MarkButton from 'components/slate/MarkButton/markbutton';
import SubscriptIcon from '@material-ui/icons/Subscript';
import SuperscriptIcon from '@material-ui/icons/Superscript';

const ScriptTools = (): JSX.Element => (
  <>
    <MarkButton format="sub">
      <SubscriptIcon />
    </MarkButton>
    <MarkButton format="sup">
      <SuperscriptIcon />
    </MarkButton>
  </>
);

export default ScriptTools;
