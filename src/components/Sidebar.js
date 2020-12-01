import { FeedbackFish } from "@feedback-fish/react";
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

const UnitItem = ({ unit: { slug, title }, progress, query }) => {
  const listItemClass = classNames({
    "text-sm": true,
    "font-bold": slug === query.slug,
  });
  return (
    <li className={listItemClass}>
      <Link href={`/post/${slug}`}>
        <a className="p-1 pl-0 inline-flex">
          <ProgressMarker
            isCurrent={slug === query.slug}
            isCompleted={progress.find((item) => item.path === slug)}
          />
          {title}
        </a>
      </Link>
    </li>
  );
};
const ModuleItem = ({ module }) => <li className="font-bold py-2">{module}</li>;

const Sidebar = ({ units, router: { query }, progress, isSticky }) => {
  const sidebarClass = classNames({
    "p-4 bg-white border border-gray-200 md:border-0 m-4": true,
    "sticky top-0": isSticky,
  });

  return (
    <div className="col-span-3 relative">
      <div className={sidebarClass}>
        <div className="py-4">
          <FeedbackFish projectId="4a0797d18b26fe">
            <button
              className="bold py-2 px-4 mb-4 w-full inline-block text-center bg-gray-200 hover:bg-red-500 transition-colors duration-200 text-white rounded-sm"
              title="Leave a short review, question or feedback. Thank you!"
            >
              Give me feedback
            </button>
          </FeedbackFish>
          <CourseProgress
            units={units}
            progress={progress}
            className="hidden md:block"
          />
          <div className="md:p-0">
            <ul>
              {units.map((unit) => {
                const item = unit.module ? (
                  <React.Fragment key={unit.slug}>
                    <ModuleItem module={unit.module} />
                    <UnitItem unit={unit} query={query} progress={progress} />
                  </React.Fragment>
                ) : (
                  <UnitItem
                    key={unit.slug}
                    unit={unit}
                    query={query}
                    progress={progress}
                  />
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
