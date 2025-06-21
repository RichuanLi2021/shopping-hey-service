import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
});

export const env = {
    development: {
        port: process.env.PORT || 5174,
        nodeEnv: process.env.NODE_ENV || 'development', 
        apiPrefix: process.env.API_PREFIX || '/api',
        corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
   },
    test:{},
    production:{}
} as const; 