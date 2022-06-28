import React from 'react';

const Article = ({ className, children }) => (
    <article className={className}>
        {children}
    </article>
);

export default Article;
