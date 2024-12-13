import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold text-blue-600 mb-8'>
        League of Legends
      </h1>
      <div className='space-y-4 w-full max-w-md'>
        <Link
          href={'/champions'}
          className='block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors duration-300'
        >
          챔피언 목록
        </Link>
        <Link
          href={'/items'}
          className='block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors duration-300'
        >
          아이템 목록
        </Link>
        <Link
          href={'/rotation'}
          className='block w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors duration-300'
        >
          챔피언 로테이션
        </Link>
      </div>
    </div>
  );
}
