import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // You can handle the data here, e.g. send to Firebase or log
  console.log('Received registration data:', data);

  return NextResponse.json({ message: 'Registration successful!' }, { status: 200 });
}