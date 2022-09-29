import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserService';

const service = new UserService();

const validations = {
  requiredFields: async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    // if (!password || password.length === 0) {
    //   res.status(400).json({ message: 'All fields must be filled' });
    // }

    next();
  },
  // validInformation: async (req: Request, res: Response, next: NextFunction) => {
  //   // const { email, password } = req.body;

  //   // const user = await service.login(email, password);

  //   // if (!user) {
  //   //   res.status(401).json({ message: 'Incorrect email or password' });
  //   // }

  //   // if (password !== user.password) {
  //   //   res.status(401).json({ message: 'Incorrect email or password' });
  //   // }

  //   next();
  // },

  // login: async (req: Request, res: Response, next: NextFunction) => {
  //   const { email, password } = req.body;

  //   const validUser = await service.login(email, password);

  //   if (!validUser) throw new Error('');
  // },
};

export default validations;
