import classNames from "classnames";
import Link from "next/link";
import { Tick } from "../icons";

const Unit = ({ unit, index, isCompleted }) => {
  const { slug, title, excerpt } = unit;
  const tickClass = classNames({
    "rounded-full border border-gray-200 w-10 h-10 flex bg-white": true,
    "border-dashed": !isCompleted,
    "border-solid": isCompleted,
  });
  return (
    <li className="border border-gray-200 border-t-0 relative z-10">
      <Link key={slug} href={`post/${slug}`}>
        <a
          className="relative block p-2 px-4 hover:bg-gray-100 transition-colors duration-200"
          href={`post/${slug}`}
        >
          <span className="flex">
            <span className="opacity-75 text-gray-200 text-4xl text-right w-12 self-center">
              {index + 1}
            </span>
            <span className="self-center pl-4">
              <strong className="text-gray-400">{title}</strong>
              <br />
              <span className="text-sm text-gray-400 opacity-75">
                {excerpt}
              </span>
            </span>
            <span className="ml-auto self-center">
              <span className={tickClass}>
                {isCompleted && (
                  <Tick className="h-4 w-8 self-center mx-auto" />
                )}
              </span>
            </span>
          </span>
        </a>
      </Link>
    </li>
  );
};

export default Unit;
