import express from 'express';
import productsRouter from './routes/products.router';
import orderRouter from './routes/order.router';
import loginRouter from './routes/login.router';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(orderRouter);
app.use(loginRouter);

export default app;
