import FormatClearIcon from '@material-ui/icons/FormatClear';
import MarkButton from 'components/slate/MarkButton/markbutton';

const RemoveTools = (): JSX.Element => (
  <MarkButton format="remove" title="Clear formatting (Ctrl+/)" isRemove>
    <FormatClearIcon />
  </MarkButton>
);

export default RemoveTools;
