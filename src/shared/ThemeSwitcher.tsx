import UseTheme from "app/providers/ThemeProvider/lib/UseTheme";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = UseTheme();
  return (
    <button className={className} onClick={toggleTheme}>
      toggle
    </button>
  );
};
