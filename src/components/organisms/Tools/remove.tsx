import FormatClearIcon from '@material-ui/icons/FormatClear';
import ToolbarButton from 'components/slate/ToolbarButton/toolbarButton';
import { useSlate } from 'slate-react';
import { removeMarks } from 'util/mark';

const RemoveTools = (): JSX.Element => {
  const editor = useSlate();

  return (
    <ToolbarButton
      isMark
      format="remove"
      tooltipTitle="Clear formatting (Ctrl+/)"
      onClick={() => removeMarks(editor)}
    >
      <FormatClearIcon />
    </ToolbarButton>
  );
};

export default RemoveTools;
