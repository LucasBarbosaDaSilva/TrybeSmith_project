import { NextFunction, Request, Response } from 'express';
import jasonWebToken from '../utils/jasonWebToken';

async function jwtMiddleware(req: Request, res: Response, next: NextFunction):
Promise<void | Response<string, Record<string, number>>> {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = authorization.split(' ');
  if (!token[1]) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  try {
    res.locals = jasonWebToken.verifyToken(token[1]);
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

export default jwtMiddleware;