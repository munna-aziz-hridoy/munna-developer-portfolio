import React from "react";
import CustomStartTag from "../Header/CustomTag/CustomStartTag";
import CustomEndTag from "../Header/CustomTag/CustomEndTag";

const Heading = ({ children, tag, subTitle }) => {
  return (
    <p className="flex flex-col items-start justify-center gap-1" id={tag}>
      <CustomStartTag>{tag}</CustomStartTag>
      <span className="text-3xl text-neutral md:text-4xl lg:text-6xl font-semibold capitalize tracking-widest">
        {children}
      </span>
      <span className="text-xl md:text-2xl lg:text-3xl text-accent font-semibold capitalize mt-7 tracking-wider">
        {subTitle}
      </span>
      <CustomEndTag>{tag}</CustomEndTag>
    </p>
  );
};

export default Heading;
