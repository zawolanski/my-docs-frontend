import Main from '../../components/Main/main';
import MainTemplate from '../Main/main';
import SlateTemplate from '../Slate/slate';

const Root = (): JSX.Element => (
  <MainTemplate>
    <SlateTemplate>
      <Main />
    </SlateTemplate>
  </MainTemplate>
);

export default Root;
