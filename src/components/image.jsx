import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

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
export default Image;
