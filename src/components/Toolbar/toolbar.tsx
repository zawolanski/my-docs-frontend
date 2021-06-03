import FormatBoldTwoToneIcon from '@material-ui/icons/FormatBoldTwoTone';
import FormatItalicTwoToneIcon from '@material-ui/icons/FormatItalicTwoTone';
import CodeTwoToneIcon from '@material-ui/icons/CodeTwoTone';
import FormatUnderlinedTwoToneIcon from '@material-ui/icons/FormatUnderlinedTwoTone';
import MarkButton from '../MarkButton/markbutton';
import styled from './toolbar.module.scss';

const Toolbar = (): JSX.Element => (
  <div className={styled.wrapper}>
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
  </div>
);

export default Toolbar;
