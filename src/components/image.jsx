import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Figure from '../components/core/figure';
import styled from 'styled-components';

const StyledFigure = styled(Figure)`
  width: auto;
  min-height: 100%;
`;

const Image = ({ image, alt = ''}) => {
  const dynamicImage = getImage(image);

  return (
    <StyledFigure>
      <GatsbyImage image={dynamicImage} alt={alt}/>
    </StyledFigure>
  );
};

Image.propTypes = {
  image: PropTypes.shape({}).isRequired,
  alt: PropTypes.string,
};

export default Image;
