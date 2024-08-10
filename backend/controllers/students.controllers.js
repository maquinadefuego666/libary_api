import student from '../models/students.models.js';

export const createstudent = async (req, res) => {
    try {
        const newStudent = await student.create(req.body);
        res.status(201).json(newStudent);  // Cambiado para evitar la colisión de nombres
    } catch (error) {
        res.status(400).json({ error: error.message });  // Corregido `error.message`
    }
};

// Obtener todos los usuarios
export const getstudents = async (req, res) => {
    try {
        const users = await student.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getstudentById = async (req, res) => {
    try {
        const user = await student.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
