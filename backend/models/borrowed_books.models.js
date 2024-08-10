import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize ('database_name', 'username', 'password',{
    host: 'localost',
    dialect: 'mysql'
});
const bobook = sequelize.define('borrowed_books',{
    idstudent:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idbooks:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      timestamps: true // Para añadir createdAt y updatedAt automáticamente alv esto sirve?
});
export default bobook