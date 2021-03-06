import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from 'views/Main/main';
import Editor from 'views/Editor/editor';
import SignIn from 'views/SignIn/signin';
import MainTemplate from 'templates/Main/main';
import Documents from 'views/Documents/documents';
import AuthRoute from 'components/atoms/AuthRoute/authRoute';
import AppBar from 'components/organisms/AppBar/appbar';

const Root = (): JSX.Element => (
  <Router>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signin" component={SignIn} />
        <AuthRoute path="/document/:docId">
          <Editor />
        </AuthRoute>
        <AppBar>
          <AuthRoute exact path="/documents">
            <Documents />
          </AuthRoute>
        </AppBar>
      </Switch>
    </MainTemplate>
  </Router>
);

export default Root;
