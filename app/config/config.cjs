import { env } from './env';

module.exports = {
  development: {
    username: env.DB_USER || 'postgres',
    password: env.DB_PASSWORD,
    database: env.DB_NAME || 'prodmanager',
    host: env.DB_HOST || 'localhost',
    port: parseInt(env.DB_PORT, 10) || 5433,
    dialect: 'postgres',
  },

  test: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_TEST || 'prodmanager_test',
    host: env.DB_HOST || 'localhost',
    port: parseInt(env.DB_PORT, 10) || 5433,
    dialect: 'postgres',
  },

  production: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    port: parseInt(env.DB_PORT, 10),
    dialect: 'postgres',
  }
};