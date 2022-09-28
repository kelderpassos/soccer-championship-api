import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

const createToken = (req: Request, res: Response) => {
  const payload = { email: req.body.email };

  if (!JWT_SECRET) throw new Error('Secret cannot be found');

  const token = sign(payload, JWT_SECRET, { expiresIn: '1d' });
  return res.status(200).json({ token });
};

export default createToken;
