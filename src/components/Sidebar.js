import { FeedbackFish } from "@feedback-fish/react";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { CourseProgress, Modules, ResetProgressBtn } from "./";

const Sidebar = ({ units, progress, isSticky }) => {
  const sidebarClass = classNames({
    "px-2 py-4 bg-white border border-gray-200 md:border-0 m-4 lg:m-0 lg:ml-4": true,
    "sticky top-0": isSticky,
  });

  return (
    <div className={sidebarClass}>
      <div className="py-4">
        <div className="px-2">
          <FeedbackFish projectId={process.env.NEXT_PUBLIC_FEEDBACK_FISH_ID}>
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
        </div>
        <div className="md:p-0">
          <Modules units={units} progress={progress} />
          <Link href="/">
            <a className="bold py-2 px-4 w-full inline-block text-center bg-gray-200 hover:bg-red-500 transition-colors duration-200 mt-4 text-white rounded-sm">
              ← Back to Overview
            </a>
          </Link>
          <ResetProgressBtn />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
