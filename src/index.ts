import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import routes from '@/router';

dotenv.config();

const start = async () => {
  try {
    const sqlz = new Sequelize({
      database: 'betkitap',
      username: 'postgres',
      password: 'postgres',
      host: 'localhost',
      dialect: 'postgres',
      port: Number(process.env.DB_PORT) || 5432
    });

    await sqlz.authenticate();
    console.log('Connected to DB');

    const app: Express = express();
    app.use(cors());
    app.use(express.json());

    routes.forEach(route => {
      app.use('/api', route.router);
    })

    app.listen(process.env.PORT, () => {
      console.log('======================================');
      console.log('Server started on http://localhost:' + process.env.PORT);
      console.log('======================================');
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

start();

