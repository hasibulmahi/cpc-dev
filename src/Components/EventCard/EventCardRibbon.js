import React from "react";

const EventCardRibbon = ({ status = "none" }) => {
  if (status.toLowerCase() === "ongoing") {
    return (
      <div
        className={`bg-green-200 dark:bg-green-400 dark:bg-opacity-50 text-green-600 dark:text-green-200 absolute top-0 right-0 py-0.5 px-2 text-xs font-bold rounded-tr-md rounded-bl shadow-md`}
      >
        Ongoing
      </div>
    );
  } else if (status.toLowerCase() === "upcoming") {
    return (
      <div
        className={`bg-orange-200 dark:bg-orange-400 dark:bg-opacity-50 text-orange-600 dark:text-orange-200 absolute top-0 right-0 py-0.5 px-2 text-xs font-bold rounded-tr-md rounded-bl shadow-md`}
      >
        Upcoming
      </div>
    );
  } else if (status.toLowerCase() === "finished") {
    return (
      <div
        className={`bg-teal-200 dark:bg-teal-400 dark:bg-opacity-50 text-teal-600 dark:text-teal-200 absolute top-0 right-0 py-0.5 px-2 text-xs font-bold rounded-tr-md rounded-bl shadow-md`}
      >
        Finished
      </div>
    );
  } else if (status.toLowerCase() === "cancelled") {
    return (
      <div
        className={`bg-red-200 dark:bg-red-400 dark:bg-opacity-50 text-red-600 dark:text-red-200 absolute top-0 right-0 py-0.5 px-2 text-xs font-bold rounded-tr-md rounded-bl shadow-md`}
      >
        Cancelled
      </div>
    );
  } else {
    return "";
  }
};

export default EventCardRibbon;
