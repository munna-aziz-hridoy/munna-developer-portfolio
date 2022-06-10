import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div className="h-[100vh] fixed top-0 w-fit hidden lg:flex flex-col justify-center items-center ml-5">
      <div className="h-[130px] w-[2px] rounded-3xl bg-secondary"></div>
      <div className="flex justify-center items-center gap-3 flex-col my-4">
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

      <div className="h-[130px] w-[2px] rounded-3xl bg-secondary"></div>
    </div>
  );
};

export default Social;
