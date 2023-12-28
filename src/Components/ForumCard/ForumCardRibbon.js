import React from "react";

const ForumCardRibbon = ({ type = "none" }) => {
  if (type.toLowerCase() === "discussion") {
    return (
      <div
        className={`bg-blue-200 dark:bg-blue-400 dark:bg-opacity-50 text-blue-600 dark:text-blue-200 absolute top-0 right-0 py-0.5 px-2 text-xs font-bold rounded-tr-md rounded-bl shadow-md`}
      >
        Discussion
      </div>
    );
  } else if (type.toLowerCase() === "event") {
    return (
      <div
        className={`bg-orange-200 dark:bg-orange-400 dark:bg-opacity-50 text-orange-600 dark:text-orange-200 absolute top-0 right-0 py-0.5 px-2 text-xs font-bold rounded-tr-md rounded-bl shadow-md`}
      >
        Event
      </div>
    );
  } else if (type.toLowerCase() === "notice") {
    return (
      <div
        className={`bg-amber-200 dark:bg-amber-400 dark:bg-opacity-50 text-amber-600 dark:text-amber-200 absolute top-0 right-0 py-0.5 px-2 text-xs font-bold rounded-tr-md rounded-bl shadow-md`}
      >
        Notice
      </div>
    );
  } else if (type.toLowerCase() === "bug") {
    return (
      <div
        className={`bg-red-200 dark:bg-red-400 dark:bg-opacity-50 text-red-600 dark:text-red-200 absolute top-0 right-0 py-0.5 px-2 text-xs font-bold rounded-tr-md rounded-bl shadow-md`}
      >
        Bug Report
      </div>
    );
  } else if (type.toLowerCase() === "feature") {
    return (
      <div
        className={`bg-indigo-200 dark:bg-indigo-400 dark:bg-opacity-50 text-indigo-600 dark:text-indigo-200 absolute top-0 right-0 py-0.5 px-2 text-xs font-bold rounded-tr-md rounded-bl shadow-md`}
      >
        Feature Request
      </div>
    );
  } else if (type.toLowerCase() === "site") {
    return (
      <div
        className={`bg-purple-200 dark:bg-purple-400 dark:bg-opacity-50 text-purple-600 dark:text-purple-200 absolute top-0 right-0 py-0.5 px-2 text-xs font-bold rounded-tr-md rounded-bl shadow-md`}
      >
        Website Update
      </div>
    );
  } else {
    return "";
  }
};

export default ForumCardRibbon;
