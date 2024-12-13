// 챔피언 목록 페이지

import { fetchChampionList } from '@/utils/serverApi';

async function ChampionPage() {
  // console.log('fetchChampionList', await fetchChampionList());
  await fetchChampionList();

  return <div>챔피언 목록 페이지</div>;
}

export default ChampionPage;
