import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import './perfil.css';
import Canciones from './cancionesusuario';  // Asegúrate de que la ruta esté correcta


const Perfil = () => {
  const [id] = useState(() => localStorage.getItem('id'));
  const [rolId, setRolId] = useState(null);

  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    fechaNacimiento: '',
    sexo: '',
    nacionalidad: '',
    direccion: '',
    estado: '',
    apodo: '',
    foto: '',
    anioInicioCarrera: '',
    rolId: false,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState(0); // Controla qué sección está activa

  useEffect(() => {
    const userId = id; // Cambia esto por el ID real
    fetch(`http://localhost/Audiobase/audionase_backend_php/usuario.php?id=${userId}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setUsuario(data);
          setFormData({
            nombre: data.nombre,
            email: data.email,
            fechaNacimiento: data.fechaNacimiento,
            sexo: data.sexo,
            nacionalidad: data.nacionalidad,
            direccion: data.direccion,
            estado: data.estado,
            apodo: data.apodo,
            foto: data.foto || '',
            anioInicioCarrera: data.anioInicioCarrera,
            rolId: Number(data.rolId), // asegúrate de que sea número
          });


        }
      })
      .catch(err => {
        console.error('Error al cargar los datos del usuario:', err);
        setError('Error al cargar los datos');
      })
      .finally(() => setLoading(false));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (name === 'rolId') {
      setFormData(prev => ({ ...prev, rolId: checked ? 2 : 3 }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      setFormData(prev => ({ ...prev, foto: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = id; // Cambia esto por el ID real

    const formPayload = new FormData();
    formPayload.append('id', userId);

    // Verifica el valor de rolId
    const rolIdValue = formData.rolId === 2 ? 2 : 3;

    for (const key in formData) {
      if (key === 'rolId') {
        formPayload.append('rolId', rolIdValue);  // Usar el valor correcto para rolId
      } else if (key === 'foto') {
        if (formData.foto instanceof File) {
          formPayload.append('foto', formData.foto);
        }
      } else {
        formPayload.append(key, formData[key]);
      }
    }

    fetch(`http://localhost/Audiobase/audionase_backend_php/usuario.php`, {
      method: 'POST',
      body: formPayload,
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setUsuario(formData);
          setIsEditing(false);
          window.location.reload();
        } else {
          setError('No se pudo actualizar los datos');
        }
      })
      .catch(err => {
        console.error('Error al actualizar los datos del usuario:', err);
        setError('Error al actualizar los datos');
      });
  };


  if (loading) return <div className="loading">Cargando...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!usuario) return <div className="no-user">Usuario no encontrado</div>;

  const fotoUsuario = typeof usuario.foto === 'string' && usuario.foto.trim()
    ? usuario.foto
    : 'https://randomuser.me/api/portraits/men/75.jpg';


  return (
    <div className="perfil-container">
      <img src={fotoUsuario} alt={usuario.nombre} className="perfil-photo" />
      <h1 className="perfil-title">{usuario.nombre}</h1>
      <div className="perfil-info">
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>Fecha de nacimiento:</strong> {usuario.fechaNacimiento}</p>
        <p><strong>Sexo:</strong> {usuario.sexo}</p>
        <p><strong>Nacionalidad:</strong> {usuario.nacionalidad}</p>
        <p><strong>Dirección:</strong> {usuario.direccion}</p>
        <p><strong>Estado:</strong> {usuario.estado}</p>
        <p><strong>Apodo:</strong> {usuario.apodo}</p>
        <p><strong>Año de inicio de carrera:</strong> {usuario.anioInicioCarrera}</p>
        <p><strong>¿Eres artista?:</strong> {Number(usuario.rolId) === 2 ? 'Si' : 'No'}</p>
      </div>

      <button className="edit-btn" onClick={() => setIsEditing(true)}>Editar</button>




      {isEditing && (
        <>
          <div className="modal-overlay" onClick={() => setIsEditing(false)}></div>
          <form className="edit-form" onSubmit={handleSubmit}>
            <button type="button" className="close-btn" onClick={() => setIsEditing(false)}>×</button>

            <div className="tabs">
              <button
                type="button"
                className={`tab ${activeSection === 0 ? 'active' : ''}`}
                onClick={() => setActiveSection(0)}
              >
                Información Personal
              </button>
              <button
                type="button"
                className={`tab ${activeSection === 1 ? 'active' : ''}`}
                onClick={() => setActiveSection(1)}
              >
                Dirección y Estado
              </button>
              <button
                type="button"
                className={`tab ${activeSection === 2 ? 'active' : ''}`}
                onClick={() => setActiveSection(2)}
              >
                Carrera y Artista
              </button>
              <button
                type="button"
                className={`tab ${activeSection === 3 ? 'active' : ''}`}
                onClick={() => setActiveSection(3)}
              >
                Foto de Perfil
              </button>
            </div>

            {activeSection === 0 && (
              <div className="form-section">
                <h2>Información Personal</h2>
                <label>Nombre:
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </label>

                <label>Fecha de nacimiento:
                  <input
                    type="date"
                    name="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </label>

                <label>Sexo:
                  <select
                    name="sexo"
                    value={formData.sexo}
                    onChange={handleInputChange}
                    className="input-field"
                  >
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                  </select>
                </label>

                <label>Nacionalidad:
                  <input
                    type="text"
                    name="nacionalidad"
                    value={formData.nacionalidad}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </label>
              </div>
            )}

            {activeSection === 1 && (
              <div className="form-section">
                <h2>Dirección y Estado</h2>
                <label>Dirección:
                  <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </label>

                <label>Estado:
                  <input
                    type="text"
                    name="estado"
                    value={formData.estado}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </label>

                <label>Apodo:
                  <input
                    type="text"
                    name="apodo"
                    value={formData.apodo}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </label>
              </div>
            )}

            {activeSection === 2 && (
              <div className="form-section">
                <h2>Carrera y Artista</h2>
                <label>Año de inicio de carrera:
                  <input
                    type="number"
                    name="anioInicioCarrera"
                    value={formData.anioInicioCarrera}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </label>


                <label>
                  <input
                    type="checkbox"
                    name="rolId"
                    checked={formData.rolId === 2}
                    onChange={handleInputChange}
                  />





                  ¿Eres artista?
                </label><br />
              </div>
            )}

            {activeSection === 3 && (
              <div className="form-section">
                <h2>Foto de Perfil</h2>
                <label>Foto de perfil:
                  <input
                    type="file"
                    name="foto"
                    accept="image/jpeg, image/png, image/gif"
                    onChange={handleInputChange}
                    className="input-field"
                  />

                </label>
              </div>
            )}

            <button type="submit" className="submit-btn">Guardar cambios</button>
          </form>
        </>
      )}


      {usuario.rolId === "2" &&
        <Canciones />
      }

    </div>






  );
};


export default Perfil;
