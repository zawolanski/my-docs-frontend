import MarkButton from 'components/slate/MarkButton/markbutton';
import FormatBoldTwoToneIcon from '@material-ui/icons/FormatBoldTwoTone';
import FormatItalicTwoToneIcon from '@material-ui/icons/FormatItalicTwoTone';
import CodeTwoToneIcon from '@material-ui/icons/CodeTwoTone';
import FormatUnderlinedTwoToneIcon from '@material-ui/icons/FormatUnderlinedTwoTone';
import FormatStrikethroughIcon from '@material-ui/icons/FormatStrikethrough';

const TextTools = (): JSX.Element => (
  <>
    <MarkButton format="bold" title="Bold (Ctrl+B)">
      <FormatBoldTwoToneIcon />
    </MarkButton>
    <MarkButton format="italic" title="Italic (Ctrl+I)">
      <FormatItalicTwoToneIcon />
    </MarkButton>
    <MarkButton format="code" title="Code (Ctrl+`)">
      <CodeTwoToneIcon />
    </MarkButton>
    <MarkButton format="underline" title="Underline (Ctrl+U)">
      <FormatUnderlinedTwoToneIcon />
    </MarkButton>
    <MarkButton format="strikethrough" title="Strikethrough (Ctrl+5)">
      <FormatStrikethroughIcon />
    </MarkButton>
  </>
);

export default TextTools;
