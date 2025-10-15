import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import type { Theme } from '../../types';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <BsSun className="theme-toggle-icon text-warning" size={20} />
      ) : (
        <BsMoon className="theme-toggle-icon text-purple-custom" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;