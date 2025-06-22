import { NextFunction, Request, Response } from 'express';
import { ProductService } from '../services/product.service';

/**
 * GET / – fetch a all products
 */
export async function getAll(
    req: Request, 
    res: Response, 
    next: NextFunction
) {
  try {
    const products = await ProductService.getAllProducts();
    res.json(products);
  } catch (err) { next(err); }
}

/**
 * GET /:id – fetch a single product by its primary key
 */
export async function getOne(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    const product = await ProductService.getProduct(id);
    res.json(product);
  } catch (err) {
    next(err);
  }
}

/**
 * POST / – create a single product
 */
export async function createOne(req: Request, res: Response, next: NextFunction) {
  try {
    const newProd = await ProductService.createProduct(req.body);
    res.status(201).json(newProd);
  } catch (err) { next(err); }
}

/**
 * PUT /:id – update an existing product
 */
export async function updateOne(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    const updated = await ProductService.updateProduct(id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

/**
 * DELETE /:id – remove a product
 */
export async function removeOne(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    await ProductService.deleteProduct(id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

