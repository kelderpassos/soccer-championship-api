import { Request, Response } from 'express';
import UserService from '../services/UserService';
import auth from '../middlewares/auth';

export default class UserController {
  private newLogin = new UserService();

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      await this.newLogin.login(email, password);
      const token = auth.createToken(email);
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
    }
  };

  public validate = async (req: Request, res: Response) => {
    const { authorization }
  };
}
