import React from 'react';
import PropTypes from 'prop-types';
import Span from '../components/core/span';
import styled from 'styled-components';

const StyledSpan = styled(Span)`
    background-color: ${props => props.theme.primary.background};
    border-radius: 0.2rem;
    max-width: fit-content;
    font-size: small;
    color: ${props => props.theme.primary.text};
`;

const Tags = ({ tags, theme }) => (
    <span>
        {tags.map((tag) => (
            <span key={tag}>
                <StyledSpan theme={theme}>
                    {tag}
                </StyledSpan>
                <span>
                    {" "}
                </span>
            </span>
        ))}
    </span >
);

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    theme: PropTypes.shape({}).isRequired,
};

export default Tags;
