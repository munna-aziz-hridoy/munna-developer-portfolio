import React from "react";

import profileImg from "../../../assets/images/Profile.png";
import Container from "../../../Components/Container/Container";
import Heading from "../../../Components/Heading/Heading";

const About = () => {
  return (
    <Container>
      <Heading tag="about" subTitle="who i'm and what i do">
        about me
      </Heading>
      <div className="lg:flex justify-between items-start my-28 gap-7">
        <div className="w-full lg:w-1/2">
          <p className="text-lg tracking-widest text-slate-300 leading-[40px] mb-10">
            Hello! My name is <span className="text-secondary">Munna</span> and
            I enjoy creating things for online consumption. As far back as 2019,
            I have been fascinated with web development. As I watched the HTML
            video, I noticed how some bunch of code was displayed in the
            browser. As a result, I was interested in learning more about web
            development.
          </p>
          <p className="text-lg tracking-widest text-slate-300 leading-[40px] my-10">
            In today's world, I'm confident working for an{" "}
            <span className="text-secondary">
              advertising agency, a start-up, a large company, and a student-led
              design studio
            </span>
            . Currently, my main focus is designing and building pixel-perfect
            web interfaces that are functional and appealing to users.
          </p>
        </div>
        <div className="relative w-full lg:w-[45%] imgBox">
          <img
            src={profileImg}
            className="w-[85%] h-full relative  z-10"
            alt=""
          />
          <div className="absolute w-[85%] h-full border-[3px] border-secondary top-8 left-8 imgBorder duration-300"></div>
          <div className="absolute w-[85%] h-full  bg-[#ec994b6c] duration-150 hover:bg-transparent  z-20 top-0 left-0"></div>
        </div>
      </div>
    </Container>
  );
};

export default About;
