import type { ProductCreationAttributes } from '../types/product.types';
import sequelize from "../../../config/database"

const Product = sequelize.model('Product');

export class ProductService {
  /**
   * Get all products.
   */
  static async getAllProducts() {
    return Product.findAll();
  }

  /**
   * Get a single product by its primary key.
   */
  static async getProduct(id: number) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  /**
   * Create a new product.
   */
  static async createProduct(payload: ProductCreationAttributes) {
    return Product.create(payload);
  }

  /**
   * Update an existing product.
   */
  static async updateProduct(
    id: number,
    payload: Partial<ProductCreationAttributes>
  ) {
    const product = await this.getProduct(id);
    return product.update(payload);
  }

  /**
   * Delete a product by ID.
   */
  static async deleteProduct(id: number) {
    const product = await this.getProduct(id);
    await product.destroy();
    return { deleted: true };
  }
}