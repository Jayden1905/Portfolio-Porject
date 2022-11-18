import React, { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";

export const globalState = createContext({});

export function useGlobalContext() {
  return useContext(globalState);
}

const ContextProvider = ({ children }) => {
  const [mouseVarient, setMouseVarient] = useState("default");
  const [windowDimension, setWindowDimension] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  });

  const detectWindowSize = () => {
    setWindowDimension({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectWindowSize);

    return () => {
      window.removeEventListener("resize", detectWindowSize);
    };
  }, [windowDimension]);

  const mouseScaleUp = () => {
    setMouseVarient("scaleUp");
  };

  const mouseChangeBackground = () => {
    setMouseVarient("changeBackground");
  };

  const mouseSocialLinks = () => {
    setMouseVarient("scaleUpBlur");
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
        windowDimension,
      }}
    >
      {children}
    </globalState.Provider>
  );
};

export default ContextProvider;
