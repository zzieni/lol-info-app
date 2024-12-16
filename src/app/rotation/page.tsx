/** 챔피언 로테이션 페이지
 * CSR
 * useEffect와 useState 훅을 사용하여 데이터를 가져와 상태 관리 (타입 지정) ====> Tanstack Query를 활용 하여 리팩토링
 * 제네릭 타입을 사용하여 useState의 상태 타입을 명시
 * 로딩 상태와 에러 처리를 구현하여 사용자 경험을 향상 (isPending, isError, data)
 */

'use client';

import { useEffect, useState } from 'react';
import RotationList from './components/RotationList';
import { ChampionListItem } from '@/types/Champion';

function RotationPage() {
  const config = { headers: { Accept: 'application/json' } };

  const [champions, setChampions] = useState<ChampionListItem>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null>(null);

  useEffect(() => {
    const fetchRotationData = async () => {
      try {
        const response = await fetch('/api/rotation', config);
        if (!response.ok) {
          throw new Error('서버에서 데이터를 가져오는데 실패했습니다.');
        }
        const data = await response.json();
        setChampions(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRotationData();
  }, []);

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-center mb-6 text-blue-600'>
        챔피언 로테이션
      </h1>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {champions.map((item) => (
            <RotationList key={item.key} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RotationPage;
