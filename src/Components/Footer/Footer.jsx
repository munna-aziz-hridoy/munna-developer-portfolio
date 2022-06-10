import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4  lg:px-48 my-14">
      <div className="flex justify-center items-center flex-col">
        <div>
          <p className="text-sm text-accent font-semibold capitalize">
            Created and Design by{" "}
            <span className="text-secondary">Munna Aziz</span>
          </p>
        </div>
        <div className="flex lg:hidden justify-center items-center gap-3 my-4">
          <div className="w-[45px] h-[45px] border-2 border-secondary hover:bg-primary hover:text-secondary cursor-pointer duration-300 bg-secondary text-primary text-2xl rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="w-[45px] h-[45px] border-2 border-secondary hover:bg-primary hover:text-secondary cursor-pointer duration-300 bg-secondary text-primary text-2xl rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div className="w-[45px] h-[45px] border-2 border-secondary hover:bg-primary hover:text-secondary cursor-pointer duration-300 bg-secondary text-primary text-2xl rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
