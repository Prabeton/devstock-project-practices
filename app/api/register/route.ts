import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

import { prisma } from '@/lib/prismadb';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { firstName, lastName, nick, email, confirmPassword, terms } = body

    if (!firstName || !lastName || !nick || !email || !confirmPassword || terms === false) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const existingEmail = await prisma.user.findUnique({
        where: {
          email: email
        }
      });
      if (existingEmail) {
        return NextResponse.json({ error: 'User with this email already exists' }, { status: 409 });
      }

      const hashedPassword = await bcrypt.hash(confirmPassword, 12);

    const user = await prisma.user.create({
        data: {
            name: firstName,
            lastName,
            nick,
            email,
            password: hashedPassword,
            acceptedTerms: terms,
          }
        });

    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      { message: 'User created successfully', userId: user.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}