import { Sequelize } from 'sequelize'
import cors from "cors"
import express from "express"
import BoBooksRoutes from './backend/routes/borrowed_books.routes.js'
import BookRoutes from './backend/routes/books.routes.js'
import StudentRoutes from './backend/routes/student.routes.js'
import { appendFile } from 'fs';

const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
const index = express()
index.use(cors())

index.listen(4010,() =>{S
    console.log('el servidor escucha')
})
appendFile.use('/books', BookRoutes)
appendFile.use('/borrowed_books', BoBooksRoutes)
appendFile.use('/student', StudentRoutes)