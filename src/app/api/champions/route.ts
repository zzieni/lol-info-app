// get podt put del

import { fetchRiotGames } from '@/utils/riotApi';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await fetchRiotGames();
  return NextResponse.json(data);
}
