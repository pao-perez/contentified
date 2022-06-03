import React, { useMemo, useState } from 'react';
import '../styles/_base.scss';

const themes = {
    light: {
        primary: {
            background: '#fff',
            text: '#1b1b1b',
        },
        secondary: {
            background: '#f9f9fb',
            text: '#4e4e4e',
        },
    },
    dark: {
        primary: {
            background: '#1b1b1b',
            text: '#fff',
        },
        secondary: {
            background: '#343434',
            text: '#cdcdcd',
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
                toggleTheme: () => {
                    setTheme(isDarkMode ? themes.dark : themes.light);
                },
                isDarkMode,
            }}
        >
            {children}
        </ThemeContext.Provider >
    );
};
