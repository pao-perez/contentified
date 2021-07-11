import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import PropTypes from 'prop-types';

import './avatar.scss';

const Avatar = ({ avatar, author }) => {
  const image = getImage(avatar);
  return (
    <>
      <figure className="avatar">
        <GatsbyImage image={image} alt="Avatar" />
        <figcaption className="center">{author}</figcaption>
      </figure>
    </>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Avatar;
