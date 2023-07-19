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

async function createOrder(productIds: number[], userId: number):
Promise<Optional<Order, 'id'>> {
  const create = await OrderModel.create({ userId, productIds });
  await ProductModel.update(
    { orderId: create.dataValues.id },
    { where: { 
      id: { [Op.in]: productIds }, 
    },
    },
  );
  return {
    userId: create.dataValues.userId,
    productIds,
  };
}

export default {
  getAllOrders,
  createOrder,
};