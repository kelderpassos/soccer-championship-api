import { compare } from 'bcryptjs';
import IUser from '../interfaces/User.interface';
import User from '../database/models/User';

export default class UserService {
  public getUserByEmail = async (email: string, password: string): Promise<IUser> => {
    const user = await User.findOne({ where: { email } });
    const validation = compare(password, user?.password);

    if (validation) return user;
  };
}
