import { Router } from 'express';
import productRouter from '../features/products/routes/product.routes';
// import userRouter from '../features/users/routes/user.routes';

const apiRouter = Router();
apiRouter.use('/products', productRouter);
// router.use('/users',    userRouter);

export default apiRouter;