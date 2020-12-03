import React from "react";

const Pill = ({ text }) => {
  return (
    <span className="ml-2 text-xs self-center px-1 bg-green-100 rounded-md">
      {text}
    </span>
  );
};

export default Pill;
