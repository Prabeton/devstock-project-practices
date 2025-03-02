import { NextResponse } from 'next/server';
import { signIn } from 'next-auth/react';
import bcrypt from "bcryptjs"

import { prisma } from '@/lib/prismadb';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return new NextResponse('Missing credentials', { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    });

    if (!user || !user.password) {
      return new NextResponse('Invalid credentials', { status: 401 });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return new NextResponse('Invalid credentials', { status: 401 });
    }

    const result = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
    });

    if (result?.error) {
      return new NextResponse(result.error, { status: 401 });
    }

    return new NextResponse('Logged in successfully', { status: 200 });
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}