const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Ruta para crear una canción
router.post('/create', async (req, res) => {
  const { titulo, genero, añoLanzamiento, fechaLanzamiento, restriccionEdad, artistaId } = req.body;
  
  try {
    const cancion = await prisma.cancion.create({
      data: {
        titulo,
        genero,
        añoLanzamiento,
        fechaLanzamiento: new Date(fechaLanzamiento),
        restriccionEdad,
        artistaId
      }
    });
    res.json(cancion); // Enviar la canción creada como respuesta
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear canción' });
  }
});

// Ruta para obtener todas las canciones
router.get('/', async (req, res) => {
  try {
    const canciones = await prisma.cancion.findMany();
    res.json(canciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener canciones' });
  }
});

// Ruta para obtener una canción por su ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const cancion = await prisma.cancion.findUnique({
      where: { id: parseInt(id) }
    });
    
    if (!cancion) {
      return res.status(404).json({ error: 'Canción no encontrada' });
    }
    
    res.json(cancion);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener canción' });
  }
});

module.exports = router;
