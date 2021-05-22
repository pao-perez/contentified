import React from 'react';

import PropTypes from 'prop-types';

const Social = ({ title, url, classNames }) => (
  <>
    <li>
      <a title={title} href={url} target="_blank" rel="noreferrer">
        <i className={classNames} />
      </a>
    </li>
  </>
);

Social.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  classNames: PropTypes.string.isRequired,
};

export default Social;
