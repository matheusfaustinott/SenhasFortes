import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import MenuVertical from "../componentes/menuVertical";
import GraficosDashboard from "../componentes/graficosDashboard";
import GerarSenha from "../componentes/gerarSenha";

const StyledDashboard = styled(Box)({
  display: "flex",
  height: "100vh",
  background: "linear-gradient(145deg, #e0e0e0, #ffffff)",
});

const Conteudo = styled(Box)({
  flex: 1,
  padding: "20px",
  overflowY: "auto",
});

const DashboardPage = () => {
  const [abaSelecionada, setAbaSelecionada] = useState("gerarSenha");

  return (
    <StyledDashboard>
      <MenuVertical onAbaSelecionada={setAbaSelecionada} />
      <Conteudo>
        {abaSelecionada === "gerarSenha" && <GerarSenha />}
        {abaSelecionada === "graficos" && <GraficosDashboard />}
        {abaSelecionada === "meuPerfil" && (
          <Typography variant="h4">Meu Perfil (em construção)</Typography>
        )}
      </Conteudo>
    </StyledDashboard>
  );
};

export default DashboardPage;
