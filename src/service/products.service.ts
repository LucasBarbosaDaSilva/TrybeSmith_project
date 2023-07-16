import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ResponsesTypes';

function validateProduct({
  name,
  price,
  orderId,
}: ProductInputtableTypes) : string | null {
  if (!name) return 'name is required';
  if (!price) return 'price is required';
  if (!orderId) return 'orderId is required';
  return null;
}

async function createProduct(product: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  let response : ServiceResponse<Product>;

  const error = validateProduct(product);
  if (error) {
    response = {
      status: 'INVALID_DATA',
      data: { message: error },
    };
    return response;
  }

  const createdProduct = await ProductModel.create(product);
  response = {
    status: 'OK',
    data: createdProduct.dataValues,
  };
  return response;
}

export default {
  createProduct,
};