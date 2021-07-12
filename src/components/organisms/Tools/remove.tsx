import FormatClearIcon from '@material-ui/icons/FormatClear';
import MarkButton from 'components/slate/MarkButton/markbutton';

const RemoveTools = (): JSX.Element => (
  <MarkButton format="remove" isRemove>
    <FormatClearIcon />
  </MarkButton>
);

export default RemoveTools;
