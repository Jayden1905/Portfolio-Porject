import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDark from "../../hooks/useDark";

export default function Switcher() {
  const [colorTheme, setTheme] = useDark();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className="m-16 flex flex-col items-center">
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={36}
        />
      </div>
    </>
  );
}
