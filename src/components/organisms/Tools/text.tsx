import FormatBoldTwoToneIcon from '@material-ui/icons/FormatBoldTwoTone';
import FormatItalicTwoToneIcon from '@material-ui/icons/FormatItalicTwoTone';
import CodeTwoToneIcon from '@material-ui/icons/CodeTwoTone';
import FormatUnderlinedTwoToneIcon from '@material-ui/icons/FormatUnderlinedTwoTone';
import FormatStrikethroughIcon from '@material-ui/icons/FormatStrikethrough';
import ToolbarButton from 'components/slate/ToolbarButton/toolbarButton';

const TextTools = (): JSX.Element => (
  <>
    <ToolbarButton isMark format="bold" tooltipTitle="Bold (Ctrl+B)">
      <FormatBoldTwoToneIcon />
    </ToolbarButton>
    <ToolbarButton isMark format="italic" tooltipTitle="Italic (Ctrl+I)">
      <FormatItalicTwoToneIcon />
    </ToolbarButton>
    <ToolbarButton isMark format="code" tooltipTitle="Code (Ctrl+`)">
      <CodeTwoToneIcon />
    </ToolbarButton>
    <ToolbarButton isMark format="underline" tooltipTitle="Underline (Ctrl+U)">
      <FormatUnderlinedTwoToneIcon />
    </ToolbarButton>
    <ToolbarButton
      isMark
      format="strikethrough"
      tooltipTitle="Strikethrough (Ctrl+5)"
    >
      <FormatStrikethroughIcon />
    </ToolbarButton>
  </>
);

export default TextTools;
