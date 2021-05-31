import Editor from '../Editor/editor';
import Toolbar from '../Toolbar/toolbar';
import styled from './main.module.scss';

const Main = (): JSX.Element => (
  <div className={styled.wrapper}>
    <Toolbar />
    <Editor />
  </div>
);

export default Main;
