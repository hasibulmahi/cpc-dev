import React from "react";

const UserCardRibbon = ({ relation = "none" }) => {
  if (relation?.toLowerCase() === "following") {
    return (
      <div
        className={`bg-purple-200 dark:bg-purple-400 dark:bg-opacity-50 text-purple-600 dark:text-purple-200 absolute top-0 right-0 py-0.5 px-2 text-xs font-bold rounded-tr-md rounded-bl shadow-md`}
      >
        Following
      </div>
    );
  } else if (relation?.toLowerCase() === "follows") {
    return (
      <div
        className={`bg-indigo-200 dark:bg-indigo-400 dark:bg-opacity-50 text-indigo-600 dark:text-indigo-200 absolute top-0 right-0 py-0.5 px-2 text-xs font-bold rounded-tr-md rounded-bl shadow-md`}
      >
        Follows You
      </div>
    );
  } else if (relation?.toLowerCase() === "friends") {
    return (
      <div
        className={`bg-fuchsia-200 dark:bg-fuchsia-400 dark:bg-opacity-50 text-fuchsia-600 dark:text-fuchsia-200 absolute top-0 right-0 py-0.5 px-2 text-xs font-bold rounded-tr-md rounded-bl shadow-md`}
      >
        Friends
      </div>
    );
  } else {
    return "";
  }
};

export default UserCardRibbon;
