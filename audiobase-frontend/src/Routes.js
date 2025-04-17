import React from 'react';
import ReactDOM from 'react-dom/client'; // Para React 18 y posterior
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Asegúrate de que esta ruta sea correcta
import Dashboard from './Dashboard'; // Asegúrate de que esta ruta sea correcta
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Si tienes un archivo CSS global

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')); // Cambio aquí para React 18
root.render(<Root />); // Usa el método render() del root para renderizar la aplicación
