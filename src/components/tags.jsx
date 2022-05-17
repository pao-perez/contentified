import PropTypes from 'prop-types';
import React from 'react';
import './tags.scss';

const Tags = ({ tags }) => (
    <span>
        {tags.map((tag) => (
            <>
                <span className="tag">
                    {tag}
                </span>
                <span>
                    {" "}
                </span>
            </>
        ))}
    </span>
);

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
