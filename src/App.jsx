import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
import Service from "./Components/Service/Service";
import Mywork from "./Components/Mywork/Mywork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills/>
      <Service/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;