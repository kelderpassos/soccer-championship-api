import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  private newLogin = new UserService(); // create a new instance of Login

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const token = await this.newLogin.login(email, password);
      res.status(200).json(token);
    } catch (error) {
      console.error(error);
    }
  };
}
