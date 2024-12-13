// 챔피언 로테이션

import { API_KEY } from '@/types/ApiKey';

export const getChampionRotation = async () => {
  if (!API_KEY) return;

  const res = await fetch(
    'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',
    {
      headers: {
        'X-Riot-Token': API_KEY,
      },
    }
  );

  const data = await res.json();
  return data;
};
