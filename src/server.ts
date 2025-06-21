import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import apiRouter from './routes/index';
import { env } from './config/env';

const app = express();

// CORS configuration
const corsOptions = {
    origin: env.development.corsOrigin,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Accept'],
    credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Mount all routes under /api
app.use(env.development.apiPrefix, apiRouter);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(env.development.port, () => {
    console.log(`Server running in ${env.development.nodeEnv} mode at http://localhost:${env.development.port}`);
    console.log(`API available at http://localhost:${env.development.port}${env.development.apiPrefix}`);
});