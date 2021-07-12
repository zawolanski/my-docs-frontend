import MarkButton from 'components/slate/MarkButton/markbutton';
import FormatBoldTwoToneIcon from '@material-ui/icons/FormatBoldTwoTone';
import FormatItalicTwoToneIcon from '@material-ui/icons/FormatItalicTwoTone';
import CodeTwoToneIcon from '@material-ui/icons/CodeTwoTone';
import FormatUnderlinedTwoToneIcon from '@material-ui/icons/FormatUnderlinedTwoTone';
import FormatStrikethroughIcon from '@material-ui/icons/FormatStrikethrough';

const TextTools = (): JSX.Element => (
  <>
    <MarkButton format="bold">
      <FormatBoldTwoToneIcon />
    </MarkButton>
    <MarkButton format="italic">
      <FormatItalicTwoToneIcon />
    </MarkButton>
    <MarkButton format="code">
      <CodeTwoToneIcon />
    </MarkButton>
    <MarkButton format="underline">
      <FormatUnderlinedTwoToneIcon />
    </MarkButton>
    <MarkButton format="strikethrough">
      <FormatStrikethroughIcon />
    </MarkButton>
  </>
);

export default TextTools;
