import React from 'react';

const Button = ({ className, children, onClick }) => (
    <button className={className} onClick={onClick}>
        {children}
    </button>
);

export default Button;
