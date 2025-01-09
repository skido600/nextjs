import React from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Ideal from "./components/Ideal";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Ideal />
    </>
  );
};

export default Home;
