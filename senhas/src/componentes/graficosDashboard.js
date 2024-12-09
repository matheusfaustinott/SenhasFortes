import React, { useState } from 'react';
import GaugeChart from 'react-gauge-chart';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

const Dashboard = () => {
  const [senhas, setSenhas] = useState([
    { id: 1, servico: 'Facebook', senha: 'aPh8VGe%$VJfwe7V', mostrarSenha: false },
    { id: 2, servico: 'Instagram', senha: 'y;#iaAXEf&78,^yk', mostrarSenha: false },
    { id: 3, servico: 'Google', senha: 'Y)tmEO9@h{14YFeV', mostrarSenha: false },
  ]);

  const [mostrarDialogo, setMostrarDialogo] = useState(false);
  const [senhaAdmin, setSenhaAdmin] = useState('');
  const [idSelecionado, setIdSelecionado] = useState(null);
  const [ultimoAlterado, setUltimoAlterado] = useState(new Date()); 

  const handleMostrarSenha = (id) => {
    setIdSelecionado(id);
    setMostrarDialogo(true);
  };

  const handleConfirmarSenha = () => {
    if (senhaAdmin === '1234') {
      setSenhas(senhas.map((senha) =>
        senha.id === idSelecionado ? { ...senha, mostrarSenha: true } : senha
      ));
      setUltimoAlterado(new Date()); 
      setMostrarDialogo(false);
    } else {
      alert('Senha incorreta');
    }
  };

  const handleSalvarSenha = (id) => {
    const senhaGerada = 'aPh8VGe%$VJfwe7V';
    setSenhas(senhas.map((senha) =>
      senha.id === id ? { ...senha, senha: senhaGerada } : senha
    ));
  };

  const segurancaSenha = 0.95; 

  return (
    <div>
      <h2>Dashboard de Senhas</h2>
      
      <div style={{ width: '300px', margin: '20px auto' }}>
        <GaugeChart id="gauge-chart" nrOfLevels={30} colors={['#FF0000', '#FF8000', '#00FF00']} arcWidth={0.3} percent={segurancaSenha} />
        <p style={{ textAlign: 'center' }}>Segurança das Senhas</p>
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Serviço</TableCell>
              <TableCell>Senha</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {senhas.map((senha) => (
              <TableRow key={senha.id}>
                <TableCell>{senha.servico}</TableCell>
                <TableCell>
                  {senha.mostrarSenha ? senha.senha : '*****'}
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleMostrarSenha(senha.id)}>Ver</Button>
                  <Button onClick={() => handleSalvarSenha(senha.id)}>Confirmar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={mostrarDialogo} onClose={() => setMostrarDialogo(false)}>
        <DialogTitle>Digite a Senha do Admin</DialogTitle>
        <DialogContent>
          <TextField
            type="password"
            label="Senha"
            value={senhaAdmin}
            onChange={(e) => setSenhaAdmin(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setMostrarDialogo(false)} color="primary">Cancelar</Button>
          <Button onClick={handleConfirmarSenha} color="primary">Confirmar</Button>
        </DialogActions>
      </Dialog>

      <div style={{ marginTop: '20px' }}>
        <h3>Última Alteração</h3>
        <Calendar
          value={ultimoAlterado}
          minDate={new Date(2023, 0, 1)}
          maxDate={new Date()}
        />
        <p>{ultimoAlterado.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Dashboard;
