import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const Avatar = ({ avatar, author }) => {
  const image = getImage(avatar);
  return (
    <>
      <figure>
        <GatsbyImage image={image} alt="Avatar" />
        <figcaption>{author}</figcaption>
      </figure>
    </>
  );
};
export default Avatar;
