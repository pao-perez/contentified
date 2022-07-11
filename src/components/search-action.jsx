import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { SearchContext } from '../providers/search';
import SearchBar from './search-bar';
import SearchToggle from './search-toggle';

const SearchAction = ({ theme, isHidden }) => {
    const { isSearchModeOn, toggleSearch, search, setSearch } = useContext(SearchContext);

    if (isHidden) {
        return null;
    }

    return isSearchModeOn ? <SearchBar theme={theme} search={search} setSearch={setSearch} /> : <SearchToggle theme={theme} toggleSearch={toggleSearch} />
};

SearchAction.propTypes = {
    theme: PropTypes.object.isRequired,
    isHidden: PropTypes.bool.isRequired,
};

export default SearchAction;
