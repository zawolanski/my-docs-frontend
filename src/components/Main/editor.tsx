import Editable from 'components/Editable/editable';
import SlateTemplate from 'templates/Slate/slate';
import Toolbar from 'components/Toolbar/toolbar';
import styled from './editor.module.scss';

const Editor = (): JSX.Element => (
  <SlateTemplate>
    <div className={styled.wrapper}>
      <Toolbar />
      <Editable />
    </div>
  </SlateTemplate>
);

export default Editor;
