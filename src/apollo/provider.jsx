import React from 'react';

import { ApolloProvider } from '@apollo/client';

import client from './client';

// export default const Provider won't let me do:
// const Provider = require('./ src / apollo / provider');
// in gatsby-browser and gatsby-ssr files for some reason
export const Provider = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
