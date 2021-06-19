import * as Yup from 'yup';
import { emailValidation, passwordValidation } from './shared';

export const SignInSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});
