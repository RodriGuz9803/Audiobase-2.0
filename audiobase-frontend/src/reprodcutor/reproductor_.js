import React, { useEffect } from 'react';
import './Reproductor.css';

const Reproductor = ({ cancion, onClose }) => {
  const audioUrl = `http://localhost/Audiobase/audionase_backend_php/${cancion.archivo}`;

  useEffect(() => {
    // Llama al backend de Python para reproducir
    fetch('http://localhost:5002/reproducir', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: audioUrl })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error('Error al reproducir en Python:', err));
  }, [audioUrl]);

  const detenerReproduccion = () => {
    fetch('http://localhost:5002/detener', {
      method: 'POST'
    }).catch(err => console.error('Error al detener:', err));
    onClose();
  };

  return (
    <div className="reproductor-flotante">
      <button className="cerrar" onClick={detenerReproduccion}>
        <span>&#10006;</span>
      </button>
      <div className="informacion-reproductor">
        <img 
          src={`http://localhost/Audiobase/audionase_backend_php/${cancion.portada}`} 
          alt={cancion.titulo} 
          className="portada-reproductor" 
        />
        <div className="info">
          <div className="titulo">{cancion.titulo}</div>
          <div className="artista">{cancion.nombre}</div>
          <div className="genero">{cancion.generoId}</div>
        </div>
      </div>
      <div className="estado">🎵 Reproduciendo desde el sistema</div>
    </div>
  );
};

export default Reproductor;
