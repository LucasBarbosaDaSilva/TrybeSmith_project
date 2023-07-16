import { Request, Response } from 'express';
import ordersService from '../service/order.service';

async function getAllOrders(_req: Request, res: Response) : Promise<Response> {
  const serviceResponse = await ordersService.getAllOrders();

  return res.status(200).json(serviceResponse.data);
}

export default {
  getAllOrders,
};