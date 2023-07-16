import { Request, Response } from 'express';
import ProductsService from '../service/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const { name, price, orderId } = req.body;

  const serviceResponse = await ProductsService.createProduct({ name, price, orderId });

  if (serviceResponse.status !== 'OK') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  return res.status(201).json(serviceResponse.data);
}

export default {
  createProduct,
};