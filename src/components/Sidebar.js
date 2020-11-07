import classNames from "classnames";
import Link from "next/link";
import { withRouter } from "next/router";
import React from "react";

const Sidebar = ({ posts, router: { query } }) => {
  return (
    <div className="col-span-3">
      <div className="sticky top-0 md:p-4">
        <Link href="/">
          <a className="bold py-2 px-4 w-full inline-block text-center bg-gray-200 hover:bg-red-500 transition-colors duration-200 my-4 text-white rounded-md">
            ← Back to Overview
          </a>
        </Link>
        <div className="bg-white border p-4 md:p-0 mb-4 border-gray-200 md:border-0 md:bg-transparent">
          <h2 className="text-xl font-bold mb-2">All Units</h2>
          <ul>
            {posts.map(({ title, slug, module }) => {
              const linkClass = classNames({
                "py-1 px-2 pl-4 block rounded-sm": true,
                "bg-gray-400 text-white": slug === query.slug,
              });
              const item = module ? (
                <ul key={slug}>
                  <li className="text-sm font-bold py-1">{module}</li>
                  <li className="text-sm">
                    <Link href={`/post/${slug}`}>
                      <a className={linkClass}>{title}</a>
                    </Link>
                  </li>
                </ul>
              ) : (
                <li key={slug} className="text-sm">
                  <Link href={`/post/${slug}`}>
                    <a className={linkClass}>{title}</a>
                  </Link>
                </li>
              );
              return item;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
