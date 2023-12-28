import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

const FourOFour = () => {
  useDocumentTitle("Page Not Found");
  return (
    <div className="bg-slate-100 dark:bg-slate-900 w-screen h-screen flex items-center justify-center">
      <div className="p-10">
        <p className="font-bold text-slate-700 dark:text-slate-300 text-5xl md:text-7xl mb-10">
          Uppsss... 404
        </p>
        <p className="font-semibold text-slate-700 dark:text-slate-300 text-2xl mb-14">
          Page Not Found
        </p>
        <p className="text-slate-600 dark:text-slate-300 mb-10">
          Check if the link is correct or you have permission to view this page.
          <br />
          If you think this is an error, contact{" "}
          <Link
            to="/"
            className="hover:text-orange-500 transition ease-in-out duration-500 underline underline-offset-1"
          >
            support
          </Link>{" "}
          <span className="font-bold">Thanks!</span>
        </p>
        <Link
          to="/"
          className="p-1 px-3 bg-orange-100 dark:bg-slate-800 hover:bg-orange-200 dark:hover:bg-slate-700 ring-2 ring-orange-300 dark:hover:ring-orange-500 rounded-full transition ease-in-out duration-500 font-semibold text-slate-700 dark:text-slate-300 hover:text-orange-800 dark:hover:text-orange-500"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default FourOFour;
