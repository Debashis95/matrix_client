import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { SignInFormData, SignUpFormData } from '../typescript/interface/user.interface';
import { useLogUser } from '../hooks/react-query/useManageUser';


const SignIn: React.FC= () => {
  const { control, handleSubmit } = useForm<SignInFormData>();
 
const {mutate,isPending}=useLogUser()
  const onSubmit = (data: SignInFormData) => {
    mutate(data as unknown as SignUpFormData);
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label="Email Address"
                autoComplete="email"
                autoFocus
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: 'Password is required' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                autoComplete="current-password"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isPending}
          >
            {isPending? 'Signing In...' : 'Sign In'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
