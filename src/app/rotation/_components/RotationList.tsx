import { ChampionListItem } from '@/types/Champion';
// import { fetchLatestVersion } from '@/utils/serverApi';
import Image from 'next/image';
import Link from 'next/link';

function RotationList({ item }: { item: ChampionListItem }) {
  const version = item.version;
  const { full } = item.image;
  return (
    <Link href={`/champions/${item.id}`}>
      <div className='bg-gray-500 text-white rounded-lg shadow-xl overflow-hidden w-full'>
        <div className='p-4 flex flex-col items-center gap-4'>
          <div className='p-4 hover:bg-gray-50 transition duration-150 ease-in-out'>
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${full}`}
              alt={`${item.name} image`}
              width={96}
              height={96}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-contain'
              priority
            />
            <h2 className='text-xl font-semibold text-gray-800'>{item.id}</h2>
            <p className='text-gray-600 mt-1'>{item.title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RotationList;
