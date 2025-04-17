// Canciones.js
import React, { useEffect, useState } from 'react';
import './Cancionesusuario.css'; // CSS externo para mantenerlo ordenado

const Canciones = () => {
  const [canciones, setCanciones] = useState([]);

  console.log("Renderizando Canciones");


  useEffect(() => {
    const usuarioId = 2; // o el que necesites dinámicamente
    fetch(`http://localhost/Audiobase/audionase_backend_php/usuario.php?id=${usuarioId}&tipo=canciones`)
      .then(res => res.json())
      .then(data => setCanciones(data))
      .catch(err => console.error('Error al cargar canciones:', err));
  }, []);

  return (
    <div className="contenedor-canciones">
      {canciones.map((cancion, index) => (
        <div key={index} className="cancion">
          <img
            src={`${cancion.portada}`}
            alt={cancion.titulo}
            className="portada"
          />
          <div className="info">
            <div className="titulo">{cancion.titulo}</div>
            <div className="genero">{cancion.genero}</div>
            <div className="anio">{cancion.anio}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Canciones;
