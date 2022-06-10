import React from "react";
import Header from "../../Components/Header/Header";
import Social from "../../Components/Social/Social";
import About from "./About/About";
import Contact from "./Contact/Contact";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeProject from "./HomeProject/HomeProject";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <>
      <Header />
      <HomeBanner />
      <About />
      <Skills />
      <HomeProject />
      <Contact />
      <Social />
    </>
  );
};

export default Home;
