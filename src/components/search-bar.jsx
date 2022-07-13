import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSearchBar = styled.form`
  input {
    outline: none;
    padding: .7rem;
    border: none;
    border-radius: 2rem;
    color: black;
    background-color: rgba(255, 255, 255, 0.8);
    font-family: ${props => props.theme.primary.font};
    font-weight: bolder;
    font-size: large;
  }
`;

const SearchBar = ({ theme, search, setSearch, toggleSearch }) => (
  <StyledSearchBar theme={theme} className="center" role="search" aria-label="Search Site">
    <input
      type="search"
      placeholder="Search Articles..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      onBlur={toggleSearch}
    />
  </StyledSearchBar>
);

SearchBar.propTypes = {
  theme: PropTypes.object.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  toggleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
