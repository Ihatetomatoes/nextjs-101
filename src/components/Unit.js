import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { Pill } from "./";

const UnitProgress = dynamic(() => import("./UnitProgress"), {
  ssr: false,
});

const Unit = ({ unit, index, isCompleted }) => {
  const { slug, title, excerpt, duration } = unit;

  return (
    <li className="border border-gray-200 border-t-0 relative z-10">
      <Link key={slug} href={`post/${slug}`}>
        <a
          className="relative block p-2 px-4 hover:bg-gray-100 transition-colors duration-200"
          href={`post/${slug}`}
        >
          <span className="flex">
            <span className="opacity-75 text-gray-200 text-4xl text-right w-12 self-center flex-shrink-0">
              {index + 1}
            </span>
            <span className="self-center pl-4">
              <strong className="text-gray-400">{title}</strong>{" "}
              <Pill text={duration} className="bg-green-100" />
              <br />
              <span className="text-sm text-gray-400 opacity-75">
                {excerpt}
              </span>
            </span>
            <span className="ml-auto self-center">
              <UnitProgress isCompleted={isCompleted} />
            </span>
          </span>
        </a>
      </Link>
    </li>
  );
};

export default Unit;
