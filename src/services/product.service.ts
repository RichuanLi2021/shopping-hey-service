import { Product } from '../models/product.model';
import { products } from '../tmp_data/products';

export class ProductService {
    // Get all products
    async getAllProducts(): Promise<Product[]> {
        return products;
    }

    // Create new product
    async createProduct(productData: Omit<Product, 'id'>): Promise<Product> {
        const newProduct: Product = {
            id: Math.max(...products.map(p => p.id)) + 1,
            ...productData
        };
        products.push(newProduct);
        return newProduct;
    }

    // Update product
    async updateProduct(id: number, productData: Partial<Product>): Promise<Product> {
        const index = products.findIndex(p => p.id === id);
        if (index === -1) {
            throw new Error('Product not found');
        }

        const updatedProduct = { ...products[index], ...productData };
        products[index] = updatedProduct;
        return updatedProduct;
    }

    // Delete product
    async deleteProduct(id: number): Promise<void> {
        const index = products.findIndex(p => p.id === id);
        if (index === -1) {
            throw new Error('Product not found');
        }

        products.splice(index, 1);
    }
} 