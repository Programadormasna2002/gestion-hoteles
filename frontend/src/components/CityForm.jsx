import { useState } from 'react';

export default function CityForm({ onSubmit }) {
  const [nombre, setNombre] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('departamento', departamento);
    if (imagen) formData.append('imagen', imagen);

    await onSubmit(formData);
    setNombre('');
    setDepartamento('');
    setImagen(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Registrar Ciudad</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium">Nombre de la ciudad</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 border rounded mt-1 bg-gray-50"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Departamento</label>
          <input
            type="text"
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value)}
            className="w-full p-2 border rounded mt-1 bg-gray-50"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Imagen de la ciudad</label>
          <input
            type="file"
            onChange={(e) => setImagen(e.target.files[0])}
            className="w-full mt-1 text-sm text-gray-500"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition"
        >
          Guardar Ciudad
        </button>
      </form>
    </div>
  );
}