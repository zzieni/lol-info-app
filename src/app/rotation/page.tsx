//챔피언 로테이션 페이지
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
