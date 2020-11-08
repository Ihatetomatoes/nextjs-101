import Link from "next/link";
import React from "react";
import { Tick } from "../icons";
import { coverImage, outcomes } from "./Meta";

const StartBtn = () => (
  <Link href="/post/introduction">
    <a className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200">
      Start Learning →
    </a>
  </Link>
);

const ComingSoonBadge = () => (
  <span className="bg-blue-500 text-white py-2 px-4 rounded-md transition duration-200">
    Coming Soon!
  </span>
);

const Hero = () => {
  return (
    <div className="md:flex md:flex-row relative border border-gray-200">
      <div className="bg-gray-100 text-center md:w-56 flex">
        <img className="object-contain mx-auto" src={coverImage} />
      </div>
      <div className="px-8 py-12 self-center">
        <h2 className="font-bold text-2xl mb-3">What you'll learn</h2>
        {outcomes && (
          <ul className="mb-6">
            {outcomes.map((i) => (
              <li key={i} className="text-gray-700 list-none flex mb-2">
                <span className="flex">
                  <Tick className="h-6 w-10 self-center" />
                </span>
                <span className="pl-1 opacity-75">{i}</span>
              </li>
            ))}
          </ul>
        )}
        <ComingSoonBadge />
      </div>
    </div>
  );
};

export default Hero;
