import { ChampionListItem } from '@/types/Champion';
import Link from 'next/link';

function ChampionCrad({ champion }: { champion: ChampionListItem }) {
  return (
    <Link href={`/champions/${champion.id}`}>
      <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200'>
        <div className='h-48 bg-gray-100'></div>
        <div className='p-4'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            {champion.name}
          </h2>
          <p className='text-sm text-gray-600 italic'>{champion.title}</p>
        </div>
      </div>
    </Link>
  );
}

export default ChampionCrad;
