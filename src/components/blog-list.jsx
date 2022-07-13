import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UnorderedList from './core/unordered-list';
import BlogItem from './blog-item';

const StyledUnorderedList = styled(UnorderedList)`
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
`;

const BlogList = ({ theme, nodes }) => (
    <section>
        <StyledUnorderedList>
            {nodes.map((node) => (
                <li key={node.id} theme={theme}>
                    <BlogItem node={node} theme={theme} />
                </li>
            ))}
        </StyledUnorderedList>
    </section>
);

BlogList.propTypes = {
    theme: PropTypes.shape({}).isRequired,
    nodes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default BlogList;
