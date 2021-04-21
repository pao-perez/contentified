import { shape, string } from 'prop-types';

import authorType from './authorType';

const siteMetadataType = shape({
  title: string.isRequired,
  description: string.isRequired,
  author: authorType.isRequired,
});

export default siteMetadataType;
