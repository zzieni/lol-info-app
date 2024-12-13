/** 아이템 목록 페이지
 * SSG
 * <Image> 컴포넌트를 사용
 * 그리드 레이아웃을 사용하여 아이템들을 정렬하고 UI를 개선
 */

import { fetchItemList } from '@/utils/serverApi';
import { ItemData, ItemDatas } from '@/types/Item';
import ItemDetailPage from './components/ItemDetailPage';

async function ItemPage() {
  // console.log('fetchItemList', await fetchItemList());
  const data = await fetchItemList();

  const items = Object.values(data).map((item) => item);
  return (
    <div>
      <h1 className='text-3xl font-bold mb-6 text-center text-blue-600'>
        아이템 목록 페이지
      </h1>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {items.map((item: ItemData) => (
            <ItemDetailPage key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
