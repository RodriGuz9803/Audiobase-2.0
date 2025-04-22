import React, { useEffect, useState } from 'react';
import Reproductor from './reprodcutor/reproductor';
import './Cancionesusuario.css';
import Sidebar from './reprodcutor/navbar';

const Canciones = () => {
  const [canciones, setCanciones] = useState([]);
  const [cancionSeleccionada, setCancionSeleccionada] = useState(null);

  useEffect(() => {
    fetch('http://localhost/Audiobase/audionase_backend_php/musica.php')  // Endpoint ajustado para todas las canciones
      .then(res => res.json())
      .then(data => setCanciones(data));
  }, []);

  const manejarReproduccion = (cancion) => setCancionSeleccionada(cancion);
  const cerrarReproductor = () => setCancionSeleccionada(null);

  return (
    <>
      <div className="sidebar">
        <Sidebar/>
      </div>

      
      <div className="contenedor-canciones">
        {canciones.map((cancion, index) => (
          <div key={index} className="cancion" onClick={() => manejarReproduccion(cancion)}>
            <img
              src={`http://localhost/Audiobase/audionase_backend_php/fotos/${cancion.portada}`}
              alt={cancion.titulo}
              className="portada"
            />
            <div className="info">
              <div className="titulo">{cancion.titulo}</div>
              <div className="artista">{cancion.apodo}</div>
              <div className="anio">{cancion.anioLanzamiento}</div>
            </div>
          </div>
        ))}

        {cancionSeleccionada && (
          <Reproductor cancion={cancionSeleccionada} onClose={cerrarReproductor} />
        )}
      </div>
    </>
  );
};

export default Canciones;
