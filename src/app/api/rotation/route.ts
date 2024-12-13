// get podt put del

import { getChampionRotation } from '@/utils/riotApi';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await getChampionRotation();
  return NextResponse.json(data);
}
