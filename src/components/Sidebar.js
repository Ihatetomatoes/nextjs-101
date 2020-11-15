import classNames from "classnames";
import Link from "next/link";
import { withRouter } from "next/router";
import React from "react";
import { CourseProgress, ResetProgressBtn } from "./";

const ProgressMarker = ({ isCurrent, isCompleted }) => {
  const markerClass = classNames({
    "bg-gray-200 text-white rounded-full inline-block w-2 h-2 self-center mr-2 transition-colors duration-200": true,
    "bg-completed": isCompleted || isCurrent,
  });
  return <span className={markerClass}>&nbsp;</span>;
};

const Sidebar = ({ units, router: { query }, progress, isSticky }) => {
  const sidebarClass = classNames({
    "p-4 bg-white border border-gray-200 md:border-0 m-4": true,
    "sticky top-0": isSticky,
  });
  return (
    <div className="col-span-3">
      <div className={sidebarClass}>
        <div className="py-4">
          <CourseProgress
            units={units}
            progress={progress}
            className="hidden md:block"
          />
          <div className="md:p-0">
            <ul>
              {units.map(({ title, slug, module }) => {
                const listItemClass = classNames({
                  "text-sm": true,
                  "font-bold": slug === query.slug,
                });
                const item = module ? (
                  <React.Fragment key={slug}>
                    <li className="font-bold py-2">{module}</li>
                    <li className={listItemClass}>
                      <Link href={`/post/${slug}`}>
                        <a className="p-1 pl-0 inline-flex">
                          <ProgressMarker
                            isCurrent={slug === query.slug}
                            isCompleted={progress.find(
                              (unit) => unit.path === slug
                            )}
                          />
                          {title}
                        </a>
                      </Link>
                    </li>
                  </React.Fragment>
                ) : (
                  <li key={slug} className={listItemClass}>
                    <Link href={`/post/${slug}`}>
                      <a className="p-1 pl-0 inline-flex">
                        <ProgressMarker
                          isCurrent={slug === query.slug}
                          isCompleted={progress.find(
                            (unit) => unit.path === slug
                          )}
                        />
                        {title}
                      </a>
                    </Link>
                  </li>
                );

                return item;
              })}
            </ul>
            <Link href="/">
              <a className="bold py-2 px-4 w-full inline-block text-center bg-gray-200 hover:bg-red-500 transition-colors duration-200 mt-4 text-white rounded-sm">
                ← Back to Overview
              </a>
            </Link>
            <ResetProgressBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
