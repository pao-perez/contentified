import PropTypes from 'prop-types';
import React from "react";

const Magnifier = ({ color, size = 24, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

Magnifier.propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.number,
    className: PropTypes.string,
};

export default Magnifier;
