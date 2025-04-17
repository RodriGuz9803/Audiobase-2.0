const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// ==========================
// Registro de usuario
// ==========================
router.post('/register', async (req, res) => {
  const { email, password, nombre, fechaNacimiento, sexo, nacionalidad, direccion, estado } = req.body;

  if (!email || !password || !nombre || !fechaNacimiento || !sexo || !nacionalidad || !direccion || !estado) {
    return res.status(400).json({ error: 'Por favor, completa todos los campos.' });
  }

  try {
    const existingUser = await prisma.usuario.findUnique({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.usuario.create({
      data: {
        email,
        password: hashedPassword,
        nombre,
        fechaNacimiento: new Date(fechaNacimiento),
        sexo,
        nacionalidad,
        direccion,
        estado
      },
    });

    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      process.env.JWT_SECRET || 'secret', // Asegurarse que esté definido el JWT_SECRET
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

// ==========================
// Login de usuario
// ==========================
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Por favor, ingresa tu correo y contraseña.' });
  }

  try {
    const user = await prisma.usuario.findUnique({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Credenciales incorrectas' });
    }

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        nombre: user.nombre,
        nacionalidad: user.nacionalidad,
        rol: user.rol,  // Cambié 'rolId' por 'rol' aquí
        apodo: user.apodo,
        foto: user.foto,
      },
      process.env.JWT_SECRET || 'secret', // Asegurarse que esté definido el JWT_SECRET
      { expiresIn: '1h' }
    );

    // Excluyendo la contraseña al devolver los datos del usuario
    const { password: _, ...userData } = user; 

    res.json({
      token,
      user: userData,  // No incluye la contraseña
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

// ==========================
// Obtener datos por ID
// ==========================
router.get('/get_usuario/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        password: true,
        nombre: true,
        fechaNacimiento: true,
        sexo: true,
        nacionalidad: true,
        direccion: true,
        estado: true,
        //rol:true
       // anioInicioCarrera: true,
        //foto: true,
        //apodo:true
      },
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(usuario);
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
});


// ==========================
// Editar usuario
// ==========================
router.put('/editar/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const datosActualizados = { ...req.body };

  try {
    if (datosActualizados.fechaNacimiento) {
      datosActualizados.fechaNacimiento = new Date(datosActualizados.fechaNacimiento);
    }

    const usuarioActualizado = await prisma.usuario.update({
      where: { id },
      data: datosActualizados,
    });

    res.json({ message: 'Datos actualizados con éxito', user: usuarioActualizado });
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
});

module.exports = router;
