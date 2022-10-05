import * as Jwt from 'jsonwebtoken';
import 'dotenv/config';

const { JWT_SECRET } = process.env;

const auth = {
  createToken: (role: { id: number, role: string }) => {
    const payload = { ...role };

    if (!JWT_SECRET) throw new Error('Secret cannot be found');

    const token = Jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
    return token;
  },
  accessAllowed: (token: string) => {
    if (!JWT_SECRET) throw new Error('Secret cannot be found');

    const { role } = Jwt.verify(token, JWT_SECRET) as Jwt.JwtPayload;

    return role;
  },
};

export default auth;
