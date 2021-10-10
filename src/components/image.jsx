import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
