import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',  // Corregido 'localost' a 'localhost'
    dialect: 'mysql'
});

const Books = sequelize.define('books', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true // Añade automáticamente los campos createdAt y updatedAt
});

export default Books;
