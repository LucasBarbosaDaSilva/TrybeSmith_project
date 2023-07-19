import { NextFunction, Request, Response } from 'express';
import UserModel from '../database/models/user.model';

async function userIdMiddleware(req: Request, res: Response, next: NextFunction) : 
Promise<void | Response<string, Record<string, number>>> {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: '"userId" is required' });
  }
  const user = await UserModel.findOne({ where: { id: userId } });
  if (!user) {
    return res.status(404).json({ message: '"userId" not found' });
  }

  if (typeof userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  }

  next();
}

export default userIdMiddleware;