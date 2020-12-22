import { Less, More } from "@icons/index";
import { groupBy } from "@utils/utils";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { withRouter } from "next/router";
import React, { useState } from "react";
import { Pill } from "./";

const ProgressMarker = ({ isCompleted }) => {
  const markerClass = classNames({
    "bg-gray-200 text-white rounded-full inline-block w-2 h-2 self-center mr-2 transition-colors duration-200": true,
    "bg-completed": isCompleted,
  });
  return <span className={markerClass}>&nbsp;</span>;
};

const UnitItem = ({ unit: { slug, title, duration }, progress, query }) => {
  const isCompleted = progress.find((item) => item.path === slug);
  const linkClass = classNames({
    "p-1 px-2 flex place-self-stretch rounded-md hover:bg-green-100 focus:outline-none focus:ring-2 ring-inset ring-blue-500": true,
    "bg-green-100": slug === query.slug,
  });

  const pillClass = classNames({
    "bg-green-100": slug === query.slug,
  });

  return (
    <li className="text-sm">
      <Link href={`/post/${slug}`}>
        <a className={linkClass}>
          <ProgressMarker isCompleted={isCompleted} />
          <span className="lg:flex-1">{title}</span>
          <Pill text={duration} className={pillClass} />
        </a>
      </Link>
    </li>
  );
};

const ModuleItem = ({ module, units, query, progress }) => {
  const isCurrentModule = units.find((u) => u.slug === query.slug);
  const [isOpen, setIsOpen] = useState(isCurrentModule);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <button
        className="font-bold p-2 cursor-pointer w-full text-left hover:bg-blue-100 rounded-md focus:outline-none focus:ring-2 ring-inset ring-blue-500 flex"
        onClick={toggleOpen}
      >
        <span>{module}</span>
        <span className="w-4 h-4 inline-block ml-auto self-center">
          {isOpen ? <Less /> : <More />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && units && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", overflow: "hidden" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.5, 0.7, 0.4, 1] }}
          >
            <ul>
              {units.map((unit) => (
                <UnitItem
                  key={unit.slug}
                  unit={unit}
                  query={query}
                  progress={progress}
                />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Modules = ({ units = [], router: { query }, progress }) => {
  const modules = groupBy(units, "module");
  return (
    <>
      {modules.length ? (
        modules.map(({ name, units }) => {
          return (
            <ModuleItem
              key={name}
              module={name}
              units={units}
              query={query}
              progress={progress}
            />
          );
        })
      ) : (
        <p className="text-sm text-center">
          There are not units in this course.
        </p>
      )}
    </>
  );
};

export default withRouter(Modules);
