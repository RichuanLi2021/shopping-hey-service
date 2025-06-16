export interface ProductProperties {
  id: number;
  name: string;
  description: string;
  banner: string;
  price: number;
}

// Validation function for product data
export function validateProduct(data: Partial<ProductProperties>): string | null {
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    return 'Name is required and must be a non-empty string';
  }
  if (!data.description || typeof data.description !== 'string' || data.description.trim().length === 0) {
    return 'Description is required and must be a non-empty string';
  }
  if (!data.banner || typeof data.banner !== 'string' || data.banner.trim().length === 0) {
    return 'Banner URL is required and must be a non-empty string';
  }
  if (typeof data.price !== 'number' || data.price <= 0) {
    return 'Price is required and must be a positive number';
  }
  return null;
}

export let products: ProductProperties[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality",
    banner: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    price: 199.99
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health monitoring and fitness tracking capabilities",
    banner: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    price: 299.99
  },
  {
    id: 3,
    name: "Laptop Backpack",
    description: "Durable and spacious laptop backpack with multiple compartments and water resistance",
    banner: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    price: 79.99
  },
  {
    id: 4,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with precise tracking and long battery life",
    banner: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    price: 49.99
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with customizable keys and premium switches",
    banner: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    price: 129.99
  }
];