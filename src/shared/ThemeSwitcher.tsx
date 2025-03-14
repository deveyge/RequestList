import React from 'react';
import UseTheme from 'app/providers/ThemeProvider/lib/UseTheme';
import * as LucideIcons from 'lucide-react'; // Install: npm install lucide-react

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = UseTheme();

  const Icon = theme === 'dark' ? LucideIcons.Sun : LucideIcons.Moon;

  return (
    <button
      className={`${className} w-6 h-6 relative rounded-full transition-all duration-300`}
      onClick={toggleTheme}
    >
      <Icon className="w-6 h-6 absolute inset-0 transition-opacity duration-300 opacity-100" />
    </button>
  );
};