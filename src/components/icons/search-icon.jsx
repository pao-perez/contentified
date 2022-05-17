import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import './search-icon.scss';

const SearchIcon = ({ className }) => (
    <FontAwesomeIcon icon={faCoffee} color="white" className="icon" />
);

SearchIcon.defaultProps = {
    className: ``,
};

SearchIcon.propTypes = {
    className: PropTypes.string,
};

export default SearchIcon;
