import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import CustomLink from "./CustomLink/CustomLink";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItem = ["about", "skills", "projects", "contact"];
  return (
    <div className="h-[90px] shadow-xl shadow-[#ec994b1a] relative">
      {" "}
      <div class="navbar bg-base-100 h-full justify-between items-center container mx-auto">
        <div class="h-full mt-1">
          <a class="btn btn-ghost inline-block h-full" href="/">
            <img src={logo} alt="" className="w-full h-full" />
          </a>
        </div>
        <div>
          <ul className="hidden lg:flex justify-center items-center h-full gap-8">
            {menuItem.map((item, index) => (
              <CustomLink key={index} to={item} index={index + 1}>
                {item}
              </CustomLink>
            ))}
          </ul>
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-3xl text-secondary hover:text-neutral z-10"
          >
            <FontAwesomeIcon
              className="duration-500 text-secondary"
              icon={isMenuOpen ? faX : faBars}
            />
          </div>
          <div
            className={`flex lg:hidden  justify-center items-center absolute bg-primary w-[100vw] h-[100vh] left-0 duration-500 ${
              isMenuOpen ? "top-0" : "top-[-3000px]"
            }`}
          >
            {" "}
            <ul className="lg:hidden flex flex-col justify-center items-start gap-10 text-3xl ">
              {menuItem.map((item, index) => (
                <CustomLink key={index} to={item} index={index + 1}>
                  {item}
                </CustomLink>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
