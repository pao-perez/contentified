import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/core/button';
import styled from 'styled-components';
import Magnifier from './icons/magnifier';

const StyledButton = styled(Button)`
    background: none;
    border: none;
    cursor: pointer;
`;

const SearchToggle = ({ theme, toggleSearch }) => (
    <StyledButton onClick={toggleSearch}>
        <Magnifier color={theme.primary.text} /> 
    </StyledButton>
);

SearchToggle.propTypes = {
    theme: PropTypes.object.isRequired,
    toggleSearch: PropTypes.func.isRequired,
};

export default SearchToggle;
