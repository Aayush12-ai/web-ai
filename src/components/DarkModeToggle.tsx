import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext';

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110 transform"
    >
      <div className="transition-transform duration-200 ease-in-out">
        {theme === 'light' ? <FaMoon className="rotate-0" /> : <FaSun className="rotate-90" />}
      </div>
    </button>
  );
};

export default DarkModeToggle;
