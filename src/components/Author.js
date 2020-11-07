import React from "react";

const Author = () => {
  return (
    <div className="md:flex md:flex-row relative border border-gray-200">
      <div className="bg-gray-100 text-center md:w-56 flex">profile image</div>
      <div className="px-8 py-12 self-center">bio</div>
    </div>
  );
};

export default Author;
