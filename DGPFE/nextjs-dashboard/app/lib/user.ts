// lib/user.ts
import { hash, compare } from 'bcrypt';
import prisma from './prisma';

export async function findUserByEmail(email: string) {
  return await prisma.user.findUnique({ where: { email } });
}

export async function comparePasswords(plainTextPassword: string, hashedPassword: string) {
  return await compare(plainTextPassword, hashedPassword);
}