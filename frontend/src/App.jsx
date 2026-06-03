import { useState, useEffect } from 'react';
import CityForm from './components/CityForm';
import HotelForm from './components/HotelForm';
import HotelList from './components/HotelList';

const API_URL = 'https://gestion-hoteles.onrender.com/api/';

function App() {
  const [ciudades, setCiudades] = useState([]);
  const [hoteles, setHoteles] = useState([]);

  const cargarDatos = async () => {
    try {
      const [ciudadesRes, hotelesRes] = await Promise.all([
        fetch(`${API_URL}ciudades/`),
        fetch(`${API_URL}hoteles/`)
      ]);
      const [ciudadesData, hotelesData] = await Promise.all([
        ciudadesRes.json(),
        hotelesRes.json()
      ]);
      setCiudades(ciudadesData);
      setHoteles(hotelesData);
    } catch (error) {
      console.error('Error cargando los datos de la API:', error);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const guardarCiudad = async (formData) => {
    await fetch(`${API_URL}ciudades/`, {
      method: 'POST',
      body: formData
    });
    cargarDatos();
  };

  const guardarHotel = async (formData) => {
    await fetch(`${API_URL}hoteles/`, {
      method: 'POST',
      body: formData
    });
    cargarDatos();
  };

  const eliminarElemento = async (tipo, id) => {
    if (!window.confirm(`¿Estás seguro de eliminar este ${tipo}?`)) return;
    await fetch(`${API_URL}${tipo}s/${id}/`, { method: 'DELETE' });
    cargarDatos();
  };

  return (
    <div className="container">
      <header className="app-header">
        <h1>Sistema de Gestión de Hoteles</h1>
        
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="card">
          <CityForm onSubmit={guardarCiudad} />
        </div>
        <div className="card">
          <HotelForm onSubmit={guardarHotel} ciudades={ciudades} />
        </div>
      </div>

      <div className="card">
        <HotelList hoteles={hoteles} onDelete={eliminarElemento} />
      </div>
    </div>
  );
}

export default App;