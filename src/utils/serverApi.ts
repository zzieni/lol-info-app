/** 챔피언 데이터 api
 * Server Actions를 활용 : 서버 컴포넌트 내에서 직접 데이터를 페칭하고 처리, 비동기함수, 반환 타입 Promise<T>
 * 에러 처리를 위해 try-catch 구문을 사용
 * ypeScript로 응답 데이터의 타입을 명시
 */

// 최신 버전 정보 데이터 (14.24.1)
'use server';

import { Champion, ChampionList } from '@/types/Champion';
import { Item } from '@/types/Item';

// 클라이언트 컨포넌트에서 서버로 동작이 가능 하게 해준다

export const fetchLatestVersion = async (): Promise<string | undefined> => {
  try {
    const res = await fetch(
      'https://ddragon.leagueoflegends.com/api/versions.json'
    );

    if (!res.ok) throw new Error(`HTTP error!`);

    const versions = await res.json();

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
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
      { next: { revalidate: 86400 } }
    );

    if (!res.ok) throw new Error(`HTTP error!`);

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching Champion data:', error);
  }
};

// 최신 버전 챔피언 상세 데이터
export const fetchChampionDetail = async (
  id: string | null
): Promise<ChampionList | undefined> => {
  const version = await fetchLatestVersion();

  try {
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`,
      { cache: 'no-store' }
    );

    if (!res.ok) throw new Error(`HTTP error! `);

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.error('Error fetching Champion Detail data:', error);
  }
};

// 최신 버전 정보의 아이템 목록 데이터
export const fetchItemList = async (): Promise<Item | undefined> => {
  try {
    const version = await fetchLatestVersion();

    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
    );

    if (!res.ok) throw new Error(`HTTP error!`);

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching Items data:', error);
  }
};
