import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import PropTypes from 'prop-types';

import './avatar.scss';

const Avatar = ({ avatar }) => {
  const image = getImage(avatar);
  return (
    <>
      <figure className="avatar">
        <GatsbyImage image={image} alt="Avatar" />
      </figure>
    </>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
};
export default Avatar;