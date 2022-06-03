import PropTypes from 'prop-types';
import React from 'react';
import './tags.scss';

const Tags = ({ tags, className = '' }) => {
    const classNames = ['tag', className].join(' ');

    return (
        <span>
            {tags.map((tag) => (
                <span key={tag}>
                    <span className={classNames}>
                        {tag}
                    </span>
                    <span>
                        {" "}
                    </span>
                </span>
            ))}
        </span >
    );
};

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
