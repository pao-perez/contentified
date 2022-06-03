import React, { useContext } from 'react';
import { ThemeContext } from '../providers/theme';
import { default as Moon, default as Sun } from './icons/sun';
import './theme-toggle.scss';

const ThemeToggle = () => {
    const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

    return (
        <button id='theme-toggle' onClick={toggleTheme}>
            {isDarkMode ? <Sun color={theme.primary.text} /> : <Moon color={theme.primary.text} />}
        </button>
    );
};

export default ThemeToggle;
