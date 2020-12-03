import React from "react";

const Pill = ({ text, className }) => {
  return (
    <span className={`ml-2 text-xs self-center px-1 rounded-md ${className}`}>
      {text}
    </span>
  );
};

export default Pill;
