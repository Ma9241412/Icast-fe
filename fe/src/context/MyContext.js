// MyContext.js
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext(null); // Set default value if required

export const MyContextProvider = ({ children }) => {
  const [state, setState] = useState("some value");

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
