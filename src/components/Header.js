import Link from "next/link";
import React from "react";
import { logo, siteDescription, siteName } from "./Meta";

const Header = () => (
  <div className="sm:flex sm:flex-row pb-8 text-center sm:text-left">
    <Link href="/">
      <a title="Go to course overview">
        <img className="m-auto my-4 sm:m-0" src={logo} />
      </a>
    </Link>
    <div className="sm:pl-8 self-center w-full">
      <h1 className="font-bold text-2xl mb-1 text-gray-700">{siteName}</h1>
      <p className="text-gray-600">{siteDescription}</p>
    </div>
  </div>
);

export default Header;
