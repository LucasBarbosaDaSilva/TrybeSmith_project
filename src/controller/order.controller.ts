import { Request, Response } from 'express';
import ordersService from '../service/order.service';

async function getAllOrders(_req: Request, res: Response) : Promise<Response> {
  const serviceResponse = await ordersService.getAllOrders();

  return res.status(200).json(serviceResponse.data);
}

async function createOrder(req: Request, res: Response) : Promise<Response> {
  const { productIds, userId } = req.body;
  const order = await ordersService.createOrder(productIds, userId);
  return res.status(201).json(order);
}

export default {
  getAllOrders,
  createOrder,
};