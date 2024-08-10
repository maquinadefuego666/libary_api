import express from 'express';
import { createstudent, getstudent, getstudentById } from '../controllers/students.controllers.js';

const router = express.Router();

// Ruta para crear un usuario
router.post('/student', createstudent);

// Ruta para obtener todos los usuarios
router.get('/student', getstudent);

// Ruta para obtener un usuario por ID
router.get('/student/:id', getstudentById);

export default router;

