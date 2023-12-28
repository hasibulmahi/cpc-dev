import React from "react";

const Badge = ({ role }) => {
  role ? (role = role) : (role = "user");
  if (role?.toLowerCase() === "developer" || role.toLowerCase() === "dev") {
    return (
      <div
        className={`text-[10px] font-semibold text-emerald-700 bg-emerald-300 dark:bg-opacity-100 bg-opacity-75 w-max px-1 py-[2px] flex items-center rounded-full ml-[2px]`}
      >
        Developer
      </div>
    );
  } else if (role.toLowerCase() === "admin") {
    return (
      <div
        className={`text-[10px] font-semibold text-amber-700 bg-amber-300 dark:bg-opacity-100 bg-opacity-75 w-max px-1 py-[2px] flex items-center rounded-full ml-[2px]`}
      >
        Admin
      </div>
    );
  } else if (
    role.toLowerCase() === "moderator" ||
    role.toLowerCase() === "mod"
  ) {
    return (
      <div
        className={`text-[10px] font-semibold text-purple-700 bg-purple-300 dark:bg-opacity-100 bg-opacity-75 w-max px-1 py-[2px] flex items-center rounded-full ml-[2px]`}
      >
        Moderator
      </div>
    );
  }
};

export default Badge;
