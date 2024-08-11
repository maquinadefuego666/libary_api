import bobook from '../models/borrowed_books.models.js';

export const createbobooks = async (req, res) => {
    try {
        const student = await bobook.create(req.body);
        res.status(201).json(student);  // Cambiado para devolver la instancia creada
    } catch (error) {
        res.status(400).json({ error: error.message });  // Corregido `error.message`
    }
};

// Obtener todos los registros
export const getbobooks = async (req, res) => {
    try {
        const users = await bobook.findAll();
        res.status(200).json(users);  // Cambiado para devolver los registros obtenidos
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getbobooksById = async (req, res) => {
    try {
        const user = await bobook.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);  // Cambiado para devolver el registro específico
        } else {
            res.status(404).json({ message: 'Loan not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
