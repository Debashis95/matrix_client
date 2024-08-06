import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import {
  SignUpFormData,
} from "../typescript/interface/user.interface";
import { useCreateNewUser } from "../hooks/react-query/useManageUser";
const SignUp: React.FC = () => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const { mutate, isPending } = useCreateNewUser();

  const { control, handleSubmit } = useForm<SignUpFormData>();

  const onSubmit = (data: SignUpFormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    if (profileImage) {
      formData.append("profile_image", profileImage);
    }

    mutate(data);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Controller
            name="first_name"
            control={control}
            defaultValue=""
            rules={{ required: "First name is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label="First Name"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            name="last_name"
            control={control}
            defaultValue=""
            rules={{ required: "Last name is required" }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label="Last Name"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label="Email Address"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            name="profile_image"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                type="file"
                margin="normal"
                fullWidth
                label="Profile Image"
                InputLabelProps={{ shrink: true }}
                onChange={(event) => {
                  const file = (event.target as HTMLInputElement).files?.[0];
                  if (file) {
                    setProfileImage(file);
                    field.onChange(file);
                  }
                }}
                inputProps={{
                  accept: "image/*",
                }}
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
            {isPending ? "Signing Up..." : "Sign Up"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
