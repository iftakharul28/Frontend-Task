import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();
export const StateContext = ({ children, jobs }) => {
  const [showNav, setShowNav] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <Context.Provider
      value={{
        showNav,
        setShowNav,
        value,
        setValue,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
