import books from '../models/books.models.js';

export const createbooks = async (req, res) => {
    try {
        const student = await books.create(req.body);
        res.status(201).json(student);  // Aquí se debería devolver `student` en lugar de `bobook`
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los usuarios
export const getbooks = async (req, res) => {
    try {
        const users = await book.findAll();
        res.status(200).json(users);  // Aquí se debería devolver `users` en lugar de `bobook`
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getsbooksById = async (req, res) => {
    try {
        const user = await book.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);  // Aquí se debería devolver `user` en lugar de `bobook`
        } else {
            res.status(404).json({ message: 'Loan not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
