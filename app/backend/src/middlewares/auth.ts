import { sign } from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

const createToken = (email: string) => {
  const payload = { email };

  if (!JWT_SECRET) throw new Error('Secret cannot be found');

  const token = sign(payload, JWT_SECRET, { expiresIn: '1d' });
  return token;
};

export default createToken;
