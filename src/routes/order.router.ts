import { Router } from 'express';
import orderController from '../controller/order.controller';
import userIdMiddleware from '../middleware/userId.middleware';
import productsIdMiddleware from '../middleware/productsId.middleware';
import jwtMiddleware from '../middleware/jwt.middleware';

const orderRouter = Router();
orderRouter.get('/orders', orderController.getAllOrders);
orderRouter.post(
  '/orders',
  jwtMiddleware,
  userIdMiddleware,
  productsIdMiddleware,
  orderController.createOrder,
);

export default orderRouter;