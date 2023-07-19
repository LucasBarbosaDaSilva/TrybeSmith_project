import { boolean } from "joi";

export type User = {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
};

export type UserLogin = {
  username: string;
  password: string;
};

export type Token = {
  token: string;
};

export type TokenPayload = {
  id: number;
  username: string;
};