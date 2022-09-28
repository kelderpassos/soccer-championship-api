import { compare } from 'bcryptjs';
import IUser from '../interfaces/User.interface';
import User from '../database/models/User';

export default class UserService {
  public login = async (email: string, password: string): Promise<IUser> => {
    const user = await User.findOne({ where: { email } });

    if (!user) throw new Error('Email or password are invalid');
    const validation = compare(password, user?.password);

    if (!validation) throw new Error('Invalid password');

    return user;
  };
}
