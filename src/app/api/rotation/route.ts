// get podt put del

import { getChampionRotation } from '@/utils/riotApi';
import { fetchChampionList } from '@/utils/serverApi';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const rotationData = await getChampionRotation();

    if (!rotationData) {
      throw new Error('Champion Rotation 데이터를 불러러오지 못했습니다.');
    }

    const championData = await fetchChampionList();

    if (championData === undefined) {
      throw new Error('Champion 데이터를 불러러오지 못했습니다.');
    }
    const newRotationData = Object.values(rotationData.freeChampionIds);
    const newChampionData = Object.values(championData.data);

    const data = newChampionData.filter((champion) => {
      return newRotationData.includes(Number(champion.key));
    });

    return NextResponse.json(data);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
