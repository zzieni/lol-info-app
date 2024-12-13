// 챔피언 상세 페이지

import { fetchChampionDetail } from '@/utils/serverApi';
import Image from 'next/image';

async function ChampionDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const championDetailData = await fetchChampionDetail(id);

  const imgUrl =
    'https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/';
  const { name, title, image, lore, info } = championDetailData.data[id];
  const { full, w, h } = image;
  console.log('image', image);
  console.log('===', championDetailData.data[id]);
  return (
    <div>
      챔피언 상세 페이지
      <div>{name}</div>
      <div>{title}</div>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${full}`}
        width={w}
        height={h}
        alt='Picture of the author'
      />
      {/* <img
        src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${full}`}
        alt='Picture of the author'
      /> */}
      <div>{lore}</div>
    </div>
  );
}

export default ChampionDetail;
