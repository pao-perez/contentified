import React from 'react';

import Social from './social';
import socialType from '../types/socialType';

const Share = ({ social }) => (
  <section>
    <h2>Share</h2>
    <ul>
      {social.map((entry) => (
        <Social
          key={entry.name}
          title={`Share ${entry.name}`}
          url={entry.share}
          classNames={entry.icon}
        />
      ))}
    </ul>
  </section>
);

Share.propTypes = {
  social: socialType.isRequired,
};

export default Share;
