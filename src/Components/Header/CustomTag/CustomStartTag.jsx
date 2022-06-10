import React from "react";

const CustomStartTag = ({ children }) => {
  return (
    <span className="title-text  my-3 font-light text-secondary capitalize tracking-[3.3px]">
      {`<`}
      {children}
      {`>`}
    </span>
  );
};

export default CustomStartTag;
