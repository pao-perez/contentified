import React from 'react';
import { SearchContextProvider } from "./search";
import { ThemeContextProvider } from "./theme";

export const Provider = ({ element }) => (
  <ThemeContextProvider>
    <SearchContextProvider>
      {element}
    </SearchContextProvider>
  </ThemeContextProvider>
);

