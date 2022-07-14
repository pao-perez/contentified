import React, { useContext } from 'react';
import { ThemeContext } from '../providers/theme';
import Sun from './icons/sun';
import Moon from './icons/moon';
import Button from '../components/core/button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    margin-right: 1rem;
`;

const ThemeToggle = () => {
    const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

    return (
        <StyledButton onClick={toggleTheme}>
            {isDarkMode ? <Sun color={theme.primary.text} /> : <Moon color={theme.primary.text} /> }
        </StyledButton>
    );
};

export default ThemeToggle;
