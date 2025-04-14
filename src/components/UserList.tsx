// src/components/UserList.tsx

import React from 'react';
import { Usuario } from '../models/usuario.model';

type UserListProps = {
  usuarios: Usuario[];
  onDelete: (id: string) => void;
  onEdit: (user: Usuario) => void;
};

const UserList: React.FC<UserListProps> = ({ usuarios, onDelete, onEdit }) => (
  <div>
    <h2 className="text-xl font-bold">Lista de Usuarios</h2>
    <ul>
      {usuarios.map(user => (
        <li key={user._id} className="flex justify-between items-center border-b py-1">
          {user.name} — {user.age} años — Color: {user.colour}
          <div className="ml-4 flex gap-2">
            <button
              onClick={() => onDelete(user._id!)}
              className="bg-red-500 text-white px-2 rounded"
            >
              Eliminar
            </button>
            <button
              onClick={() => onEdit(user)}
              className="bg-yellow-500 text-white px-2 rounded"
            >
              Actualizar
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default UserList;
