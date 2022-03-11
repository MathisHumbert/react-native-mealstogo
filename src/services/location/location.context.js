import React, { useState, createContext, useEffect } from 'react';

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState('san francisco');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    console.log(searchKeyword);
    setIsLoading(true);
    setKeyword(searchKeyword);
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((res) => {
        setLocation(res);
        setIsLoading(false);
        console.log(res);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    onSearch(keyword);
  }, []);

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
