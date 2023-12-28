import { Link } from "react-router-dom";
import logo from "../../Media/Images/CPC-Logo.png";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  //user backed thake asbe
  const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
  const { navAutoHide, scrollToTopVisibility, logOut, user, userFlags } =
    useAuth();

  return (
    <>
      <div
        className={
          navAutoHide === "hide"
            ? "fixed bg-white dark:bg-slate-800 shadow-sm px-5 py-2 transition-[top] duration-300 w-full -top-20 z-50"
            : "fixed bg-white dark:bg-slate-800 shadow-sm px-5 py-2 transition-[top] duration-300 w-full top-0 z-50"
        }
      >
        <div className="grid grid-cols-5 w-11/12 2xl:w-3/4 mx-auto">
          {/* CPC Logo */}
          <Link to="/" className="flex items-center justify-center">
            <img src={logo} alt="DIU - CPC" className="w-14 2xl:w-20" />
          </Link>
          {/* Navigation Links */}
          <div className="col-span-3 flex items-center justify-center font-semibold text-slate-700 dark:text-slate-300">
            <Link
              to="/"
              className="mx-4 text-slate-600 hover:text-orange-500 transition ease-in-out duration-500"
            >
              Home
            </Link>
            <Link
              to="/"
              className="mx-4 text-slate-600 hover:text-orange-500 transition ease-in-out duration-500"
            >
              Wings
            </Link>
            <Link
              to="/"
              className="mx-4 text-slate-600 hover:text-orange-500 transition ease-in-out duration-500"
            >
              Team
            </Link>
            <Link
              to="/"
              className="mx-4 text-slate-600 hover:text-orange-500 transition ease-in-out duration-500"
            >
              Blog
            </Link>
            <Link
              to="/forum/events"
              className="mx-4 text-slate-600 hover:text-orange-500 transition ease-in-out duration-500"
            >
              Events
            </Link>
            {/* <Link
              to="/forum"
              className="mx-4 text-slate-600 hover:text-orange-500 transition ease-in-out duration-500"
            >
              Forum
            </Link> */}
            <Link
              to="/certificate"
              className="mx-4 text-slate-600 hover:text-orange-500 transition ease-in-out duration-500"
            >
              {width > 1400 ? "Verify " : ""}Certificate
            </Link>
            <Link
              to="/search"
              className="mx-4 text-slate-600 hover:text-orange-500 transition ease-in-out duration-500"
            >
              Search
            </Link>
            {user?.uid ? (
              ""
            ) : (
              <>
                <Link
                  to="/settings"
                  className="mx-4 text-slate-600 hover:text-orange-500 transition ease-in-out duration-500"
                >
                  Settings
                </Link>
                <Link
                  to="/login"
                  className="mx-4 text-slate-600 hover:text-orange-500 transition ease-in-out duration-500"
                >
                  Login
                </Link>
              </>
            )}
          </div>

          {user?.uid ? (
            <div className="flex justify-center relative">
              <div className="flex items-center justify-center w-max group">
                <div className="relative">
                  {/* Profile Image */}
                  {user?.user_img === "" || user?.user_img === "default" ? (
                    <div className="avatar placeholder w-8 h-8 2xl:w-12 2xl:h-12">
                      <div className="bg-slate-600 text-neutral-content mask mask-circle">
                        <span className="text-xl">
                          {user?.display_name
                            ? user?.display_name[0]
                            : user?.name[0]}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-slate-200 rounded-full w-8 2xl:w-12">
                      <img
                        src={
                          user?.user_img
                            ? `https://static.cpc.daffodilvarsity.edu.bd/${user?.user_img}`
                            : ""
                        }
                        alt={user?.name}
                        className="w-8 2xl:w-12 rounded-full"
                      />
                    </div>
                  )}
                  {/* Notification Pulse -- [animate-ping] */}
                  <div
                    className={
                      userFlags?.notifications === "true"
                        ? "rounded-full w-8 h-8 2xl:w-12 2xl:h-12 -z-10 absolute top-0 border-4 border-slate-200 dark:border-slate-400 bg-orange-500 dark:bg-orange-300 animate-ping"
                        : "rounded-full w-8 h-8 2xl:w-12 2xl:h-12 -z-10 absolute top-0 border-4 border-slate-200 dark:border-slate-400 bg-orange-500 dark:bg-orange-300"
                    }
                  ></div>
                </div>

                {/* Down Arrow */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-down stroke-slate-300 group-hover:stroke-slate-400 dark:stroke-slate-600 dark:group-hover:stroke-slate-500 ml-1"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>

                {/* Dropdown Menu */}
                <div className="absolute top-7 2xl:top-11 -right-4 md:right-7 2xl:right-14 z-50 scale-0 group-hover:scale-100 origin-top transition p-2">
                  <div className="bg-slate-100 dark:bg-slate-700 font-semibold text-slate-700 dark:text-slate-300 w-36 2xl:w-40 text-sm py-2 rounded-md shadow-md">
                    {/* Dashboard */}
                    {user?.role === "dev" ||
                    user?.role === "developer" ||
                    user?.role === "mod" ||
                    user?.role === "moderator" ||
                    user?.role === "admin" ? (
                      <Link
                        to="/admin/dashboard"
                        className="w-full grid grid-cols-4 py-1 px-2 hover:bg-slate-200 dark:hover:bg-slate-600 transition duration-300"
                      >
                        <div className="flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-3d-cube-sphere stroke-slate-500 dark:stroke-slate-300"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
                        <div className="col-span-3 flex items-center text-slate-600 dark:text-slate-200">
                          Dashboard
                        </div>
                      </Link>
                    ) : (
                      ""
                    )}
                    {/* Profile */}
                    <Link
                      to={`/user/${user.uid}`}
                      className="w-full grid grid-cols-4 py-1 px-2 hover:bg-slate-200 dark:hover:bg-slate-600 transition duration-300"
                    >
                      <div className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user stroke-slate-500 dark:stroke-slate-300"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="#2c3e50"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="7" r="4" />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                      </div>
                      <div className="col-span-3 flex items-center text-slate-600 dark:text-slate-200">
                        Profile
                      </div>
                    </Link>
                    {/* Notifications */}
                    <Link
                      to="/notifications"
                      className="w-full grid grid-cols-4 py-1 px-2 hover:bg-slate-200 dark:hover:bg-slate-600 transition duration-300"
                    >
                      <div className="flex items-center justify-center relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-bell stroke-slate-500 dark:stroke-slate-300"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                          <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </svg>
                        {/* Notification Pulse */}
                        {userFlags?.notifications === "true" ? (
                          <span className="animate-ping absolute top-1 right-3 block h-1 w-1 rounded-full ring-2 ring-orange-400 bg-orange-600 dark:ring-orange-200 dark:bg-orange-400"></span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-span-3 flex items-center text-slate-600 dark:text-slate-200">
                        Notifications
                      </div>
                    </Link>
                    {/* Settings */}
                    <Link
                      to="/settings"
                      className="w-full grid grid-cols-4 py-1 px-2 hover:bg-slate-200 dark:hover:bg-slate-600 transition duration-300"
                    >
                      <div className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-settings stroke-slate-500 dark:stroke-slate-300"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </div>
                      <div className="col-span-3 flex items-center text-slate-600 dark:text-slate-200">
                        Settings
                      </div>
                    </Link>
                    {/* Log Out */}
                    <button
                      onClick={() => {
                        logOut();
                      }}
                      className="w-full grid grid-cols-4 py-1 px-2 hover:bg-slate-200 dark:hover:bg-slate-600 transition duration-300 items-center justify-center"
                    >
                      <div className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-logout stroke-slate-500 dark:stroke-slate-300"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="#2c3e50"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                          <path d="M7 12h14l-3 -3m0 6l3 -3" />
                        </svg>
                      </div>
                      <div className="col-span-3 flex items-center text-slate-600 dark:text-slate-200">
                        Log Out
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div>Follow Us On</div>
              <div className="max-w-max">
                <div className="flex">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/diucpc.official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-slate-600 dark:stroke-slate-200 group-hover:stroke-blue-500 dark:group-hover:stroke-blue-400 transition ease-in-out duration-300"
                      width="20"
                      height="20"
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
                    className="group p-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-slate-600 dark:stroke-slate-200 group-hover:stroke-violet-500 dark:group-hover:stroke-violet-400 transition ease-in-out duration-300"
                      width="20"
                      height="20"
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
                    className="group p-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-slate-600 dark:stroke-slate-200 group-hover:stroke-red-500 dark:group-hover:stroke-red-400 transition ease-in-out duration-300"
                      width="20"
                      height="20"
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
                    className="group p-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-slate-600 dark:stroke-slate-200 group-hover:stroke-blue-500 dark:group-hover:stroke-blue-400 transition ease-in-out duration-300"
                      width="20"
                      height="20"
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
          )}
        </div>
      </div>

      {/* Scroll To Top Button */}
      <button
        className={
          scrollToTopVisibility === "visible"
            ? "block z-20 fixed bottom-10 right-10 bg-white dark:bg-slate-800 shadow shadow-orange-200 dark:shadow-orange-900 dark:border border-orange-500 px-1 rounded-lg"
            : "hidden z-20 fixed bottom-10 right-10 bg-white dark:bg-slate-800 shadow shadow-orange-200 dark:shadow-orange-900 dark:border border-orange-500 px-1 rounded-lg"
        }
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
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
          <polyline points="6 15 12 9 18 15" />
        </svg>
      </button>
    </>
  );
};

export default Navbar;
