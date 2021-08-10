import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const Image = ({ image, alt, className }) => {
  const dynamicImage = getImage(image);
  return (
    <>
      <figure className={className}>
        <GatsbyImage image={dynamicImage} alt={alt} />
      </figure>
    </>
  );
};
export default Image;
