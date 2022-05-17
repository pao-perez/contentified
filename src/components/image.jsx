import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';
import './image.scss';

const Image = ({ image, alt, className }) => {
  const dynamicImage = getImage(image);

  return (
    <>
      <figure>
        <GatsbyImage image={dynamicImage} alt={alt} className={className} />
      </figure>
    </>
  );
};

Image.defaultProps = {
  alt: ``,
  className: ``,
};

Image.propTypes = {
  image: PropTypes.shape({}).isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
