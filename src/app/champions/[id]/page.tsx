import { fetchChampionDetail } from '@/utils/serverApi';
import Image from 'next/image';

async function ChampionDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const championDetailData = await fetchChampionDetail(id);

  const { name, title, image, lore, info } = championDetailData.data[id];

  return (
    <div className='container mx-auto px-20 py-24 w-[800px] '>
      <div className='bg-gray-800 text-white rounded-lg shadow-xl overflow-hidden'>
        <div className='relative h-64 md:h-96'>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
            fill
            objectFit='cover'
            alt={`${name} splash art`}
            className='opacity-50'
          />
          <div className='absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full'>
            <h1 className='text-4xl font-bold mb-2'>{name}</h1>
            <p className='text-xl italic'>{title}</p>
          </div>
        </div>
        <div className='p-8 flex flex-col md:flex-col gap-5 '>
          <div className='md:w-2/2 md:items-center md:justify-center'>
            <p className='text-gray-300 leading-relaxed'>{lore}</p>
          </div>
          <div className='md:w-1/2 '>
            <div className='mt-4 bg-gray-700 p-4 rounded-lg w-full'>
              <h3 className='text-xl font-semibold mb-2'>스탯</h3>
              <ul>
                <li>Attack: {info.attack}</li>
                <li>Defense: {info.defense}</li>
                <li>Magic: {info.magic}</li>
                <li>Difficulty: {info.difficulty}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChampionDetail;
