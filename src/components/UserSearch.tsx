// src/components/UserSearch.tsx

import React from 'react';
import { useForm } from 'react-hook-form';

type UserSearchProps = {
  onSearch: (id: string) => void;
};

const UserSearch: React.FC<UserSearchProps> = ({ onSearch }) => {
  const { register, handleSubmit } = useForm<{ id: string }>();

  return (
    <div>
      <h3 className="mt-4 text-lg font-semibold">Buscar Usuario por ID</h3>
      <form onSubmit={handleSubmit(data => onSearch(data.id))} className="flex gap-3 mt-2">
        <input {...register('id')} placeholder="ID de Usuario" required className="border p-2" />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Buscar</button>
      </form>
    </div>
  );
};

export default UserSearch;
