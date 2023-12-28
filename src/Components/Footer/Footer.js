import React from "react";
import useAuth from "../../Hooks/useAuth";
import logo from "../../Media/Images/CPC-Logo.png";

const Footer = () => {
  const { toggleTheme } = useAuth();
  return (
    <footer className="bg-white dark:bg-slate-800 shadow p-5 xl:p-10 text-slate-600 dark:text-slate-200">
      <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-5 w-full xl:w-11/12 2xl:w-3/4 mx-auto">
        <div className="my-auto">
          <div className="flex flex-col items-center justify-center">
            <div>
              <img src={logo} alt="DIU - CPC" className="w-20 2xl:w-28" />
            </div>
            <p className="text-slate-600 dark:text-slate-200 text-xl font-semibold">
              Computer Programming Club
            </p>
          </div>
          <div className="divider before:bg-slate-200 dark:before:bg-slate-700 after:bg-slate-200 dark:after:bg-slate-700 xl:hidden"></div>
        </div>
        <div className="col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-5">
          <div>
            <h1 className="text-slate-600 dark:text-slate-200 text-2xl font-semibold text-center">
              About DIU CPC
            </h1>
            <p className="text-slate-500 dark:text-slate-200 text-sm text-justify mt-2">
              DIU CPC is the most primitive and extensive club of our
              University. We work together to explore every field of Computer
              Science. Join us to know more.
            </p>
          </div>
          <div>
            <h1 className="text-slate-600 dark:text-slate-200 text-2xl font-semibold text-center">
              Find Us On
            </h1>
            {/* Links */}
            <div className="max-w-max mx-auto mt-2">
              <div className="flex">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/diucpc.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-slate-600 dark:stroke-slate-200 group-hover:stroke-blue-500 dark:group-hover:stroke-blue-400 transition ease-in-out duration-300"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/diu.cpc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-slate-600 dark:stroke-slate-200 group-hover:stroke-violet-500 dark:group-hover:stroke-violet-400 transition ease-in-out duration-300"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                </a>
                {/* Youtube */}
                <a
                  href="https://www.youtube.com/c/diucpc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-slate-600 dark:stroke-slate-200 group-hover:stroke-red-500 dark:group-hover:stroke-red-400 transition ease-in-out duration-300"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="3" y="5" width="18" height="14" rx="4" />
                    <path d="M10 9l5 3l-5 3z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/diu-cpc-daffodil-international-university-computer-programming-club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-slate-600 dark:stroke-slate-200 group-hover:stroke-blue-500 dark:group-hover:stroke-blue-400 transition ease-in-out duration-300"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="8" y1="11" x2="8" y2="16" />
                    <line x1="8" y1="8" x2="8" y2="8.01" />
                    <line x1="12" y1="16" x2="12" y2="11" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider before:bg-slate-200 dark:before:bg-slate-700 after:bg-slate-200 dark:after:bg-slate-700 xl:hidden"></div>
      <p className="text-center text-sm xl:mt-10">
        Copyright © 2023 DIU CPC | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
