import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchContext } from '../providers/search';
import Magnifier from './icons/magnifier';

const StyledSearchBar = styled.form`
    margin-left: 1rem;

    input {
      outline: none;
      padding: 1rem;
      border: none;
      border-radius: .3rem;
      color: black;
      background-color: rgba(255, 255, 255, 0.8);
      font-family: ${props => props.theme.primary.font};
      font-weight: bolder;
      font-size: large;
    }
`;

const SearchBar = ({ theme, isHidden }) => {
  const { search, setSearch } = useContext(SearchContext);

  if (isHidden) {
    return null;
  }

  return (
    // <Magnifier color={theme.primary.text} /> 
    <StyledSearchBar theme={theme} className="center" role="search" aria-label="Search Site">
      <input
        type="search"
        placeholder="Search Articles..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  isHidden: PropTypes.bool.isRequired,
};

export default SearchBar;
