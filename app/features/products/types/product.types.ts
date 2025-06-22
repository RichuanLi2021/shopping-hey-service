import { Optional } from "sequelize";

export interface ProductAttributes {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductCreationAttributes
  extends Optional<
    ProductAttributes,
    'id' | 'createdAt' | 'updatedAt'
  > {}