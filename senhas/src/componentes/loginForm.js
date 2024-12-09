import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  marginTop: "20px",
  background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
  boxShadow: "5px 5px 15px #b3b3b3, -5px -5px 15px #ffffff",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    background: "linear-gradient(145deg, #d4d4d4, #f2f2f2)",
    boxShadow: "2px 2px 10px #b3b3b3, -2px -2px 10px #ffffff",
    transform: "translateY(-3px)",
  },
});

const StyledFormBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px",
  width: "300px",
  height: "300px",
  background: "linear-gradient(145deg, #f0f0f0, #ffffff)",
  boxShadow: "10px 10px 20px #bfbfbf, -10px -10px 20px #ffffff",
  borderRadius: "10px",
  transition: "transform 0.4s ease",
  "&:hover": {
    transform: "rotateX(5deg) rotateY(-5deg)",
  },
});

const LoginForm = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ login: "", senha: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = () => {
    const isValid = onLogin(credentials);
    if (!isValid) setError("Usuário Invalido.");
    else setError("");
  };

  return (
    <StyledFormBox>
      <Typography variant="h5" sx={{ marginBottom: "20px", color: "#333" }}>
        Login
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        name="login"
        value={credentials.login}
        onChange={handleChange}
        sx={{ width: "100%", marginBottom: "20px" }}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        name="senha"
        value={credentials.senha}
        onChange={handleChange}
        sx={{ width: "100%", marginBottom: "20px" }}
      />
      <StyledButton onClick={handleSubmit}>Entrar</StyledButton>
      {error && (
        <Typography variant="body2" color="error" sx={{ marginTop: "20px" }}>
          {error}
        </Typography>
      )}
    </StyledFormBox>
  );
};

export default LoginForm;
