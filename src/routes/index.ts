import { Router } from 'express';
import productRouter from './product.routes';

const apiRouter = Router();

// Mount Routes
apiRouter.use('/products', productRouter);

// Other Routes

export default apiRouter; 