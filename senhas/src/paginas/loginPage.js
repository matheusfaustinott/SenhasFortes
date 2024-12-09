import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import LoginForm from "../componentes/loginForm";

const StyledPage = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  background: "linear-gradient(145deg, #e0e0e0, #ffffff)",
});

const users = [
  { login: "admin", senha: "1234" },
  { login: "user", senha: "password" },
];

const LoginPage = () => {
  const handleLogin = (credentials) => {
    const user = users.find(
      (u) => u.login === credentials.login && u.senha === credentials.senha
    );
    if (user) {
      alert("Login Successful!");
      window.location.href = "/dashboard";
      return true;
    }
    return false;
  };

  return (
    <StyledPage>
      <LoginForm onLogin={handleLogin} />
    </StyledPage>
  );
};

export default LoginPage;
