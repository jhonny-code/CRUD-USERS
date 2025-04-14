export default function Movies() {
    const user = {
      name: "Batman",
      email: "juan.perez@example.com",
      role: "Administrador"
    };
  
    return (
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl w-80">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Información de la pelicula</h2>
        <p className="text-gray-900 dark:text-gray-100"><strong>Nombre:</strong> {user.name}</p>
        <p className="text-gray-900 dark:text-gray-100"><strong>Email:</strong> {user.email}</p>
        <p className="text-gray-900 dark:text-gray-100"><strong>Rol:</strong> {user.role}</p>
      </div>
    );
  }
  