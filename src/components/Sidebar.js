import classNames from "classnames";
import Link from "next/link";
import { withRouter } from "next/router";
import React from "react";

const Sidebar = ({ posts, router: { query } }) => {
  return (
    <div className="col-span-3 md:pt-4">
      <ul className="sticky top-0 p-4">
        {posts.map(({ title, slug }) => {
          const linkClass = classNames({
            "py-1 px-2 block rounded-sm": true,
            "bg-gray-400 text-white": slug === query.slug,
          });
          return (
            <li key={slug} className="text-sm">
              <Link href={`/post/${slug}`}>
                <a className={linkClass}>{title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default withRouter(Sidebar);
