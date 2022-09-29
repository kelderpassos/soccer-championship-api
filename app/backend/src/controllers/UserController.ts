import { Request, Response } from 'express';
import UserService from '../services/UserService';

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
}
