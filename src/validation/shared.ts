/* eslint-disable no-template-curly-in-string */
import * as Yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(Yup);

export const requireMsg = 'Field is required';

export const emailValidation = Yup.string()
  .email('Invalid email')
  .required(requireMsg);

export const passwordValidation = Yup.string()
  .password()
  .minSymbols(0)
  .min(8, 'Min ${min} characters')
  .max(64, 'Max ${max} characters');
