import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const MenuContainer = styled(Box)({
  width: "200px",
  background: "linear-gradient(145deg, #f0f0f0, #ffffff)",
  boxShadow: "10px 10px 20px #bfbfbf, -10px -10px 20px #ffffff",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
});

const MenuButton = styled(Button)({
  width: "100%",
  background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
  boxShadow: "5px 5px 15px #b3b3b3, -5px -5px 15px #ffffff",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    background: "linear-gradient(145deg, #d4d4d4, #f2f2f2)",
    transform: "translateY(-3px)",
  },
});

const MenuVertical = ({ onAbaSelecionada }) => (
  <MenuContainer>
    <Typography variant="h6">Menu</Typography>
    <MenuButton onClick={() => onAbaSelecionada("gerarSenha")}>
      Gerar Senha
    </MenuButton>
    <MenuButton onClick={() => onAbaSelecionada("graficos")}>
      Gráficos
    </MenuButton>
    <MenuButton onClick={() => onAbaSelecionada("meuPerfil")}>
      Meu Perfil
    </MenuButton>
  </MenuContainer>
);

export default MenuVertical;
