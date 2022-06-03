import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { SearchContext } from '../providers/search';

const SearchBar = ({ isHidden }) => {
  const { search, setSearch } = useContext(SearchContext);
  if (isHidden) {
    return null;
  }

  return (
    <form className="center search" role="search" aria-label="Search Site">
      <input
        type="search"
        placeholder="Search Articles..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </form>
  );
};

SearchBar.propTypes = {
  isHidden: PropTypes.bool.isRequired,
};

export default SearchBar;
