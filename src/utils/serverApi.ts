/**
 *  챔피언 데이터 api
 */

// 최신 버전 정보 데이터 (14.24.1)
'use server';

import { Champion } from '@/types/Champion';
import { ChampionItem } from '@/types/ChampionDetail';

// 클라이언트 컨포넌트에서 서버로 동작이 가능 하게 해준다

export const fetchLatestVersion = async (): Promise<string | undefined> => {
  try {
    const res = await fetch(
      'https://ddragon.leagueoflegends.com/api/versions.json'
    );

    if (!res) throw new Error(`HTTP error!`);

    const versions = await res.json();
    // console.log('fetchLatestVersion TYPE ==>', typeof versions[0]);
    return versions[0];
  } catch (error) {
    console.error('Error fetching Latest Version data:', error);
  }
};

// 최신 버전 챔피언 목록 데이터
export const fetchChampionList = async (): Promise<Champion | undefined> => {
  try {
    const version = await fetchLatestVersion();

    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
    );

    if (!res) throw new Error(`HTTP error!`);

    const data = await res.json();

    // console.log('fetchChampionList TYPE ==> ', data);
    return data;
  } catch (error) {
    console.error('Error fetching Champion data:', error);
  }
};

// 최신 버전 챔피언 상세 데이터
export const fetchChampionDetail = async (
  id: string
): Promise<ChampionItem[] | undefined> => {
  const version = await fetchLatestVersion();

  try {
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`
    );

    if (!res) throw new Error(`HTTP error! `);

    const data = await res.json();

    // console.log('fetchChampionDetail TYPE == ', data);
    return data;
  } catch (error) {
    console.error('Error fetching Champion Detail data:', error);
  }
};

// 최신 버전 정보의 아이템 목록 데이터
export const fetchItemList = async () => {
  try {
    const version = await fetchLatestVersion();

    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
    );

    if (!res) throw new Error(`HTTP error!`);

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching Items data:', error);
  }
};
