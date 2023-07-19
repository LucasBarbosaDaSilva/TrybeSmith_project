import { NextFunction, Request, Response } from 'express';

async function productsIdMiddleware(req: Request, res: Response, next: NextFunction) : 
Promise<void | Response<string, Record<string, number>>> {
  const { productIds } = req.body;
  if (!productIds) {
    return res.status(400).json({ message: '"productIds" is required' });
  }
  
  if (!Array.isArray(productIds)) {
    return res.status(422).json({ message: '"productIds" must be an array' });
  }

  const productsArray = productIds.every((id: number) => typeof id === 'number');
  if (!productsArray || productIds.length === 0) {
    return res.status(422).json({ message: '"productIds" must include only numbers' });
  }

  next();
}

export default productsIdMiddleware;