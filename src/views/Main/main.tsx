import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CenterWrapper from 'components/atoms/CenterWrapper/centerWrapper';

const Main = (): JSX.Element => (
  <main>
    <CenterWrapper>
      <Button variant="outlined" component={Link} to="/signin">
        Sign in to my docs
      </Button>
    </CenterWrapper>
  </main>
);

export default Main;
