import express from 'express';
import { createbobooks, getbobooks, getbobooksById } from '../controllers/borrowed_books.controllers.js';

const router = express.Router();

// Ruta para crear un usuario
router.post('/BoBook', createbobooks);

// Ruta para obtener todos los usuarios
router.get('/BobooksS', getbobooks);

// Ruta para obtener un usuario por ID
router.get('/users/:id', getbobooksById);

export default router;
