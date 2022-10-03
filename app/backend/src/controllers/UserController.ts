import { Request, Response } from 'express';
import UserService from '../services/UserService';
import auth from '../helpers/auth';

export default class UserController {
  private newLogin = new UserService();

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    const token = await this.newLogin.login(email, password);

    if (token === 'User not found'
      || token === 'Password doesn\t match') {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    return res.status(200).json({ token });
  };

  public validate = (req: Request, res: Response) => {
    const { authorization } = req.headers;

    if (!authorization) throw new Error('No header provided');

    const role = auth.accessAllowed(authorization);

    return res.status(200).json({ role });
  };
}
