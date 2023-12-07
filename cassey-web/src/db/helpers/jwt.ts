import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error('JWT secret is not defined');
}

const createToken = (payload: {_id: string}) => {
  return jwt.sign(payload, secret);
};

export { createToken };