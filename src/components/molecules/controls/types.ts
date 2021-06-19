import { FilledTextFieldProps } from '@material-ui/core';
import { ControllerFieldState } from 'react-hook-form';

export interface PasswordFieldProps extends FilledTextFieldProps {
  fieldState: ControllerFieldState;
}
