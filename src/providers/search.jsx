import React, { useState, useMemo } from 'react';

export const SearchContext = React.createContext();

export const SearchContextProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [isSearchModeOn, setSearchModeOn] = useState(false);
    const hasSearchTerm = useMemo(() => search.trim() !== '', [search]);

    return (
        <SearchContext.Provider
            value={{
                search,
                setSearch: (searchTerm) => { setSearch(searchTerm) },
                isSearchModeOn,
                toggleSearch: () => {
                    setSearchModeOn(isSearchModeOn ? false : true);
                },
                hasSearchTerm,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
