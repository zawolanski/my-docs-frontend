import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from 'views/Main/main';
import Editor from 'components/organisms/Main/editor';
import SignIn from 'views/SignIn/signin';
import MainTemplate from 'templates/Main/main';

const Root = (): JSX.Element => (
  <Router>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signin" component={SignIn} />
        <Route path="/editor/:id" component={Editor} />
      </Switch>
    </MainTemplate>
  </Router>
);

export default Root;
