import dotenv from 'dotenv';

dotenv.config();

export const PORT = 3000;
export const MONGODB_USER = 'olgaIK';
export const MONGODB_PASSWORD = 'Starwars7777';
export const MONGODB_URL = 'cluster0.llpqstc.mongodb.net';
export const MONGODB_DB = 'students';

export function env(name, defaultValue) {
  const value = process.env[name];

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error(`Missing: process.env['${name}'].`);
}
