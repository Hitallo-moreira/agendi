import React, { createContext, useContext, useState } from 'react';

const DateTimeContext = createContext();

export const useDateTime = () => useContext(DateTimeContext);

export const DateTimeProvider = ({ children }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <DateTimeContext.Provider value={{ selectedDateTime, setSelectedDateTime, selectedTime, setSelectedTime }}>
      {children}
    </DateTimeContext.Provider>
  );
};

export const useDateTimeContext = () => {
  return useContext(DateTimeContext);
};