import { compare } from 'bcryptjs';
import UserModel from '../models/UserModel';
import auth from '../helpers/auth';
import { IUser } from '../interfaces/User.interface';

export default class UserService {
  public login = async (email: string, password: string): Promise<string> => {
    const model = new UserModel();

    const user = await model.login(email) as IUser & { id: number };

    if (!user) return 'User not found';

    const validation = await compare(password, user?.password);

    if (validation === false) return 'Password doesn\t match';

    const token = auth.createToken({ id: user.id, role: user.role });
    return token;
  };
}
