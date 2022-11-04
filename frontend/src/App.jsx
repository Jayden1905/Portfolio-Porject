import React from "react";

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Works,
} from "./container";

import { Navbar } from "./components";
import Cursor from "./components/Cursor/Cursor";
import ContextProvider from "./components/Context/useContext";

const App = () => {
  return (
    <ContextProvider>
      <div className="relative flex min-h-screen w-full flex-col bg-dark text-white">
        <Cursor />
        <Navbar />
        <Header />
        <About />
        <Works />
        <Skills />
        <Testimonials />
        <Footer />
      </div>
    </ContextProvider>
  );
};

export default App;
