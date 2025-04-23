import React, { useEffect, useState } from 'react';
import Reproductor from './reprodcutor/reproductor';
import './Cancionesusuario.css';
import Sidebar from './reprodcutor/navbar';
import { useParams } from 'react-router-dom';

const Canciones_generos = () => {
  const [canciones, setCanciones] = useState([]);
  const [cancionSeleccionada, setCancionSeleccionada] = useState(null);
  const { id } = useParams();  // Obtener el ID de la URL

  useEffect(() => {
    if (!id) {
      console.warn("No se recibió un ID de género desde la URL.");
      return;
    }

    console.log("Obteniendo canciones para el género con ID:", id);

    // Realizar la solicitud a tu backend con el ID del género
    fetch(`http://localhost/Audiobase/audionase_backend_php/musicagenero.php?id=${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Error en la respuesta del servidor');
        return res.json();
      })
      .then(data => {
        if (data.error) {
          console.error("Error recibido del backend:", data.error);
          setCanciones([]);  // Limpiar si hay error
        } else {
          console.log("Canciones recibidas:", data);
          setCanciones(data);
        }
      })
      .catch(err => {
        console.error("Error al obtener canciones:", err);
      });
  }, [id]);  // Reactualiza cuando el id cambie

  const manejarReproduccion = (cancion) => setCancionSeleccionada(cancion);
  const cerrarReproductor = () => setCancionSeleccionada(null);

  return (
    <>
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="contenedor-canciones">
        {canciones.length === 0 && (
          <div className="mensaje-vacio">
            No se encontraron canciones para este género.
          </div>
        )}

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

export default Canciones_generos;
