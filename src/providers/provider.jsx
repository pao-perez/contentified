import React, { useState } from 'react';

export const SearchContext = React.createContext();

const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch: (searchTerm) => setSearch(searchTerm),
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const Provider = ({ element }) => (
  <SearchContextProvider>{element}</SearchContextProvider>
);
