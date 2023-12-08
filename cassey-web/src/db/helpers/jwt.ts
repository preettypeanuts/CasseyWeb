import { JWTPayload, jwtVerify } from "jose";
import jwt from "jsonwebtoken";
import * as jose from 'jose'

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error("JWT secret is not defined");
}

const createToken = (payload: { _id: string; email: string }) => {
  return jwt.sign(payload, secret);
};

type JWTCustom = {
  _id: string;
  email: string;
};

async function decodeToken(token: string) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  token;

  const {
    payload,
  }: {
    payload: JWTCustom & JWTPayload;
  } = await jose.jwtVerify(token, secret);

  return payload;
}

export { createToken, decodeToken };
