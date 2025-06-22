import { Router } from 'express';
import * as productController from '../controllers/product.controller'

const productRouter = Router();

// GET all products
productRouter.get('/', productController.getAll);

// GET one product
productRouter.get('/:id', productController.getOne);

// POST new product
productRouter.post('/', productController.createOne);

// PUT update product
productRouter.put('/:id', productController.updateOne);

// DELETE product
productRouter.delete('/:id', productController.removeOne);

export default productRouter ; 