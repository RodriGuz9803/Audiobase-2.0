// (inicio sin cambios)
import React, { useEffect, useState } from 'react';
import './Cancionesusuario.css';
import Reproductor from './reprodcutor/reproductor';

const CancionesUsuarios = () => {
  const [canciones, setCanciones] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [cancionSeleccionada, setCancionSeleccionada] = useState(null);
  const [usuarioId] = useState(() => localStorage.getItem('id'));

  const [formData, setFormData] = useState({
    titulo: '',
    generoId: '',
    anioLanzamiento: '',
    archivo: null,
    portada: null,
    fechaLanzamiento: '',
    restriccionEdad: 0,
    id: null
  });

  useEffect(() => {
    fetch(`http://localhost/Audiobase/audionase_backend_php/usuario.php?id=${usuarioId}&tipo=canciones`)
      .then(res => res.json())
      .then(data => setCanciones(data));

    fetch(`http://localhost/Audiobase/audionase_backend_php/genero.php`)
      .then(res => res.json())
      .then(data => setGeneros(data));
  }, [usuarioId]);

  const manejarReproduccion = (cancion) => setCancionSeleccionada(cancion);
  const cerrarReproductor = () => setCancionSeleccionada(null);

  const abrirFormularioAgregar = () => {
    setModoEdicion(false);
    setFormData({
      titulo: '',
      generoId: '',
      anioLanzamiento: '',
      archivo: null,
      portada: null,
      fechaLanzamiento: '',
      restriccionEdad: 0,
      id: null
    });
    setFormVisible(true);
  };

  const abrirFormularioEditar = (cancion) => {
    setModoEdicion(true);
    setFormData({
      ...cancion,
      archivo: null,
      portada: null,
      restriccionEdad: parseInt(cancion.restriccionEdad, 10),
    });
    setFormVisible(true);
  };

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const cerrarFormulario = () => setFormVisible(false);

  const enviarFormulario = () => {
    const endpoint = modoEdicion ? 'editar' : 'agregar';

    const form = new FormData();
    form.append('titulo', formData.titulo);
    form.append('generoId', formData.generoId);
    form.append('anioLanzamiento', formData.anioLanzamiento);
    form.append('fechaLanzamiento', formData.fechaLanzamiento);
    form.append('restriccionEdad', formData.restriccionEdad);
    form.append('tipo', endpoint); // 👈 IMPORTANTE: indica al backend qué acción hacer

    if (!modoEdicion) form.append('usuarioId', usuarioId); // 👈 Agregado aquí
    if (modoEdicion) form.append('id', formData.id);
    if (formData.archivo) form.append('archivo', formData.archivo);
    if (formData.portada) form.append('portada', formData.portada);

    fetch(`http://localhost/Audiobase/audionase_backend_php/musica.php?tipo=${endpoint}`, {
      method: 'POST',
      body: form,
    })
      .then(async res => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Error del servidor: ${text}`);
        }
        return res.json();
      })
      .then(data => {
        alert(data.mensaje || 'Operación realizada');
        setFormVisible(false);
        fetch(`http://localhost/Audiobase/audionase_backend_php/usuario.php?id=${usuarioId}&tipo=canciones`)
          .then(res => res.json())
          .then(data => setCanciones(data));
      })
      .catch(err => {
        console.error('Error en la petición:', err);
        alert('Error al enviar la canción');
      });
  };





  return (
    <div className="contenedor-canciones">
      <button className="btn-agregar" onClick={abrirFormularioAgregar}>Agregar Canción</button>

      {canciones.map((cancion, index) => (
        <div key={index} className="cancion" onClick={() => manejarReproduccion(cancion)}>
          <img
            src={`http://localhost/Audiobase/audionase_backend_php/fotos/${cancion.portada}`}
            alt={cancion.titulo}
            className="portada"
          />

          <div className="info">
            <div className="titulo">{cancion.titulo}</div>
            <div className="genero">{cancion.nombre}</div>
            <div className="anio">{cancion.anioLanzamiento}</div>
          </div>
          <button className="btn-editar" onClick={(e) => { e.stopPropagation(); abrirFormularioEditar(cancion); }}>
            ✏️
          </button>
        </div>
      ))}

      {cancionSeleccionada && (
        <Reproductor cancion={cancionSeleccionada} onClose={cerrarReproductor} />
      )}

      {formVisible && (
        <div className="formulario-modal">
          <h2>{modoEdicion ? 'Editar Canción' : 'Agregar Canción'}</h2>
          <input name="titulo" placeholder="Título" value={formData.titulo} onChange={manejarCambio} />
          <select name="generoId" value={formData.generoId} onChange={manejarCambio}>
            <option value="">Selecciona un género</option>
            {generos.map(g => (
              <option key={g.id} value={g.id}>{g.nombre}</option>
            ))}
          </select>
          <input name="anioLanzamiento" placeholder="Año de Lanzamiento" value={formData.anioLanzamiento} onChange={manejarCambio} />
          <input
            type="date"
            name="fechaLanzamiento"
            value={formData.fechaLanzamiento}
            onChange={manejarCambio}
          />
          <label>
            ¿Restricción de edad?
            <input
              type="checkbox"
              name="restriccionEdad"
              checked={formData.restriccionEdad === 1}
              onChange={(e) => setFormData(prev => ({ ...prev, restriccionEdad: e.target.checked ? 1 : 0 }))}
            />
          </label>
          <label>
            Canción
            <input
              type="file"
              name="archivo"
              accept="audio/mp3, audio/wav, audio/ogg"
              onChange={(e) => setFormData(prev => ({ ...prev, archivo: e.target.files[0] }))}
            />
          </label>

          <label>
            Portada
            <input
              type="file"
              name="portada"
              accept="image/png, image/jpeg, image/jpg, image/gif"
              onChange={(e) => setFormData(prev => ({ ...prev, portada: e.target.files[0] }))}
            />
          </label>

          <div className="acciones-formulario">
            <button onClick={enviarFormulario}>{modoEdicion ? 'Guardar Cambios' : 'Agregar'}</button>
            <button onClick={cerrarFormulario}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CancionesUsuarios;
