import { Request, Response } from 'express';
import ordersService from '../service/order.service';

async function getAllOrders(_req: Request, res: Response) : Promise<Response> {
  const serviceResponse = await ordersService.getAllOrders();

  return res.status(200).json(serviceResponse.data);
}

async function createOrder(req: Request, res: Response) : Promise<Response> {
  const { userId, productId } = req.body;
  const serviceResponse = await ordersService.createOrder(userId, productId);

  return res.status(201).json(serviceResponse);
}

export default {
  getAllOrders,
  createOrder,
};