import { logo, siteDescription, siteName } from "@config";
import Link from "next/link";
import React from "react";

const Header = () => (
  <div className="sm:flex sm:flex-row pb-8 text-center sm:text-left">
    <Link href="/">
      <a title="Go to course overview" className="block">
        <img
          className="m-auto my-4 sm:m-0 w-24 sm:w-auto"
          alt="Ihatetomatoes"
          src={logo}
        />
      </a>
    </Link>
    <div className="sm:pl-8 self-center w-full">
      <h1 className="font-bold md:text-2xl mb-1 text-gray-700">{siteName}</h1>
      <p className="text-gray-600 text-sm w-48 mx-auto sm:w-auto md:mx-0">
        {siteDescription}
      </p>
    </div>
  </div>
);

export default Header;
