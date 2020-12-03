import { social } from "@config";
import { Facebook, Link, Twitch, Twitter, YouTube } from "@icons/index";
import classNames from "classnames";
import React from "react";

const Icons = {
  website: <Link />,
  facebook: <Facebook />,
  twitter: <Twitter />,
  youtube: <YouTube />,
  twitch: <Twitch />,
};

const SocialLink = ({ type }) => {
  const btnClass = classNames({
    [`flex text-center text-gray-300 p-2 transition-colors duration-300 hover:text-white fill-current`]: true,
    [`hover:bg-red-500`]: type === "website",
    [`hover:bg-facebook`]: type === "facebook",
    [`hover:bg-twitter`]: type === "twitter",
    [`hover:bg-twitch`]: type === "twitch",
    [`hover:bg-youtube`]: type === "youtube",
  });
  return (
    <li className="sm:w-auto text-center m-0 self-center">
      <a
        target="_blank"
        title={`Follow me on ${type.toUpperCase()}`}
        href={social[type]}
        rel="noopener"
        className={btnClass}
      >
        <span className="w-4 h-4 inline-block">{Icons[type]}</span>
      </a>
    </li>
  );
};

const SocialIcons = () => (
  <div className="sm:ml-auto w-full mt-2">
    <ul className="flex m-0">
      <SocialLink type="website" />
      <SocialLink type="twitter" />
      <SocialLink type="facebook" />
      <SocialLink type="youtube" />
      <SocialLink type="twitch" />
    </ul>
  </div>
);

export default SocialIcons;
