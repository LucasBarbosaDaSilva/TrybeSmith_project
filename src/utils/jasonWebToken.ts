import jwt from 'jsonwebtoken';
import { TokenPayload } from '../types/User';

const jwtConifg: jwt.SignOptions = {
  expiresIn: '5d',
};

const secret = process.env.JWT_SECRET || 'secret';

function generateToken(payload: TokenPayload): string {
  return jwt.sign(payload, secret, jwtConifg);
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, secret) as TokenPayload;
}

export default { generateToken, verifyToken };