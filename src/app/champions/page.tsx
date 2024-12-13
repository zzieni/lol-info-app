// 챔피언 목록 페이지

import { fetchChampionList } from '@/utils/serverApi';

import { ChampionListItem } from '@/types/Champion';
import ChampionCrad from '@/components/champions/ChampionCrad';
async function ChampionPage() {
  const championList = await fetchChampionList();

  if (championList === undefined) {
    throw new Error('불러올 데이터가 없습니다');
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6 text-center text-blue-600'>
        챔피언 목록
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {Object.values(championList.data).map((champion: ChampionListItem) => (
          <ChampionCrad key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
}

export default ChampionPage;
