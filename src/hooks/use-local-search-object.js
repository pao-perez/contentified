import { useEffect, useState } from 'react';

export const Accept = {
  JSON: 'application/json',
  TEXT: 'application/text',
};

const useLocalSearchObject = (publicStoreURL, publicIndexURL) => {
  const [index, setIndex] = useState([]);
  const [store, setStore] = useState({});

  useEffect(() => {
    const fetchFromUrl = async (setFn, fetchUrl, acceptType = Accept.JSON) => {
      const response = await fetch(fetchUrl, {
        headers: {
          Accept: acceptType,
        },
      });
      // if (response.status !== 200) {
      // throw new Error / error handling
      // }

      let data = {};
      if (acceptType === Accept.TEXT) {
        data = await response.text();
      } else {
        data = await response.json();
      }
      setFn(data);
    };

    fetchFromUrl(setStore, publicStoreURL);
    fetchFromUrl(setIndex, publicIndexURL, Accept.TEXT);
  }, [publicStoreURL, publicIndexURL]);

  return {
    index,
    store,
  };
};

export default useLocalSearchObject;
