import 'reflect-metadata';
import { Sequelize } from 'sequelize-typescript';
import path from 'path';
import { env } from './env';

const sequelize = new Sequelize(
    {
        database: env.DB_NAME,
        username: env.DB_USER,
        password: env.DB_PASSWORD,
        host: env.DB_HOST,
        port: Number(env.DB_PORT),
        dialect: 'postgres',
        models: [path.resolve(__dirname, '../features/**/*.model.{ts,js}')],
    }
);

export default sequelize;