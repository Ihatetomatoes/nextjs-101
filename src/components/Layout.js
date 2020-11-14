import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto md:px-4 md:max-w-6xl min-h-screen md:grid grid-rows-1 grid-cols-12 w-full">
      {children}
    </div>
  );
};

export default Layout;
