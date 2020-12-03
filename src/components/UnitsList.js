import classNames from "classnames";
import Link from "next/link";
import { withRouter } from "next/router";
import React from "react";
import { Pill } from "./";

const ProgressMarker = ({ isCurrent, isCompleted }) => {
  const markerClass = classNames({
    "bg-gray-200 text-white rounded-full inline-block w-2 h-2 self-center mr-2 transition-colors duration-200": true,
    "bg-completed": isCompleted || isCurrent,
  });
  return <span className={markerClass}>&nbsp;</span>;
};

const UnitItem = ({ unit: { slug, title, duration }, progress, query }) => {
  const listItemClass = classNames({
    "text-sm": true,
    "font-bold": slug === query.slug,
  });
  return (
    <li className={listItemClass}>
      <Link href={`/post/${slug}`}>
        <a className="p-1 px-0 flex place-self-stretch">
          <ProgressMarker
            isCurrent={slug === query.slug}
            isCompleted={progress.find((item) => item.path === slug)}
          />
          <span className="lg:flex-1">{title}</span>
          <Pill text={duration} />
        </a>
      </Link>
    </li>
  );
};

const ModuleItem = ({ module }) => <li className="font-bold py-2">{module}</li>;

const UnitsList = ({ units, router: { query }, progress }) => {
  return (
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
  );
};

export default withRouter(UnitsList);
