import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  private newLogin = new UserService(); // create a new instance of Login

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const user = await this.newLogin.getUserByEmail(email, password);

    } catch (error) {
      console.error(error);
    }
  };
}
