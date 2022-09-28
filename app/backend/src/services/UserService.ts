import { compare } from 'bcryptjs';
import createToken from '../middlewares/auth';
import User from '../database/models/User';

export default class UserService {
  public login = async (email: string, password: string): Promise<string> => {
    const user = await User.findOne({ where: { email } });

    if (!user) throw new Error('User doesn\'t exist');
    const validation = compare(password, user?.password);

    if (!validation) throw new Error('Invalid password');
    const token = createToken(email);
    return token;
  };
}
