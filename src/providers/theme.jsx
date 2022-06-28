import React, { useMemo, useState } from 'react';
import '../styles/_base.scss';

const themes = {
    light: {
        brand: {
            font: '"Quicksand", sans-serif',
        },
        primary: {
            background: '#f5f5f5',
            text: '#343434',
            font: '"Roboto Slab", serif',
        },
        secondary: {
            background: '#f9f9fb',
            text: '#1b1b1b',
            font: '"Roboto", sans-serif',
        },
    },
    dark: {
        brand: {
            font: '"Quicksand", sans-serif',
        },
        primary: {
            background: '#343434',
            text: '#f5f5f5',
            font: '"Roboto Slab", serif',
        },
        secondary: {
            background: '#1b1b1b',
            text: '#f9f9fb',
            font: '"Roboto", sans-serif',
        },
    },
};

export const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.dark);
    const isDarkMode = useMemo(() => theme === themes.dark);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                isDarkMode,
                toggleTheme: () => {
                    setTheme(isDarkMode ? themes.light : themes.dark);
                },
            }}
        >
            {children}
        </ThemeContext.Provider >
    );
};
