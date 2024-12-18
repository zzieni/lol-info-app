'use client';

import { useTheme } from 'next-themes';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded'
    >
      {theme === 'dark' ? 'Light Mode' : 'Drak Mode'}
    </button>
  );
}

export default ThemeToggle;
