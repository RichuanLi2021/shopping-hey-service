import path from 'path';
import dotenv from 'dotenv';
import { z } from 'zod';

// Dynamic load .env file
const mode = process.env.NODE_ENV || 'development';
let envFileName: string;

if (mode === 'development') {
  envFileName = '.dev.env';
} else if (mode === 'test') {
  envFileName = '.test.env';
} else {
  envFileName = '.prod.env';
}

dotenv.config({
  path: path.resolve(process.cwd(), envFileName),
});

const schema = z.object ({
  NODE_ENV: z.enum(['development','test','production']).default('development'),
  PORT: z.coerce.number().default(5174),
  API_PREFIX: z.string().default('/api'),
  CORS_ORIGIN: z.string().default('http://localhost:5173'),

  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  DB_NAME: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_TEST: z.string().optional(),
})

export const env = schema.parse(process.env);
export type Env = typeof env;