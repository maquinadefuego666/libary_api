import express from 'express';
import { createbooks, getbooks, getbooksById } from '../controllers/books.controlllers.js';

const router = express.Router();

// Ruta para agregar un libro
router.post('/books', createbooks);

// Ruta para obtener todos los libros
router.get('/books', getbooks);

// Ruta para obtener un libro por ID
router.get('/books/:id', getbooksById);

export default router;
