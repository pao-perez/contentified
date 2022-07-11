import React, { useState } from 'react';

export const SearchContext = React.createContext();

export const SearchContextProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [isSearchModeOn, setSearchModeOn] = useState(false);

    return (
        <SearchContext.Provider
            value={{
                search,
                setSearch: (searchTerm) => { setSearch(searchTerm) },
                isSearchModeOn,
                toggleSearch: () => {
                    setSearchModeOn(isSearchModeOn ? false : true);
                },
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
