import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'League of Legends Info',
  description: 'Information about League of Legends champions and items',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
        suppressHydrationWarning={true}
      >
        <nav className='bg-blue-600 text-white shadow-md'>
          <div className='container mx-auto px-4'>
            <div className='flex justify-between items-center py-4'>
              <Link href={'/'} className='text-2xl font-bold'>
                LoL Info
              </Link>
              <div className='space-x-4'>
                <Link
                  href={'/champions'}
                  className='hover:text-blue-200 transition-colors'
                >
                  챔피언 목록
                </Link>
                <Link
                  href={'/items'}
                  className='hover:text-blue-200 transition-colors'
                >
                  아이템 목록
                </Link>
                <Link
                  href={'/rotation'}
                  className='hover:text-blue-200 transition-colors'
                >
                  챔피언 로테이션
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className='container mx-auto px-4 py-8'>{children}</main>
      </body>
    </html>
  );
}
