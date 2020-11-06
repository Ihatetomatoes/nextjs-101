import Link from "next/link";
import { withRouter } from "next/router";
import React from "react";

const Layout = ({ children, router: { asPath } }) => {
  const notHomepage = asPath !== "/";
  return (
    <div className="mx-auto px-4 md:max-w-6xl min-h-screen md:grid grid-rows-1 grid-cols-12 w-full">
      {notHomepage && (
        <div>
          <Link href="/">
            <a className="bold p-4 w-full inline-block text-center bg-gray-200 hover:bg-gray-500 transition-colors duration-200 sticky top-0 md:mt-8 text-white">
              ← <span className="md:hidden">Back to Overview</span>
            </a>
          </Link>
        </div>
      )}
      {children}
    </div>
  );
};

export default withRouter(Layout);
