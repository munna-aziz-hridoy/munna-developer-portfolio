import React, { useState } from "react";
import CustomStartTag from "../../../Components/Header/CustomTag/CustomStartTag";
import CustomEndTag from "../../../Components/Header/CustomTag/CustomEndTag";
import { Link, Outlet } from "react-router-dom";
import Container from "../../../Components/Container/Container";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState("front-end");

  const skills = ["back-end", "database"];

  return (
    <Container>
      {" "}
      <p className="flex flex-col items-start justify-center gap-1">
        <CustomStartTag>skills</CustomStartTag>
        <span className="text-3xl text-neutral md:text-4xl lg:text-6xl font-semibold capitalize tracking-widest">
          my skills
        </span>
        <span className="text-xl md:text-2xl lg:text-3xl text-accent font-semibold capitalize mt-7 tracking-wider">
          my area of experties about web development
        </span>
        <CustomEndTag>skills</CustomEndTag>
      </p>
      <div className=" md:flex justify-center items-start">
        <div className="w-full md:w-[35%]">
          <ul className="my-24 flex flex-col gap-12 text-2xl font-semibold text-neutral title-text">
            <Link to="/">
              {" "}
              <li
                onClick={() => setActiveSkill("front-end")}
                className={`h-16 flex items-center pl-4 capitalize duration-300 ${
                  activeSkill === "front-end"
                    ? "border-l-[3px] border-secondary"
                    : "border-l-[1px] border-accent"
                }`}
              >
                {" "}
                <span className="text-secondary">{1}.</span> front-end
              </li>
            </Link>
            {skills.map((skill, index) => (
              <Link to={`skill/${skill}`}>
                {" "}
                <li
                  key={index}
                  onClick={() => setActiveSkill(skill)}
                  className={`h-16 flex items-center pl-4 capitalize duration-300 ${
                    activeSkill === skill
                      ? "border-l-[3px] border-secondary"
                      : "border-l-[1px] border-accent"
                  }`}
                >
                  {" "}
                  <span className="text-secondary">{index + 2}.</span> {skill}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-[65%] my-20">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default Skills;
