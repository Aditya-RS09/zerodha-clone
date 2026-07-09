import React from "react";

const GeneralContext = React.createContext();

export const GeneralContextProvider = ({ children }) => {
  return (
    <GeneralContext.Provider value={{}}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;