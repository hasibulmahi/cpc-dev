import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Media/Images/CPC-Logo.png";
import Badge from "../Badge/BadgeMini";
import useAuth from "../../Hooks/useAuth";

const NavbarMini = () => {
  const [blurred, setBlurred] = useState(false);
  const { scrollToTopVisibility, logOut, user, displayNameArray } = useAuth();
  return (
    <div className="">
      <div className="bg-white dark:bg-slate-800 shadow-sm p-3">
        {/* CPC Logo */}
        <Link to="/" className="flex items-center justify-center">
          <img src={logo} alt="DIU - CPC" className="w-20 2xl:w-24" />
        </Link>
      </div>

      <div>
        {/* Scroll To Top Button */}
        <button
          className={
            scrollToTopVisibility === "visible"
              ? "block z-20 fixed bottom-20 right-5 bg-white dark:bg-slate-800 shadow shadow-orange-200 dark:shadow-orange-900 dark:border border-orange-500 px-1 rounded-lg"
              : "hidden z-20 fixed bottom-20 right-5 bg-white dark:bg-slate-800 shadow shadow-orange-200 dark:shadow-orange-900 dark:border border-orange-500 px-1 rounded-lg"
          }
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2 stroke-orange-700 dark:stroke-orange-600"
            width="44"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="6 15 12 9 18 15" />
          </svg>
        </button>

        {/* Menu Button */}
        <button
          className="z-20 fixed bottom-5 right-5 bg-white dark:bg-slate-800 shadow shadow-orange-200 dark:shadow-orange-900 dark:border border-orange-500 p-1 rounded-lg"
          onClick={() => {
            setBlurred(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2 stroke-orange-700 dark:stroke-orange-600"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>

        {/* Backdrop/Blurred BG */}
        <div
          onClick={() => {
            setBlurred(false);
          }}
          className={
            blurred
              ? "fixed backdrop-blur bottom-0 right-0 z-20 h-screen w-screen duration-200 transition opacity-100"
              : "fixed backdrop-blur bottom-0 right-0 z-20 h-screen w-screen duration-200 transition opacity-0 pointer-events-none"
          }
        ></div>
        <div
          className={
            blurred
              ? "fixed bottom-0 right-0 z-20 scale-100 transition origin-bottom-right"
              : "fixed bottom-0 right-0 z-20 scale-0 transition origin-bottom-right"
          }
        >
          {/* Menubar */}
          <div className="fixed bottom-5 right-5 z-20 w-56">
            {user?.uid ? (
              <>
                {/* Upper Section */}
                <div className="mb-3">
                  <div className="grid grid-cols-4 px-2">
                    {/* User Info */}
                    <Link
                      to={`/user/${user?.uid}`}
                      className="w-12 h-12 shadow-lg shadow-orange-200 dark:shadow-orange-900 rounded-full"
                    >
                      {user?.user_img === "" || user?.user_img === "default" ? (
                        <div className="avatar placeholder w-12 h-12 rounded-full">
                          <div className="bg-slate-600 text-neutral-content mask mask-circle">
                            <span className="text-xl">
                              {user?.display_name
                                ? user?.display_name[0]
                                : user?.name[0]}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white dark:bg-slate-800 rounded-full">
                          <img
                            src={`https://static.cpc.daffodilvarsity.edu.bd/${user?.user_img}`}
                            alt={user?.name}
                            className="w-12 rounded-full"
                          />
                        </div>
                      )}
                    </Link>
                    <div
                      className={
                        user?.role === "user"
                          ? "h-12 col-span-2 grid grid-rows-2"
                          : "h-12 col-span-2 grid grid-rows-3"
                      }
                    >
                      <div className="text-sm row-span-2 font-semibold text-slate-700 dark:text-slate-300 bg-white bg-opacity-75 dark:bg-slate-700 shadow shadow-orange-200 dark:shadow-none px-2 py-1 w-max rounded-full flex items-center mb-1">
                        {user?.display_name
                          ? user?.display_name
                          : displayNameArray[0]}
                      </div>
                      {user?.role === "user" ? (
                        ""
                      ) : (
                        <Badge role={user?.role}></Badge>
                      )}
                    </div>
                    {user?.role?.toLowerCase() === "admin" ||
                    user?.role?.toLowerCase() === "mod" ||
                    user?.role?.toLowerCase() === "moderator" ||
                    user?.role?.toLowerCase() === "dev" ||
                    user?.role?.toLowerCase() === "developer" ? (
                      <>
                        {/* Dashboard Icon */}
                        <Link
                          to="/admin/dashboard"
                          className="flex items-center justify-center"
                        >
                          <div className="w-10 h-10 bg-orange-100 dark:bg-slate-800 shadow shadow-orange-200 dark:shadow-orange-900 dark:border border-orange-500 rounded-full flex items-center justify-center group">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M6 17.6l-2 -1.1v-2.5" />
                              <path d="M4 10v-2.5l2 -1.1" />
                              <path d="M10 4.1l2 -1.1l2 1.1" />
                              <path d="M18 6.4l2 1.1v2.5" />
                              <path d="M20 14v2.5l-2 1.12" />
                              <path d="M14 19.9l-2 1.1l-2 -1.1" />
                              <line x1="12" y1="12" x2="14" y2="10.9" />
                              <line x1="18" y1="8.6" x2="20" y2="7.5" />
                              <line x1="12" y1="12" x2="12" y2="14.5" />
                              <line x1="12" y1="18.5" x2="12" y2="21" />
                              <path d="M12 12l-2 -1.12" />
                              <line x1="6" y1="8.6" x2="4" y2="7.5" />
                            </svg>
                          </div>
                        </Link>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </>
            ) : (
              ""
            )}

            <div className="bg-white dark:bg-slate-800 shadow shadow-orange-200 dark:shadow-orange-900 dark:border border-orange-500 rounded-lg grid grid-cols-3 gap-2 gap-y-5 py-4">
              {/* Home */}
              <Link
                to="/"
                className="flex items-center justify-center flex-col group"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                  </svg>
                </div>
                <div className="font-semibold text-[10px] text-slate-700 dark:text-slate-300 mt-1">
                  Home
                </div>
              </Link>
              {/* Forum */}
              <Link
                to="/forum"
                className="flex items-center justify-center flex-col group"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                    <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                  </svg>
                </div>
                <div className="font-semibold text-[10px] text-slate-700 dark:text-slate-300 mt-1">
                  Forum
                </div>
              </Link>
              {user?.uid ? (
                <>
                  {/* Notifications */}
                  <Link
                    to="/notifications"
                    className="flex items-center justify-center flex-col group"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                      </svg>
                    </div>
                    <div className="font-semibold text-[10px] text-slate-700 dark:text-slate-300 mt-1">
                      Notifications
                    </div>
                  </Link>
                </>
              ) : (
                ""
              )}
              {/* Events */}
              <Link
                to="/forum/events"
                className="flex items-center justify-center flex-col group"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="5" width="16" height="16" rx="2" />
                    <line x1="16" y1="3" x2="16" y2="7" />
                    <line x1="8" y1="3" x2="8" y2="7" />
                    <line x1="4" y1="11" x2="20" y2="11" />
                    <rect x="8" y="15" width="2" height="2" />
                  </svg>
                </div>
                <div className="font-semibold text-[10px] text-slate-700 dark:text-slate-300 mt-1">
                  Events
                </div>
              </Link>
              {/* Certificate Verify */}
              <Link
                to="/certificate"
                className="flex items-center justify-center flex-col group"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="15" cy="15" r="3" />
                    <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                    <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                    <line x1="6" y1="9" x2="18" y2="9" />
                    <line x1="6" y1="12" x2="9" y2="12" />
                    <line x1="6" y1="15" x2="8" y2="15" />
                  </svg>
                </div>
                <div className="font-semibold text-[10px] text-slate-700 dark:text-slate-300 mt-1">
                  C. Verify
                </div>
              </Link>
              {/* Search */}
              <Link
                to="/search"
                className="flex items-center justify-center flex-col group"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                  </svg>
                </div>
                <div className="font-semibold text-[10px] text-slate-700 dark:text-slate-300 mt-1">
                  Search
                </div>
              </Link>
              {/* Settings */}
              <Link
                to="/settings"
                className="flex items-center justify-center flex-col group"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div className="font-semibold text-[10px] text-slate-700 dark:text-slate-300 mt-1">
                  Settings
                </div>
              </Link>
              {user?.uid ? (
                <>
                  {/* Log Out */}
                  <button
                    onClick={() => {
                      logOut();
                    }}
                    className="flex items-center justify-center flex-col group"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M7 12h14l-3 -3m0 6l3 -3" />
                      </svg>
                    </div>
                    <div className="font-semibold text-[10px] text-slate-700 dark:text-slate-300 mt-1">
                      Log Out
                    </div>
                  </button>
                </>
              ) : (
                <>
                  <div className="invisible">
                    <svg width="24" height="24"></svg>
                  </div>
                  {/* Log In */}
                  <Link
                    to="/login"
                    className="flex items-center justify-center flex-col group"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                      </svg>
                    </div>
                    <div className="font-semibold text-[10px] text-slate-700 dark:text-slate-300 mt-1">
                      Log In
                    </div>
                  </Link>
                </>
              )}
              {/* Menu Close */}
              <button
                onClick={() => {
                  setBlurred(false);
                }}
                className="flex items-center justify-center flex-col group"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div className="font-semibold text-[10px] text-slate-700 dark:text-slate-300 mt-1">
                  Close
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMini;
