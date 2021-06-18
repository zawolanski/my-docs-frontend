import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from 'views/Main/main';
import Editor from 'components/Main/editor';
import SignIn from 'views/SignIn/signin';

const Root = (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/signin" component={SignIn} />
      <Route path="/editor/:id" component={Editor} />
    </Switch>
  </Router>
);

export default Root;
