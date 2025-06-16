import { Router } from 'express';
import { productController } from '../controllers/product.controller';

const router = Router();

// GET all products
router.get('/', productController.getAllProducts);

// POST new product
router.post('/', productController.createProduct);

// PUT update product
router.put('/:id', productController.updateProduct);

// DELETE product
router.delete('/:id', productController.deleteProduct);

export default router; 