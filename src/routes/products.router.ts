import { Router } from 'express';
import ProductsController from '../controller/products.controller';
import nameMiddleware from '../middleware/name.middleware';
import priceMiddleware from '../middleware/price.middleware';

const productsRouter = Router();

productsRouter.get('/products', ProductsController.getAllProducts);
productsRouter.post('/products', nameMiddleware, priceMiddleware, ProductsController.createProduct);

export default productsRouter;