import Link from 'next/link';

// 루트 페이지
export default function Home() {
  return (
    <>
      <Link href={'/'}>홈</Link>
      <Link href={'/champions'}>챔피언 목록</Link>
      <Link href={'/items'}>아이템 목록</Link>
      <Link href={'/rotation'}>챔피언 로테이션</Link>
    </>
  );
}
