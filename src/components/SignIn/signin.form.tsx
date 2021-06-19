import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { Button, TextField } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInSchema } from 'validation/signin';
import PasswordField from 'components/molecules/controls/password.control';
import _ from 'lodash';
import styled from './signin.module.scss';
import { SignInFormProps } from './types';

const SignInForm = (): JSX.Element => {
  const { handleSubmit, control } = useForm<SignInFormProps>({
    resolver: yupResolver(SignInSchema),
  });
  const onSubmit: SubmitHandler<SignInFormProps> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styled.form}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            variant="filled"
            label="Email"
            error={Boolean(fieldState.error)}
            helperText={fieldState.error?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <PasswordField
            variant="filled"
            label="Password"
            fieldState={fieldState}
            inputRef={field.ref}
            {..._.omit(field, 'ref')}
          />
        )}
      />
      <Button type="submit" variant="contained" color="primary">
        Sign in
      </Button>
    </form>
  );
};

export default SignInForm;
