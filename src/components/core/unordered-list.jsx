import React from 'react';

const UnorderedList = ({ className, children }) => (
    <ul className={className}>
        {children}
    </ul>
);

export default UnorderedList;
