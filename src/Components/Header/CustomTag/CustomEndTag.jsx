import React from "react";

const CustomStartTag = ({ children }) => {
  return (
    <span className="title-text font-light my-3 text-secondary capitalize tracking-[3.3px]">
      {`</`}
      {children}
      {`>`}
    </span>
  );
};

export default CustomStartTag;
