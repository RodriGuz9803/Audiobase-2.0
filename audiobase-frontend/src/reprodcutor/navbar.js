import React, { useState } from 'react';
import { Offcanvas, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const nombreUsuario = localStorage.getItem('nombreUsuario');
    const rolId = parseInt(localStorage.getItem('rolId'));


    const storedFoto = localStorage.getItem('foto');
    const fotousuario = storedFoto && storedFoto.trim()
    ? storedFoto
    : 'https://randomuser.me/api/portraits/men/75.jpg';
  // Estado para controlar la visibilidad de la barra lateral
  const [showSidebar, setShowSidebar] = useState(false);

  // Función para alternar la visibilidad de la barra lateral
  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      {/* Barra lateral */}
      <Offcanvas
        show={showSidebar} // Usamos el estado showSidebar para controlar la visibilidad
        onHide={handleSidebarToggle} // Al hacer clic fuera del Offcanvas o en el botón de cerrar, se oculta
        placement="start"
        style={{ backgroundColor: '#181818' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: '#fff' }}>Panel de Usuario</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="text-center mb-4">
          <img
              src={fotousuario}
              alt="Perfil"
              className="rounded-circle"
              style={{ width: '80px', height: '80px', objectFit: 'cover' }}
            />
            <h5 className="text-white mt-2">{nombreUsuario || 'Juan Pérez'}</h5>
            <Link to="/Perfil-crud" style={{ color: '#ddd', textDecoration: 'none' }}>Ver Perfil</Link>
          </div>

          <Nav className="flex-column">
            <Nav.Link as={Link} to="/Inicio-crud" style={{ color: '#fff' }}>Inicio</Nav.Link>
            <Nav.Link as={Link} to="/generos" style={{ color: '#fff' }}>Géneros</Nav.Link>
            <Nav.Link as={Link} to="#" style={{ color: '#fff' }}>Artistas</Nav.Link>
            <Nav.Link as={Link} to="/canciones" style={{ color: '#fff' }}>Música</Nav.Link>

            {/* Mostrar solo si el rol es administrador */}
            {rolId === 1 && (
              <NavDropdown
                title={<span style={{ color: '#00BFFF' }}>Panel de Administrador</span>}
                id="admin-nav-dropdown"
                menuVariant="dark"
                style={{ backgroundColor: '#181818' }}
              >
                <NavDropdown.Item
                  as={Link}
                  to="#"
                  style={{ backgroundColor: '#181818', color: '#00BFFF' }}
                >
                  Ver Artistas
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="#"
                  style={{ backgroundColor: '#181818', color: '#00BFFF' }}
                >
                  Ver Canciones
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="#"
                  style={{ backgroundColor: '#181818', color: '#00BFFF' }}
                >
                  Ver Usuarios
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Botón para abrir o cerrar la barra lateral */}
      <Button
        variant="outline-light"
        onClick={handleSidebarToggle} // Llama a handleSidebarToggle cuando se hace clic
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 10 // Asegura que el botón quede por encima de otros elementos
        }}
      >
        ☰
      </Button>
    </div>
  );
};

export default Sidebar;
