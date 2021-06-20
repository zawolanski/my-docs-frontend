import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { Button, TextField } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInSchema } from 'validation/signin';
import PasswordField from 'components/molecules/controls/password.control';
import _ from 'lodash';
import axiosConfig from 'util/axios';
import { useAuthContext } from 'context/auth/AuthContext';
import { IAuthData } from 'context/auth/types';
import { useSnackbar } from 'notistack';
import styled from './signin.module.scss';
import { SignInFormProps } from './types';

const SignInForm = (): JSX.Element => {
  const { setAuthState } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const { handleSubmit, control } = useForm<SignInFormProps>({
    resolver: yupResolver(SignInSchema),
  });
  const onSubmit: SubmitHandler<SignInFormProps> = async (data) => {
    try {
      const response = await axiosConfig.post('/user/login', data);
      setAuthState(response.data as IAuthData);
      enqueueSnackbar('You succesfully logged in.', { variant: 'success' });
    } catch (e) {
      if (e?.request?.response)
        enqueueSnackbar(JSON.parse(e?.request?.response).message, {
          variant: 'error',
        });
    }
  };

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
