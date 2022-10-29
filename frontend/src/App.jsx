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

const App = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-dark text-white">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
