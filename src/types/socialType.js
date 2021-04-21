import { shape, string } from 'prop-types';

const socialType = shape({
  name: string.isRequired,
  follow: string.isRequired,
  share: string.isRequired,
  icon: string.isRequired,
});

export default socialType;
