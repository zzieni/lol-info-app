import { ItemData } from '@/types/Item';
import Image from 'next/image';

async function ItemDetailPage({
  item,
  version,
}: {
  item: ItemData;
  version: string;
}) {
  const { full } = item.image;

  return (
    <div className='bg-gray-500 text-white rounded-lg shadow-xl overflow-hidden w-full'>
      <div className='p-4 flex flex-col items-center gap-4'>
        <div className='w-24 h-24 relative'>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${full}`}
            width={500}
            height={500}
            alt={`${item.name} image`}
            className='rounded-lg'
          />
        </div>
        <div className='flex-1 text-center'>
          <h1 className='text-xl font-bold mb-1'>{item.name}</h1>
          <p className='text-gray-300 text-sm italic'>{item.plaintext}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailPage;
