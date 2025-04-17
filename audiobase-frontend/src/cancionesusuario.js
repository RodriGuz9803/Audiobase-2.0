// Canciones.js
import React, { useEffect, useState } from 'react';
import './Cancionesusuario.css';
import Reproductor from './reprodcutor/reproductor'

const Canciones = () => {
  const [canciones, setCanciones] = useState([]);
  const [cancionSeleccionada, setCancionSeleccionada] = useState(null);

  useEffect(() => {
    const usuarioId = 2;
    fetch(`http://localhost/Audiobase/audionase_backend_php/usuario.php?id=${usuarioId}&tipo=canciones`)
      .then(res => res.json())
      .then(data => setCanciones(data))
      .catch(err => console.error('Error al cargar canciones:', err));
  }, []);

  const manejarReproduccion = (cancion) => {
    setCancionSeleccionada(cancion); // Setea la canción seleccionada para reproducirla
  };

  const cerrarReproductor = () => {
    setCancionSeleccionada(null); // Cierra el reproductor
  };

  return (
    <div className="contenedor-canciones">
      {canciones.map((cancion, index) => (
        <div key={index} className="cancion" onClick={() => manejarReproduccion(cancion)}>
          <img
            src={`http://localhost/Audiobase/audionase_backend_php/${cancion.portada}`} alt={cancion.titulo}
            className="portada"
          />
          <div className="info">
            <div className="titulo">{cancion.titulo}</div>
            <div className="genero">{cancion.nombre}</div> {/* Asumí que `nombre` es el nombre del género */}
            <div className="anio">{cancion.anioLanzamiento}</div> {/* Asumí que `anioLanzamiento` es el año */}
          </div>
        </div>
      ))}
      {cancionSeleccionada && (
        <Reproductor cancion={cancionSeleccionada} onClose={cerrarReproductor} />
      )}
    </div>
  );
};

export default Canciones;
