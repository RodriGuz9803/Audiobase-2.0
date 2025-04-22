import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Inicio_ from './Inicio';
import Perfil_ from './perfil';
import Canciones_ from './Canciones';
import Generos_ from './generos';

// Componente Dashboard
const Dashboard = () => {
  return <div>Bienvenido al sistema</div>;
};

// Componente Artista CRUD
const Inicio = () => {
  return <Inicio_ />;
};

const Perfil = () => {
  return <Perfil_ />;
};

const Canciones=()=>{
  return <Canciones_/>;
}

const Generos=()=>{
  return <Generos_/>;
}

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [sexo, setSexo] = useState('hombre');
  const [nacionalidad, setNacionalidad] = useState('mexico');
  const [direccion, setDireccion] = useState('');
  const [estado, setEstado] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // Hook para redirigir

  const handleRegister = async (e) => {
    e.preventDefault();
  
    if (!email || !password || !nombre || !fechaNacimiento || !sexo || !nacionalidad || !direccion || !estado) {
      setError('Por favor, completa todos los campos.');
      return;
    }
  
    setError('');
    try {
      const response = await fetch('http://localhost/Audiobase/audionase_backend_php/auth.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'register',
          email,
          password,
          nombre,
          fechaNacimiento,
          sexo,
          nacionalidad,
          direccion,
          estado
        }),
      });
  
      const raw = await response.text();
      console.log('Respuesta cruda del servidor:', raw);
  
      let data;
      try {
        data = JSON.parse(raw);
      } catch (parseError) {
        throw new Error('La respuesta no es JSON válido: ' + raw);
      }
  
      if (data.token) {
        alert('¡Registro exitoso!');
        setEmail('');
        setPassword('');
        setNombre('');
        setFechaNacimiento('');
        setSexo('hombre');
        setNacionalidad('mexico');
        setDireccion('');
        setEstado('');
        navigate('/');
      } else {
        setError(data.error || 'Error al registrar');
        console.log(data);
      }
    } catch (error) {
      console.error('Error de conexión o parseo:', error);
      setError('Error: ' + error.message);
    }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
        setError('Por favor, ingresa tu correo y contraseña.');
        return;
    }

    setError('');

    try {
        const response = await fetch('http://localhost/Audiobase/audionase_backend_php/auth.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ action: 'login', email, password }),
        });

        const data = await response.json();

        // Verificamos si la respuesta contiene un token
        if (data.token) {
            // Elimina los datos antiguos (si es que existían)
            localStorage.removeItem('token');
            localStorage.removeItem('nombreUsuario');
            localStorage.removeItem('id');
            localStorage.removeItem('nacionalidad');
            localStorage.removeItem('rolId');
            localStorage.removeItem('foto');

            // Guardar los nuevos datos en el localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('nombreUsuario', data.user.nombre);
            localStorage.setItem('id', data.user.id);
            localStorage.setItem('nacionalidad', data.user.nacionalidad);
            localStorage.setItem('rolId', data.user.rolId);
            localStorage.setItem('foto', data.user.foto);

            // Redirigir al usuario a la página de inicio
            alert("Sesion iniciada");
            
            navigate('/Inicio-crud');
        } else {
            // Mostrar el error si las credenciales son incorrectas
            setError(data.error || 'Error al iniciar sesión');
        }
    } catch (error) {
        // Mostrar el error de conexión
        setError('Error de conexión');
        console.log(error);
    }
};

  


  return (
    <Container fluid className="d-flex justify-content-center align-items-center login-container">
      <Row className="w-100">
        <Col md={6} sm={8} xs={12} className="mx-auto">
          <Card className="login-card shadow-lg rounded">
            <Card.Body>
              <Card.Title className="text-center mb-4 login-title">
                {isLogin ? 'Iniciar sesión' : 'Registrarse'}
              </Card.Title>
              {error && <Alert variant="danger">{error}</Alert>}

              {isLogin ? (
                <Form onSubmit={handleLogin}>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingresa tu correo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input"
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword" className="mb-4">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-input"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" block className="login-btn">
                    Iniciar sesión
                  </Button>
                </Form>
              ) : (
                <Form onSubmit={handleRegister} className="p-3" style={{ maxWidth: '400px', margin: '0 auto' }}>
                  <Tabs defaultActiveKey="tab1" id="form-tabs" className="mb-3">
                    <Tab eventKey="tab1" title="Información Básica">
                      <Form.Group controlId="formNombre" className="mb-2">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ingresa tu nombre"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                          className="form-input"
                        />
                      </Form.Group>

                      <Form.Group controlId="formEmail" className="mb-2">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Ingresa tu correo"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-input"
                        />
                      </Form.Group>

                      <Form.Group controlId="formPassword" className="mb-2">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Ingresa tu contraseña"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-input"
                        />
                      </Form.Group>
                    </Tab>

                    <Tab eventKey="tab2" title="Datos Adicionales">
                      <Form.Group controlId="formFechaNacimiento" className="mb-2">
                        <Form.Label>Fecha de nacimiento</Form.Label>
                        <Form.Control
                          type="date"
                          value={fechaNacimiento}
                          onChange={(e) => setFechaNacimiento(e.target.value)}
                          className="form-input"
                        />
                      </Form.Group>

                      <Form.Group controlId="formSexo" className="mb-2">
                        <Form.Label>Sexo</Form.Label>
                        <Form.Control
                          as="select"
                          value={sexo}
                          onChange={(e) => setSexo(e.target.value)}
                          className="form-input"
                        >
                          <option value="hombre">Hombre</option>
                          <option value="mujer">Mujer</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group controlId="formNacionalidad" className="mb-2">
                        <Form.Label>Nacionalidad</Form.Label>
                        <Form.Control
                          as="select"
                          value={nacionalidad}
                          onChange={(e) => setNacionalidad(e.target.value)}
                          className="form-input"
                        >
                          <option value="mexico">México</option>
                          <option value="argentina">Argentina</option>
                          <option value="chile">Chile</option>
                          <option value="colombia">Colombia</option>
                        </Form.Control>
                      </Form.Group>
                    </Tab>

                    <Tab eventKey="tab3" title="Dirección">
                      <Form.Group controlId="formDireccion" className="mb-2">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ingresa tu dirección"
                          value={direccion}
                          onChange={(e) => setDireccion(e.target.value)}
                          className="form-input"
                        />
                      </Form.Group>

                      <Form.Group controlId="formEstado" className="mb-2">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ingresa tu estado"
                          value={estado}
                          onChange={(e) => setEstado(e.target.value)}
                          className="form-input"
                        />
                      </Form.Group>
                    </Tab>
                  </Tabs>

                  <Button variant="secondary" type="submit" block className="login-btn mt-3">
                    Registrarse
                  </Button>
                </Form>
              )}

              <div className="text-center mt-3">
                <p className="m-0">
                  {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
                  <Button variant="link" onClick={() => setIsLogin(!isLogin)} className="switch-btn">
                    {isLogin ? 'Regístrate' : 'Iniciar sesión'}
                  </Button>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Inicio-crud" element={<Inicio />} />
        <Route path="/Perfil-crud" element={<Perfil />} />
        <Route path="/canciones" element={<Canciones />} />
        <Route path="/generos" element={<Generos />} />

      </Routes>
    </Router>
  );
};

export default Root;
