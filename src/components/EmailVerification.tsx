import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, CircularProgress, Paper } from "@mui/material";
import { useEmailVerification } from "../hooks/react-query/useManageUser";

const EmailVerification: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const { data, isLoading, isError } = useEmailVerification(token);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "2rem", marginTop: "2rem" }}>
        <Typography variant="h4" gutterBottom>
          Email Verification
        </Typography>
        {isLoading ? (
          <CircularProgress />
        ) : isError ? (
          <Typography color="error">
            Verification failed. Please try again.
          </Typography>
        ) : (
          <Typography>{data?.message}</Typography>
        )}
      </Paper>
    </Container>
  );
};

export default EmailVerification;
