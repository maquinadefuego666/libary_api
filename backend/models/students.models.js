import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize ('database_name', 'username', 'password',{
    host: 'localost',
    dialect: 'mysql'
});
const student = sequelize.define('student',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    student_career:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      timestamps: true // Para añadir createdAt y updatedAt automáticamente alv esto sirve?
});
export default student