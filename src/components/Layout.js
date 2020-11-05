import React from "react";

const Layout = ({ children }) => (
  <div className="mx-auto px-4 sm:max-w-6xl min-h-full sm:grid grid-rows-1 grid-cols-12 w-full">
    {children}
  </div>
);

export default Layout;
