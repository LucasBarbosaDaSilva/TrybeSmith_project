import { literal } from 'sequelize';
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

export default {
  getAllOrders,
};