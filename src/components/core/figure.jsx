import React from 'react';

const Figure = ({ className, children }) => (
    <figure className={className}>
        {children}
    </figure>
);

export default Figure;
