export default function HotelList({ hoteles, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-700 border-b pb-2">Hoteles Disponibles</h2>
      {hoteles.length === 0 ? (
        <p className="text-gray-600">No hay hoteles registrados.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hoteles.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col justify-between">
              <div>
                {hotel.imagen ? (
                  <img src={hotel.imagen} alt={hotel.nombre} className="w-full h-48 object-cover" />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                    Sin imagen
                  </div>
                )}
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wide px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {hotel.ciudad_detalle?.nombre || 'Sin ciudad'}
                  </span>
                  <h3 className="text-xl font-bold mt-2 text-gray-900">{hotel.nombre}</h3>
                  <p className="text-gray-600 text-sm mt-1">📍 {hotel.direccion}</p>
                  <div className="text-yellow-500 font-bold mt-2">
                    {'★'.repeat(hotel.estrellas)}
                  </div>
                </div>
              </div>
              <div className="p-5 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => onDelete('hotel', hotel.id)}
                  className="text-red-500 hover:text-red-700 font-semibold text-sm transition"
                >
                  Eliminar Hotel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}