import React, { createContext, useContext, useState } from 'react';

const DateTimeContext = createContext();

export const useDateTime = () => useContext(DateTimeContext);

export const DateTimeProvider = ({ children }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  return (
    <DateTimeContext.Provider value={{ selectedDateTime, setSelectedDateTime }}>
      {children}
    </DateTimeContext.Provider>
  );
};
