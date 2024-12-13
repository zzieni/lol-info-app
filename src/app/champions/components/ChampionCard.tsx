import { ChampionListItem } from '@/types/Champion';
import Image from 'next/image';
import Link from 'next/link';

function ChampionCard({ champion }: { champion: ChampionListItem }) {
  const { full } = champion.image;
  return (
    <Link href={`/champions/${champion.id}`}>
      <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-100 w-48'>
        <div className='relative h-36'>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${full}`}
            layout='fill'
            objectFit='cover'
            alt={`${champion.name} image`}
          />
        </div>
        <div className='p-3'>
          <h2 className='text-lg font-semibold text-gray-800 truncate'>
            {champion.name}
          </h2>
          <p className='text-xs text-gray-600 italic truncate'>
            {champion.title}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ChampionCard;
