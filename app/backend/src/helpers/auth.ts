import { sign, verify, JwtPayload } from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

const auth = {
  createToken: (role: { id: number, role: string }) => {
    const payload = { ...role };

    if (!JWT_SECRET) throw new Error('Secret cannot be found');

    const token = sign(payload, JWT_SECRET, { expiresIn: '1d' });
    return token;
  },
  accessAllowed: (token: string): JwtPayload => {
    if (!JWT_SECRET) throw new Error('Secret cannot be found');

    const verification = verify(token, JWT_SECRET) as JwtPayload;

    return verification;
  },
};

export default auth;
