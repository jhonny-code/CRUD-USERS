// src/components/UserForm.tsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { Usuario } from '../models/usuario.model';

type UserFormProps = {
  onSubmit: (data: Usuario) => void;
  initialData?: Usuario;
};

const UserForm: React.FC<UserFormProps> = ({ onSubmit, initialData }) => {
  const { register, handleSubmit, reset } = useForm<Usuario>({
    defaultValues: initialData || { name: '', age: 0, colour: '' },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 mt-2">
      <input {...register('name')} placeholder="Nombre" required className="border p-2" />
      <input type="number" {...register('age')} placeholder="Edad" required className="border p-2" />
      <input {...register('colour')} placeholder="Color" required className="border p-2" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {initialData ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
};

export default UserForm;
