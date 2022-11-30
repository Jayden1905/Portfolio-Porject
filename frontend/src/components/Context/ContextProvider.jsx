import React, { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import { client } from "../../client";

export const globalState = createContext({});

export function useGlobalContext() {
  return useContext(globalState);
}

const ContextProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 800,
    y: 500,
  });
  const [abouts, setAbouts] = useState([]);
  const [works, setWorks] = useState([]);

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

  const dynamicSort = (property) => {
    let sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      let result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    const fetchAbouts = async () => {
      const query = '*[_type == "abouts"]';
      const data = await client.fetch(query);
      data.sort(dynamicSort("_createdAt"));

      setAbouts(data);
    };

    fetchAbouts();

    const fetchWorks = async () => {
      const query = '*[_type == "works"]';
      const data = await client.fetch(query);
      data.sort(dynamicSort("_createdAt"));

      setWorks(data);
    };

    fetchWorks();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const mouseScaleUp = () => {
    setMouseVarient("scaleUp");
  };

  const mouseChangeBackground = () => {
    setMouseVarient("changeBackground");
  };

  const mouseSocialLinks = () => {
    setMouseVarient("scaleUpBlur");
  };

  const mouseView = () => {
    setMouseVarient("view");
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
        mouseView,
        windowDimension,
        mousePosition,
        abouts,
        works,
      }}
    >
      {children}
    </globalState.Provider>
  );
};

export default ContextProvider;
