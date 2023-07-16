import express from 'express';
import productsRouter from './routes/products.router';
import orderRouter from './routes/order.router';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(orderRouter);

export default app;
