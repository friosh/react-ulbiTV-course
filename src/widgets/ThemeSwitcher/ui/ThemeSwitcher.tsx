import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK ? <DarkTheme /> : <LightTheme />}
    </Button>
  );
};
