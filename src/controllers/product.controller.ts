import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';

const productService = new ProductService();

export const productController = {
    // Get all products
    getAllProducts: async (req: Request, res: Response) => {
        try {
            const products = await productService.getAllProducts();
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch products' });
        }
    },

    // Create new product
    createProduct: async (req: Request, res: Response) => {
        try {
            const newProduct = await productService.createProduct(req.body);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(400).json({ error: 'Failed to create product' });
        }
    },

    // Update product
    updateProduct: async (req: Request<{ id: string }>, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            const updatedProduct = await productService.updateProduct(id, req.body);
            res.json(updatedProduct);
        } catch (error) {
            if (error instanceof Error && error.message === 'Product not found') {
                res.status(404).json({ error: 'Product not found' });
            } else {
                res.status(400).json({ error: 'Failed to update product' });
            }
        }
    },

    // Delete product
    deleteProduct: async (req: Request<{ id: string }>, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            await productService.deleteProduct(id);
            res.status(204).send();
        } catch (error) {
            if (error instanceof Error && error.message === 'Product not found') {
                res.status(404).json({ error: 'Product not found' });
            } else {
                res.status(400).json({ error: 'Failed to delete product' });
            }
        }
    }
}; 