/** 챔피언 목록 페이지
 * ISR - 자주 변경되지 않으므로 ISR을 사용하여 성능을 최적화
 * 재검증 시간(revalidate): 하루(86400초)
 * <Image> 컴포넌트를 사용
 */

import { fetchChampionList } from '@/utils/serverApi';
import { ChampionListItem } from '@/types/Champion';
import ChampionCrad from '@/app/champions/components/ChampionCard';

async function ChampionPage() {
  const championList = await fetchChampionList();

  if (championList === undefined) {
    throw new Error('불러올 데이터가 없습니다');
  }

  const championData = Object.values(championList.data);

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6 text-center text-blue-600'>
        챔피언 목록
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {championData.map((champion) => (
          <ChampionCrad key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
}

export default ChampionPage;
