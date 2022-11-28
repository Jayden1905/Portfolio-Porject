import React from "react";
import { Home } from "./container";
import { Navbar } from "./components";
import Cursor from "./components/Cursor/Cursor";
import ContextProvider from "./components/Context/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <div
        id="Home"
        className="scroll-smooth flex w-full h-full flex-col text-white overflow-x-hidden"
      >
        <Cursor />
        <Navbar />
        <Home />
      </div>
    </ContextProvider>
  );
};

export default App;
