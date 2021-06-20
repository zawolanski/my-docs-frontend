import Typography from '@material-ui/core/Typography';
import CenterWrapper from 'components/atoms/CenterWrapper/centerWrapper';
import SignInForm from 'components/organisms/SignIn/signin.form';
import styled from './signin.module.scss';

const SignIn = (): JSX.Element => (
  <CenterWrapper>
    <div className={styled.wrapper}>
      <Typography variant="h4" component="h2" className={styled.header}>
        Sign in
      </Typography>
      <SignInForm />
    </div>
  </CenterWrapper>
);

export default SignIn;
