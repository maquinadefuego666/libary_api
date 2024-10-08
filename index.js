import { Sequelize } from 'sequelize'
import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import BoBooksRoutes from './backend/routes/borrowed_books.routes.js'
import BookRoutes from './backend/routes/books.routes.js'
import StudentRoutes from './backend/routes/student.routes.js'
dotenv.config()

const sequelize = new Sequelize('library_utma', 'root', process.env.DB_PASS, {
  host: process.env.DB_HOST,
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

index.listen(4010,() =>{
    console.log('el servidor escucha')
})
index.use('/books', BookRoutes)
index.use('/borrowed_books', BoBooksRoutes)
index.use('/student', StudentRoutes)