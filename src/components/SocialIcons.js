import classNames from "classnames";
import React from "react";
import { social } from "../components/Meta";
import Facebook from "../icons/Facebook";
import Twitch from "../icons/Twitch";
import Twitter from "../icons/Twitter";
import YouTube from "../icons/Youtube";

const Icons = {
  facebook: <Facebook />,
  twitter: <Twitter />,
  youtube: <YouTube />,
  twitch: <Twitch />,
};

const SocialLink = ({ type }) => {
  const btnClass = classNames({
    [`block text-center text-gray-300 p-2 pt-4 sm:p-2 transition-colors duration-300 hover:text-white fill-current`]: true,
    [`hover:bg-facebook`]: type === "facebook",
    [`hover:bg-twitter`]: type === "twitter",
    [`hover:bg-twitch`]: type === "twitch",
    [`hover:bg-youtube`]: type === "youtube",
  });
  return (
    <li className="w-1/4 sm:w-auto text-center m-0">
      <a target="_blank" href={social[type]} className={btnClass}>
        <span className="w-8 h-8 sm:w-4 sm:h-4 inline-block">
          {Icons[type]}
        </span>
      </a>
    </li>
  );
};

const SocialIcons = () => (
  <div className="sm:ml-auto w-full mt-4 sm:mt-2">
    <ul className="flex m-0">
      <SocialLink type="twitter" />
      <SocialLink type="facebook" />
      <SocialLink type="youtube" />
      <SocialLink type="twitch" />
    </ul>
  </div>
);

export default SocialIcons;
