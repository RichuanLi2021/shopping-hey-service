import 'reflect-metadata';
import { Sequelize } from 'sequelize-typescript';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const {DB_NAME, DB_USER, DB_PASSWORD } = process.env;

if (!DB_NAME || !DB_USER || !DB_PASSWORD) {
  throw new Error('Missing required env vars');
}

const sequelize = new Sequelize(
    {
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        dialect: 'postgres',

        models: [path.resolve(__dirname, '../features/**/*.model.{ts,js}')],
    }
);

export default sequelize;