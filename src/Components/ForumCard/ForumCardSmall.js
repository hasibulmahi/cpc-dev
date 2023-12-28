import React from "react";
import { Link } from "react-router-dom";
import ForumCardRibbon from "./ForumCardRibbon";

const ForumCardSmall = ({ type }) => {
  return (
    <Link to="/" className="first:mt-0 last:mb-0 my-5 block">
      <div className="p-3 px-5 bg-white dark:bg-slate-800 rounded-md shadow hover:bg-slate-200 dark:hover:bg-slate-600 transition duration-300 relative">
        <div className="text-slate-600 dark:text-slate-300 font-medium text-2xl truncate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa
          sint autem velit at ab repellat iste asperiores aperiam! Nesciunt.
        </div>
        <div className="grid grid-cols-2">
          <span className="text-xs font-medium text-slate-400 mt-2">
            Created: 1 Jan, 2022
          </span>
          <span className="text-xs font-medium text-slate-400 mt-2">
            Replies: 10
          </span>
        </div>
        <ForumCardRibbon type={type}></ForumCardRibbon>
      </div>
    </Link>
  );
};

export default ForumCardSmall;
