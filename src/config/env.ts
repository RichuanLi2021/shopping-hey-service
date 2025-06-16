import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const env = {
    // Server Configuration
    port: process.env.PORT || 5174,
    nodeEnv: process.env.NODE_ENV || 'development',
    
    // API Configuration
    apiPrefix: process.env.API_PREFIX || '/api',
    
    // CORS Configuration
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    
    // Database Configuration (for future use)
    // db: {
    //     host: process.env.DB_HOST || 'localhost',
    //     port: parseInt(process.env.DB_PORT || '5432'),
    //     name: process.env.DB_NAME || 'prodmanager',
    //     user: process.env.DB_USER || 'postgres',
    //     password: process.env.DB_PASSWORD || '',
    // }
} as const; 