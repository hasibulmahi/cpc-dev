import React from "react";
import wing_acm from "../../Media/Images/wing_acm.png";
import wing_dev from "../../Media/Images/wing_dev.png";
import wing_rj from "../../Media/Images/wing_r&j.png";
import wing_jcic from "../../Media/Images/wing_jcic.png";
import { Link } from "react-router-dom";

const Wings = () => {
  return (
    <div className="mt-10">
      <div className="px-3 xl:px-0 xl:w-4/5 2xl:w-4/6 mx-auto grid grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-10">
        <div className="bg-white shadow-sm rounded-md px-3 py-5 xl:p-10 text-center flex flex-col items-center">
          <img
            src={wing_acm}
            alt="ACM Wing"
            className="w-12 xl:w-24 h-10 xl:h-20"
          />
          <div className="mt-5 text-lg xl:text-2xl font-bold text-[#2E2E2E]">
            ACM Task Force
          </div>
          <div className="mt-3 text-xs xl:text-base font-light">
            Where programmers become Gladiators. We organize workshop, classes,
            contests and many more.
          </div>
          <div className="mt-5 h-full flex items-end">
            <Link
              to="/wings#acm"
              className="ring-2 ring-[#015694] hover:ring-sky-500 duration-300 ring-inset px-3 py-2 text-[#464646] text-xs xl:text-base rounded-md"
            >
              Read More...
            </Link>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-md px-3 py-5 xl:p-10 text-center flex flex-col items-center">
          <img
            src={wing_dev}
            alt="ACM Wing"
            className="w-12 xl:w-24 h-10 xl:h-20"
          />
          <div className="mt-5 text-lg xl:text-2xl font-bold text-[#2E2E2E]">
            Development
          </div>
          <div className="mt-3 text-xs xl:text-base font-light">
            The best way to get a project done faster is to start sooner Start
            development today.
          </div>
          <div className="mt-5 h-full flex items-end">
            <Link
              to="/wings#dev"
              className="ring-2 ring-[#015694] hover:ring-sky-500 duration-300 ring-inset px-3 py-2 text-[#464646] text-xs xl:text-base rounded-md"
            >
              Read More...
            </Link>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-md px-3 py-5 xl:p-10 text-center flex flex-col items-center">
          <img
            src={wing_rj}
            alt="ACM Wing"
            className="w-12 xl:w-24 h-10 xl:h-20"
          />
          <div className="mt-5 text-lg xl:text-2xl font-bold text-[#2E2E2E]">
            Research & Journal
          </div>
          <div className="mt-3 text-xs xl:text-base font-light">
            Why do we do basic research? To learn about ourselves. Start
            learning yourself today.
          </div>
          <div className="mt-5 h-full flex items-end">
            <Link
              to="/wings#r&j"
              className="ring-2 ring-[#015694] hover:ring-sky-500 duration-300 ring-inset px-3 py-2 text-[#464646] text-xs xl:text-base rounded-md"
            >
              Read More...
            </Link>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-md px-3 py-5 xl:p-10 text-center flex flex-col items-center">
          <img
            src={wing_jcic}
            alt="ACM Wing"
            className="w-12 xl:w-24 h-10 xl:h-20"
          />
          <div className="mt-5 text-lg xl:text-2xl font-bold text-[#2E2E2E]">
            Job Career (JCIC)
          </div>
          <div className="mt-3 text-xs xl:text-base font-light">
            Worried about your career Lets learn how to build a better and
            skilled career.
          </div>
          <div className="mt-5 h-full flex items-end">
            <Link
              to="/wings#jcic"
              className="ring-2 ring-[#015694] hover:ring-sky-500 duration-300 ring-inset px-3 py-2 text-[#464646] text-xs xl:text-base rounded-md"
            >
              Read More...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wings;
