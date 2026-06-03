import { useState } from 'react';

export default function HotelForm({ onSubmit, ciudades }) {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [estrellas, setEstrellas] = useState(5);
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ciudadSeleccionada) return alert('Selecciona una ciudad primero');

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('direccion', direccion);
    formData.append('estrellas', estrellas);
    formData.append('ciudad', ciudadSeleccionada);
    if (imagen) formData.append('imagen', imagen);

    await onSubmit(formData);
    setNombre('');
    setDireccion('');
    setEstrellas(5);
    setCiudadSeleccionada('');
    setImagen(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Registrar Hotel</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium">Nombre del Hotel</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 border rounded mt-1 bg-gray-50"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Dirección</label>
          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            className="w-full p-2 border rounded mt-1 bg-gray-50"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Estrellas</label>
            <input
              type="number"
              min="1"
              max="5"
              value={estrellas}
              onChange={(e) => setEstrellas(e.target.value)}
              className="w-full p-2 border rounded mt-1 bg-gray-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Ciudad Destino</label>
            <select
              value={ciudadSeleccionada}
              onChange={(e) => setCiudadSeleccionada(e.target.value)}
              className="w-full p-2 border rounded mt-1 bg-gray-50"
              required
            >
              <option value="">Selecciona...</option>
              {ciudades.map((ciudad) => (
                <option key={ciudad.id} value={ciudad.id}>
                  {ciudad.nombre}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Imagen del Hotel</label>
          <input
            type="file"
            onChange={(e) => setImagen(e.target.files[0])}
            className="w-full mt-1 text-sm text-gray-500"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition"
        >
          Guardar Hotel
        </button>
      </form>
    </div>
  );
}