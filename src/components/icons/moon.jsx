import PropTypes from 'prop-types';
import React from "react";

const Moon = ({ color, size = 24, className = '' }) => (
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
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z">
        </path>
    </svg>
);

Moon.propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.number,
    className: PropTypes.string,
};

export default Moon;
