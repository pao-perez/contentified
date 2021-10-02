import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState(``);

  useEffect(() => {
    console.log('should only log when search term changes: ' + search);
  }, [search]);

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
