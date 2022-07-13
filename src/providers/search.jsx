import React, { useState, useMemo } from 'react';

export const SearchContext = React.createContext();

export const SearchContextProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [isSearchModeOn, setSearchModeOn] = useState(false);
    const hasNoSearchTerm = useMemo(() => search.trim() === '', [search]);

    return (
        <SearchContext.Provider
            value={{
                search,
                setSearch: (searchTerm) => { setSearch(searchTerm) },
                isSearchModeOn,
                toggleSearch: () => {
                    setSearchModeOn(isSearchModeOn ? false : true);
                },
                hasNoSearchTerm,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
