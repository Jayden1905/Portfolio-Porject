import React from "react";
import { Home, Works } from "./container";
import { Navbar } from "./components";
import Cursor from "./components/Cursor/Cursor";
import ContextProvider from "./components/Context/ContextProvider";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <ContextProvider>
      <div className="relative flex min-h-screen w-screen flex-col bg-dark text-white">
        <Cursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </div>
    </ContextProvider>
  );
};

export default App;
