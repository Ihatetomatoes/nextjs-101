import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto lg:px-4 lg:max-w-6xl min-h-screen lg:grid grid-rows-1 grid-cols-12 w-full">
      {children}
    </div>
  );
};

export default Layout;
