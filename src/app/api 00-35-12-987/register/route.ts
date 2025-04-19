import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  const data = await req.json();
  // save to Firestore…
  return NextResponse.json({ message: 'OK' });
}