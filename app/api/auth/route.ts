import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  try {
    const { email, username, fullName, password } = await request.json();

    // In a real app, you would hash the password and implement proper auth
    const userId = uuidv4();
    
    await db.insert(users).values({
      id: userId,
      email,
      username,
      fullName
    });

    return NextResponse.json({ 
      success: true, 
      user: { id: userId, email, username, fullName } 
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}