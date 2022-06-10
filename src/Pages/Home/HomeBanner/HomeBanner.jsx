import React from "react";
import CustomStartTag from "../../../Components/Header/CustomTag/CustomStartTag";
import CustomEndTag from "../../../Components/Header/CustomTag/CustomEndTag";
import Container from "../../../Components/Container/Container";

const HomeBanner = () => {
  return (
    <Container>
      <p className="flex flex-col items-start justify-center gap-1">
        <CustomStartTag>name</CustomStartTag>
        <span className="text-3xl md:text-5xl lg:text-8xl  body-text tracking-widest font-black text-neutral capitalize">
          munna aziz
        </span>
        <span
          style={{ lineHeight: "80px" }}
          className="text-2xl md:text-4xl lg:text-6xl font-bold body-text text-accent capitalize mt-8 tracking-wider"
        >
          i build pixel perfect ui and functional web pages
        </span>
        <CustomEndTag>name</CustomEndTag>
      </p>
      <p
        style={{ lineHeight: "35px" }}
        className="title-text font-semibold text-accent sm:text-xl text-sm md:w-2/3 w-full my-6 tracking-widest"
      >
        I’m a web developer with experience creating pixel-perfect front-end UIs
        and Web-pages. Currently, I’m focused on building the MERN stack
        project.
      </p>
      <button className="btn btn-outline rounded-none border-secondary border-2 px-10 mt-6 hover:bg-secondary hover:border-secondary text-lg text-secondary capitalize hover:text-neutral duration-300 hover:-translate-y-2 h-12">
        <span>Download CV</span>
      </button>
    </Container>
  );
};

export default HomeBanner;
