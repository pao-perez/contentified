import React, { useContext } from 'react';
import { SearchContext } from '../providers/provider';

const SearchBar = () => {
  const { search, setSearch } = useContext(SearchContext);

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

export default SearchBar;
