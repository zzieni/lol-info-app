// 챔피언 상세 페이지

import { fetchChampionDetail } from '@/utils/serverApi';

async function ChampionDetail({ params }: { params: { id: string } }) {
  //const { id } =  useParams()
  // console.log('fetchChampionDetail', await fetchChampionDetail());
  // 삽질 킹
  await fetchChampionDetail();
  return <div>챔피언 상세 페이지</div>;
}

export default ChampionDetail;
