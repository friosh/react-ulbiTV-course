import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface IUseTheme {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): IUseTheme => {
  const { theme, setTheme } = useContext(ThemeContext) as { theme: Theme, setTheme: (theme: Theme) => void };

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
