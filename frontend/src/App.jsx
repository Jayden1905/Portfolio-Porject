import React from "react";

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Works,
} from "./container";

import { Navbar, Switcher } from "./components";

const App = () => {
  return (
    <div className="App">
      <Switcher />
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
