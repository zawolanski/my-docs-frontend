import FormatBoldTwoToneIcon from '@material-ui/icons/FormatBoldTwoTone';
import FormatItalicTwoToneIcon from '@material-ui/icons/FormatItalicTwoTone';
import CodeTwoToneIcon from '@material-ui/icons/CodeTwoTone';
import FormatUnderlinedTwoToneIcon from '@material-ui/icons/FormatUnderlinedTwoTone';
import MarkButton from 'components/slate/MarkButton/markbutton';
import { useStyles } from './styles';

const Toolbar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
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
};

export default Toolbar;
