import React from "react";
import { useContext } from "react";

import { createContext, useState } from "react";

export const globalState = createContext({});

export function useGlobalContext() {
  return useContext(globalState);
}

const ContextProvider = ({ children }) => {
  const [mouseVarient, setMouseVarient] = useState("default");

  const mouseScaleUp = () => {
    setMouseVarient("scaleUp");
  };

  const mouseChangeBackground = () => {
    setMouseVarient("changeBackground");
  };

  const mouseSocialLinks = () => {
    setMouseVarient("socialLinks");
  };

  const mouseDefault = () => {
    setMouseVarient("default");
  };

  return (
    <globalState.Provider
      value={{
        mouseVarient,
        mouseDefault,
        mouseScaleUp,
        mouseChangeBackground,
        mouseSocialLinks,
      }}
    >
      {children}
    </globalState.Provider>
  );
};

export default ContextProvider;
