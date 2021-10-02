import React from 'react';

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

export default Image;
