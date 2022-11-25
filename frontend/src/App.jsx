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
        className="relative flex min-h-screen w-screen flex-col bg-dark text-white"
      >
        <Cursor />
        <Navbar />
        <Home />
      </div>
    </ContextProvider>
  );
};

export default App;
