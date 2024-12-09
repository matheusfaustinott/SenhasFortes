import React, { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  Facebook,
  Instagram,
  Google,
  LinkedIn,
  Mail,
  Add,
} from "@mui/icons-material";

const StyledBox = styled(Box)({
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "5px 5px 15px #b3b3b3, -5px -5px 15px #ffffff",
  background: "linear-gradient(145deg, #f0f0f0, #ffffff)",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "100%",
});

const IconWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const services = [
  { label: "Facebook", icon: <Facebook /> },
  { label: "Instagram", icon: <Instagram /> },
  { label: "Google", icon: <Google /> },
  { label: "LinkedIn", icon: <LinkedIn /> },
  { label: "Outlook", icon: <Mail /> },
  { label: "X" },
  { label: "Outros", icon: <Add /> },
];

const GerarSenha = () => {
  const [selectedService, setSelectedService] = useState("");
  const [customService, setCustomService] = useState({ name: "", link: "" });
  const [password, setPassword] = useState("");

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
    if (event.target.value !== "Outros") {
      setCustomService({ name: "", link: "" });
    }
  };

  const generateStrongPassword = () => {
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?";

    const allCharacters =
      upperCaseLetters + lowerCaseLetters + numbers + specialCharacters;

    const passwordLength = 16; 

    let password = "";

    password += upperCaseLetters.charAt(
      Math.floor(Math.random() * upperCaseLetters.length)
    );
    password += lowerCaseLetters.charAt(
      Math.floor(Math.random() * lowerCaseLetters.length)
    );
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += specialCharacters.charAt(
      Math.floor(Math.random() * specialCharacters.length)
    );

    for (let i = password.length; i < passwordLength; i++) {
      password += allCharacters.charAt(
        Math.floor(Math.random() * allCharacters.length)
      );
    }

    password = password
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    return password;
  };

  const generatePassword = () => {
    const generatedPassword = generateStrongPassword();
    setPassword(generatedPassword);
  };
  

  return (
    <StyledBox>
      <Typography variant="h5" sx={{ textAlign: "center", color: "#333" }}>
        Gerar Senha Segura
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="Selecione o Serviço"
            value={selectedService}
            onChange={handleServiceChange}
          >
            {services.map((service, index) => (
              <MenuItem key={index} value={service.label}>
                <IconWrapper>
                  {service.icon}
                  {service.label}
                </IconWrapper>
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {selectedService === "Outros" && (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nome do Serviço"
                value={customService.name}
                onChange={(e) =>
                  setCustomService({ ...customService, name: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Link do Serviço"
                value={customService.link}
                onChange={(e) =>
                  setCustomService({ ...customService, link: e.target.value })
                }
              />
            </Grid>
          </>
        )}

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Senha Gerada"
            value={password}
            InputProps={{ readOnly: true }}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            onClick={generatePassword}
            sx={{
              background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
              boxShadow: "5px 5px 15px #b3b3b3, -5px -5px 15px #ffffff",
              "&:hover": {
                background: "linear-gradient(145deg, #d4d4d4, #f2f2f2)",
              },
            }}
          >
            Gerar Senha Segura
          </Button>
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default GerarSenha;
