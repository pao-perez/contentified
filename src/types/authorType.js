import { arrayOf, shape, string } from 'prop-types';

import socialType from './socialType';

const authorType = shape({
  name: string.isRequired,
  bio: string.isRequired,
  social: arrayOf(socialType).isRequired,
});

export default authorType;
