import { sign, verify } from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

const auth = {
  createToken: (email: string) => {
    const payload = { email };

    if (!JWT_SECRET) throw new Error('Secret cannot be found');

    const token = sign(payload, JWT_SECRET, { expiresIn: '1d' });
    return token;
  },
  accessAllowed: (token: string) => {
    if (!JWT_SECRET) throw new Error('Secret cannot be found');

    const verification = verify(token, JWT_SECRET);
    if (!verification) throw new Error('Access denied');

    return verification;
  },
};

export default auth;
