import React, { useState, useEffect } from 'react';
import {
  Card, Container, Row, Col, Button,
  Offcanvas, Nav, NavDropdown
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './reprodcutor/navbar';


const Inicio = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [rolId, setRolId] = useState(null);
  const storedFoto = localStorage.getItem('foto');
  const fotousuario = storedFoto && storedFoto.trim()
    ? storedFoto
    : 'https://randomuser.me/api/portraits/men/75.jpg';
  const navigate = useNavigate();

  // Recuperar el estado del Sidebar desde localStorage
  useEffect(() => {
    const storedSidebarState = localStorage.getItem('sidebarState');
    if (storedSidebarState) {
      setShowSidebar(JSON.parse(storedSidebarState));
    }
  }, []);

  // Guardar el estado del Sidebar en localStorage
  useEffect(() => {
    localStorage.setItem('sidebarState', JSON.stringify(showSidebar));
  }, [showSidebar]);

  const handleSidebarToggle = () => setShowSidebar(!showSidebar);

  useEffect(() => {
    // Recuperamos el nombre y rol desde el localStorage
    const nombre = localStorage.getItem('nombreUsuario');
    const rol = parseInt(localStorage.getItem('rolId'));
    // Si no hay nombre o rol, redirige al login solo una vez
    if (!nombre || isNaN(rol)) {
      navigate('/login');  // Redirige al login
    } else {
      setNombreUsuario(nombre);
      setRolId(rol);
    }
  }, [navigate]); // Solo se ejecuta cuando se monta el componente

  return (
    <Container fluid style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
     <Sidebar/>

      <div style={{ paddingTop: '60px' }}>
        <Row className="text-center text-white py-5" style={{ marginTop: '20px' }}>
          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card bg="dark" className="text-white">
              <Card.Img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=crop&h=300&w=400"
                alt="Artistas"
              />
              <Card.Body>
                <Card.Title>Artistas</Card.Title>
                <Card.Text>Explora los mejores artistas de la música global.</Card.Text>
                <Button variant="success" as={Link} to="/artista-crud">Ver Artistas</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card bg="dark" className="text-white">
              <Card.Img
                src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?crop=entropy&cs=tinysrgb&fit=crop&h=300&w=400"
                alt="Música"
              />
              <Card.Body>
                <Card.Title>Música</Card.Title>
                <Card.Text>Descubre nuevas canciones y álbumes.</Card.Text>
                <Link to="/canciones">
                  <Button variant="success">Escuchar Música</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card bg="dark" className="text-white">
              <Card.Img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=crop&h=300&w=400"
                alt="Géneros"
              />
              <Card.Body>
                <Card.Title>Géneros</Card.Title>
                <Card.Text>Explora música según tu género favorito.</Card.Text>
                <Button variant="success" href="#">Ver Géneros</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Inicio;
