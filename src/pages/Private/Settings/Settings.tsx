import { Container, Box, Typography, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchUsuarios, fetchUsuarioById, createUsuario, updateUsuario, deleteUsuario } from '../../../services/public.service';
import { Usuario } from '../../../models/usuario.model';
import UserList from '../../../components/UserList';
import UserForm from '../../../components/UserForm';
import UserSearch from '../../../components/UserSearch';

const Settings: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [usuarioById, setUsuarioById] = useState<Usuario | null>(null);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [editingUserData, setEditingUserData] = useState<Usuario | undefined>(undefined);

  const fetchAllUsuarios = async () => {
    const users = await fetchUsuarios();
    setUsuarios(users);
  };

  const handleSearch = async (id: string) => {
    try {
      const user = await fetchUsuarioById(id);
      setUsuarioById(user);
    } catch (error) {
      console.error(error);
      setUsuarioById(null);
      alert('Usuario no encontrado');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteUsuario(id);
      fetchAllUsuarios();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (user: Usuario) => {
    setEditingUserId(user._id!);
    setEditingUserData(user);
  };

  const handleSubmit = async (data: Usuario) => {
    if (editingUserId) {
      await updateUsuario(editingUserId, data);
    } else {
      await createUsuario(data);
    }
    setEditingUserId(null);
    setEditingUserData(undefined);
    fetchAllUsuarios();
  };

  useEffect(() => {
    fetchAllUsuarios();
  }, []);

  return (
<Container maxWidth="sm">
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Gestión de Usuarios
      </Typography>

      <UserForm onSubmit={handleSubmit} initialData={editingUserData || undefined} />
      <UserSearch onSearch={handleSearch} />

      {usuarioById && (
        <Box mt={2} p={2} border="1px solid #ccc" borderRadius={2} textAlign="center">
          <strong>Resultado:</strong> {usuarioById.name} — {usuarioById.age} años — Color: {usuarioById.colour}
        </Box>
      )}

      <Box mt={4}>
        <UserList usuarios={usuarios} onDelete={handleDelete} onEdit={handleEdit} />
      </Box>
    </Paper>
  </Box>
</Container>
  );
};

export default Settings;
