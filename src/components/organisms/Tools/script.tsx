import MarkButton from 'components/slate/MarkButton/markbutton';
import SubscriptIcon from '@material-ui/icons/Subscript';
import SuperscriptIcon from '@material-ui/icons/Superscript';

const ScriptTools = (): JSX.Element => (
  <>
    <MarkButton format="sub" title="Subscript (Ctrl+,)">
      <SubscriptIcon />
    </MarkButton>
    <MarkButton format="sup" title="Superscript (Ctrl+.)">
      <SuperscriptIcon />
    </MarkButton>
  </>
);

export default ScriptTools;
