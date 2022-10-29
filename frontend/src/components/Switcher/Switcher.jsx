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
      <div className="mr-[5rem] flex flex-col items-center sm:mr-[10rem]">
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={45}
        />
      </div>
    </>
  );
}
