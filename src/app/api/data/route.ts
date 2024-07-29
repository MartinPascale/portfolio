import { NextResponse } from 'next/server';

export async function GET() {
  // Fetch data from an external API or database
  const data = 'This is some server-side rendered data';
  return NextResponse.json(data);
}
