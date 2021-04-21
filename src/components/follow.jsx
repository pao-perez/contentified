import React from 'react';

import Social from './social';
import socialType from '../types/socialType';

const Follow = ({ social }) => (
  <section>
    <h2>Follow</h2>
    <ul>
      {social.map((entry) => (
        <Social
          key={entry.name}
          title={`Follow me on ${entry.name}`}
          url={entry.folow}
          classNames={entry.icon}
        />
      ))}
    </ul>
  </section>
);

Follow.propTypes = {
  social: socialType.isRequired,
};

export default Follow;
