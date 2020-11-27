import { author, authorImg, authorTitle, shortBio, social } from "@config";
import Image from "next/image";
import React from "react";
import { SocialIcons } from "./";

const Author = () => {
  return (
    <div className="md:flex md:flex-row relative bg-gray-700 text-white">
      <div className="text-center flex p-8 w-48 mx-auto">
        <a href={social.website} target="_blank">
          <Image
            className="object-contain mx-auto"
            src={authorImg}
            width={382}
            height={382}
            alt="Petr Tichy"
          />
        </a>
      </div>
      <div className="px-8 pb-8 md:pt-8 md:pl-0 self-center">
        <h3 className="text-lg leading-4 mb-2">
          <a href={social.website} target="_blank" className=" hover:underline">
            {author}
          </a>
          <br />
          <span className="uppercase text-gray-300 text-xs">{authorTitle}</span>
        </h3>
        <p className="text-sm text-gray-200 ">{shortBio}</p>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Author;
