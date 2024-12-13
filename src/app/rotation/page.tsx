/** 챔피언 로테이션 페이지
 * CSR
 * useEffect와 useState 훅을 사용하여 데이터를 가져와 상태 관리 (타입 지정) ====> Tanstack Query를 활용 하여 리팩토링
 * 제네릭 타입을 사용하여 useState의 상태 타입을 명시
 * 로딩 상태와 에러 처리를 구현하여 사용자 경험을 향상 (isPending, isError, data)
 */

'use client';

import { useEffect } from 'react';

function RotationPage() {
  const config = { headers: { Accept: 'application/json' } };
  useEffect(() => {
    fetch('/api/rotation', config)
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return <div>챔피언 로테이션 페이지</div>;
}

export default RotationPage;
