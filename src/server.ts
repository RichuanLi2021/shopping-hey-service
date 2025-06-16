import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import apiRoutes from './routes';
import { env } from './config/env';

const app = express();

// CORS configuration
const corsOptions = {
    origin: env.corsOrigin,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
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
app.use(env.apiPrefix, apiRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(env.port, () => {
    console.log(`Server running in ${env.nodeEnv} mode at http://localhost:${env.port}`);
    console.log(`API available at http://localhost:${env.port}${env.apiPrefix}`);
});