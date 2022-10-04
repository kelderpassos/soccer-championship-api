import { compare } from 'bcryptjs';
import UserModel from '../models/UserModel';
import auth from '../helpers/auth';

export default class UserService {
  public login = async (email: string, password: string): Promise<string> => {
    const model = new UserModel();

    const user = await model.login(email);

    if (!user) return 'User not found';

    const validation = await compare(password, user?.password);

    if (!validation) return 'Password doesn\t match';

    const token = auth.createToken({ id: user.id, role: user.role });
    return token;
  };
}
