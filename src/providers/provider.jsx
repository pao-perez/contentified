
import { ApolloProvider } from '@apollo/client';
import React, { useState } from 'react';
import client from '../apollo/client';

export const SearchContext = React.createContext();

const SearchContextProvider = (props) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{
      search,
      setSearch: (search) => setSearch(search)
    }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export const Provider = ({ element }) => (
  <ApolloProvider client={client}>
    <SearchContextProvider>
      {element}
    </SearchContextProvider>
  </ApolloProvider>
);
