import Editor from './components/Editor/editor';
import MainTemplate from './templates/Main/main';

const App = (): JSX.Element => (
  <MainTemplate>
    <div
      style={{ backgroundColor: '#fff', maxWidth: '800px', margin: '0 auto' }}
    >
      <Editor />
    </div>
  </MainTemplate>
);

export default App;
