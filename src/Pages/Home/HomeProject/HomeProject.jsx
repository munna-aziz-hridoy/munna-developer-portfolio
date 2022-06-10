import React from "react";
import CustomStartTag from "../../../Components/Header/CustomTag/CustomStartTag";

import projectOne from "../../../assets/images/project-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Container from "../../../Components/Container/Container";
import Heading from "../../../Components/Heading/Heading";

const HomeProject = () => {
  return (
    <Container>
      <Heading tag="projects" subTitle="some of work sample i've build">
        projects
      </Heading>
      <div className="my-28">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-start relative gap-16">
          <div className=" w-full lg:w-[60%] relative">
            <img src={projectOne} className="w-full z-10 " alt="" />
            <div className=" absolute w-full h-full  bg-[#ec994b6c] duration-150 hover:bg-transparent z-20 top-0 left-0"></div>
          </div>
          <div className="w-full lg:w-[40%] z-30 flex flex-col items-end justify-center">
            <CustomStartTag>feature project</CustomStartTag>
            <p className="text-2xl font-semibold capitalize text-neutral">
              Manufacturer Website
            </p>
            <div className="bg-primary w-full lg:w-[140%] lg:-ml-72 shadow-xl my-8 flex justify-center items-center p-8">
              <p className="text-lg font-medium title-text py-6">
                Simple Manufacturer web application with{" "}
                <span className="text-secondary">authentication</span> system.
                <span className="text-secondary">CRUD operation</span> in the
                database. <span className="text-secondary">Authorization</span>{" "}
                system. Defferent dashboard for user and admin
              </p>
            </div>
            <p className="text-xl  capitalize text-accent  flex flex-wrap">
              {[
                "React.Js",
                "Firebase",
                "TailwindCSS",
                "Node.Js",
                "Express.Js",
                "MongoDB",
              ].map((tools, index) => (
                <span key={index} className="mx-5">
                  {tools}
                </span>
              ))}
            </p>
            <div className="flex justify-end items-center gap-10  text-4xl  mt-8">
              <FontAwesomeIcon
                className="cursor-pointer text-secondary hover:text-neutral duration-200"
                icon={faGithub}
              />
              <FontAwesomeIcon
                className="cursor-pointer text-secondary hover:text-neutral duration-200"
                icon={faUpRightFromSquare}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeProject;
