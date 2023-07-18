import { Request, Response } from 'express';
import loginService from '../service/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function login(req: Request, res: Response) : Promise<Response> {
  const response = await loginService.login(req.body);

  if (response.status !== 'OK') {
    return res.status(mapStatusHTTP(response.status)).json(response.data);
  }
  return res.status(200).json(response.data);
}

export default { login };