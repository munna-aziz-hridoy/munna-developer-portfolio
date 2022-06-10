import React from "react";
import { useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, index, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <li
      className={`font-semibold flex justify-center items-center gap-2 capitalize hover:text-secondary duration-300 ${
        match ? "text-secondary" : "text-neutral"
      }`}
    >
      <span className="text-secondary title-text">{index + 1}.</span>

      <a href={`#${to}`} {...props} className="mx-3">
        {children}
      </a>
    </li>
  );
};

export default CustomLink;
