import { Router } from 'express';
import ProductsController from '../controller/products.controller';

const productsRouter = Router();

productsRouter.get('/products', ProductsController.getAllProducts);
productsRouter.post('/products', ProductsController.createProduct);

export default productsRouter;