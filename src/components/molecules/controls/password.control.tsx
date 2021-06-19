import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { useState } from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { PasswordFieldProps } from './types';

const PasswordField = ({
  fieldState,
  ...props
}: PasswordFieldProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = (): void =>
    setIsVisible((prevState) => !prevState);

  return (
    <TextField
      type={isVisible ? 'text' : 'password'}
      error={Boolean(fieldState.error)}
      helperText={fieldState.error?.message}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-expanded={isVisible ? 'true' : 'false'}
              aria-label={isVisible ? 'Hide password' : 'Show password'}
              onClick={handleToggleVisibility}
            >
              {isVisible ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default PasswordField;
