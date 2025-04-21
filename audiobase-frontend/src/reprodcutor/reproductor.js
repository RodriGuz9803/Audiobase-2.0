import React from 'react';
import './Reproductor.css';

const Reproductor = ({ cancion, onClose }) => {
  const audioUrl = `http://localhost/Audiobase/audionase_backend_php/musica/${cancion.archivo}`;

  console.log(audioUrl);

  return (
    <div className="reproductor-flotante">
      <button className="cerrar" onClick={onClose}>
        <span>&#10006;</span> {/* "X" de cierre */}
      </button>
      <div className="informacion-reproductor">
        <img 
          src={`http://localhost/Audiobase/audionase_backend_php/fotos/${cancion.portada}`} 
          alt={cancion.titulo} 
          className="portada-reproductor" 
        />
        <div className="info">
          <div className="titulo">{cancion.titulo}</div>
          <div className="artista">{cancion.nombre}</div>
          <div className="genero">{cancion.generoId}</div>
        </div>
      </div>
      <audio controls autoPlay className="audio-control">
        <source src={audioUrl} type="audio/mp3" />
        <source src={`${audioUrl}.ogg`} type="audio/ogg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
};

export default Reproductor;
