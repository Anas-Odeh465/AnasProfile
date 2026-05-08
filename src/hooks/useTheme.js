import { useEffect, useState } from 'react';

const THEME_KEY = 'portfolio-theme';

export function useTheme() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_KEY);
    const initialTheme = savedTheme || 'dark';

    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', nextTheme === 'dark');
      window.localStorage.setItem(THEME_KEY, nextTheme);
      return nextTheme;
    });
  };

  return { theme, toggleTheme, mounted };
}
