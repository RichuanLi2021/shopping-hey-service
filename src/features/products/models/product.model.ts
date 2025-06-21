import 'reflect-metadata';
import { 
  Model, 
  Table, 
  Column, 
  DataType, 
  PrimaryKey, 
  AutoIncrement, 
  CreatedAt, 
  UpdatedAt 
} from 'sequelize-typescript';
import type { ProductAttributes, ProductCreationAttributes } from '../types/product.types';

@Table({tableName: 'Products'})

export class Product extends Model<
  ProductAttributes,
  ProductCreationAttributes
> implements ProductAttributes
{
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  image!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price!: number;

  @CreatedAt
  @Column({
    field: 'createdAt',
    type: DataType.DATE,
  })
  createdAt!: Date;

  @UpdatedAt
  @Column({
    field: 'updatedAt',
    type: DataType.DATE,
  })
  updatedAt!: Date;
}

export default Product;