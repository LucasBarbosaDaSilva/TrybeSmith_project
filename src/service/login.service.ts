import bcrypt from 'bcryptjs';
import jasonWebToken from '../utils/jasonWebToken';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ResponsesTypes';
import { UserLogin, Token } from '../types/User';

async function login(user: UserLogin): Promise<ServiceResponse<Token>> {
  if (!user.username || !user.password) {
    return {
      status: 'INVALID_DATA',
      data: { message: '"username" and "password" are required' },
    };
  }
  const findUser = await UserModel.findOne({ where: { username: user.username } });
  if (!findUser || !bcrypt.compareSync(user.password, findUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' },
    };
  }
  const { id, username } = findUser.dataValues;
  const token = jasonWebToken.generateToken({ id, username });
  return { status: 'OK', data: { token } };
}

export default { login };
