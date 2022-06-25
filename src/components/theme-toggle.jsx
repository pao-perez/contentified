import React, { useContext } from 'react';
import { ThemeContext } from '../providers/theme';
import Sun from './icons/sun';
import Moon from './icons/moon';
import './theme-toggle.scss';

const ThemeToggle = () => {
    const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

    return (
        <button id='theme-toggle' onClick={toggleTheme}>
            {isDarkMode ? <Moon color={theme.primary.text}/> : <Sun color={theme.primary.text}/> }
        </button>
    );
};

export default ThemeToggle;
