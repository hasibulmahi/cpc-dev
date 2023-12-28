import React from "react";
import { Link } from "react-router-dom";

const UserCardSmall = ({ user }) => {
  return (
    <Link to={`/user/${user?.uid}`} className="first:mt-0 last:mb-0 my-5 block">
      <div className="p-3 px-5 flex items-center bg-white dark:bg-slate-800 rounded-md shadow hover:bg-slate-200 dark:hover:bg-slate-600 transition duration-300 relative">
        {user?.user_img === "" || user?.user_img === "default" ? (
          <div className="avatar placeholder w-12 h-12">
            <div className="bg-slate-600 text-neutral-content mask mask-circle">
              <span className="text-xl">
                {user?.display_name ? user?.display_name[0] : user?.name[0]}
              </span>
            </div>
          </div>
        ) : (
          <div className="bg-slate-200 rounded-full w-12">
            <img
              src={
                user?.user_img
                  ? `https://static.cpc.daffodilvarsity.edu.bd/${user?.user_img}`
                  : ""
              }
              alt={user?.name}
              className="w-12 rounded-full"
            />
          </div>
        )}
        <div className="ml-3 text-slate-600 dark:text-slate-300 font-medium text-xl">
          {user?.name}
        </div>
        {/* <UserCardRibbon relation={relation}></UserCardRibbon> */}
      </div>
    </Link>
  );
};

export default UserCardSmall;
