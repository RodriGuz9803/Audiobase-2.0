require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const cancionRoutes = require('./routes/cancion');

// Inicializar app
const app = express();

// Aplicar middlewares
app.use(cors());
app.use(express.json());

// Definir rutas después de la inicialización
app.use('/api/auth', authRoutes);
app.use('/api/cancion', cancionRoutes);

// Servir archivos estáticos (fotos)
app.use('/uploads', express.static('uploads'));

// Escuchar servidor en puerto 5000
app.listen(5000, () => {
  console.log('Servidor corriendo en http://localhost:5000');
});
