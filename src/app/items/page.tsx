// 아이템 목록 페이지

import { fetchItemList } from '@/utils/serverApi';

async function ItemPage() {
  console.log('fetchItemList', await fetchItemList());
  return <div>아이템 목록 페이지</div>;
}

export default ItemPage;
