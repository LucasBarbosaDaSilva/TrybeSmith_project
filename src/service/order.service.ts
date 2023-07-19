import { literal, Op, Optional } from 'sequelize';
import { Order } from '../types/Order';
import { ServiceResponse } from '../types/ResponsesTypes';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

async function getAllOrders(): Promise<ServiceResponse<OrderSequelizeModel[]>> {
  const orders = await OrderModel.findAll({
    include: 
    [{ model: ProductModel, as: 'productIds', attributes: [] }],
    attributes:
    ['id', 'userId', [literal('JSON_ARRAYAGG(productIds.id)'), 'productIds']],
    group: ['Order.id'],
    raw: true,
  });

  return { status: 'OK', data: orders };
}

async function createOrder(userId: number, productId: number[]): 
Promise<Optional<Order, 'id'>> { 
  const order = await OrderModel.create({ userId, productId });
  await ProductModel.update(
    { orderId: order.dataValues.id },
    { where: { id: { [Op.in]: productId } } },
  );
  return {
    userId: order.dataValues.userId,
    productId,
  };
}

export default {
  getAllOrders,
  createOrder,
};