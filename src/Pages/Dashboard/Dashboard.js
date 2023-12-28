import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

const Dashboard = () => {
  useDocumentTitle("Admin - Dashboard");
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-200">
      {/* Navbar */}
      <div>
        <div className="hidden xl:block">
          <Navbar></Navbar>
          <div className="h-12 2xl:h-16"></div>
        </div>
        <div className="xl:hidden">
          <NavbarMini></NavbarMini>
        </div>
      </div>

      <div className="min-h-[50vh] md:min-h-[70vh] flex items-center justify-center">
        <div className="grid grid-cols-5 gap-5 md:gap-0 max-h-max max-w-max">
          <div className="md:bg-white md:dark:bg-slate-800 rounded-md md:shadow-sm p-3 col-span-5 md:col-span-1 w-full md:max-w-max mx-auto flex items-center justify-center">
            <p className="hidden md:block text-slate-600 dark:text-slate-200 text-xl font-semibold text-center">
              N<br />A<br />V<br />I<br />G<br />A<br />T<br />I<br />O<br />N
            </p>
            <p className="md:hidden text-slate-600 dark:text-slate-200 text-xl font-semibold text-center">
              DASHBOARD
            </p>
          </div>
          <div className="col-span-5 md:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
            {/* New Event */}
            <Link
              to="/admin/new-event"
              className="bg-white dark:bg-slate-800 rounded-md shadow-sm hover:shadow-md p-3 transition ease-in-out duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-slate-600 dark:stroke-slate-200 hidden xl:block mr-3"
                width="32"
                height="32"
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
              <p className="text-slate-600 dark:text-slate-200 text-base xl:text-xl font-semibold">
                New Event
              </p>
            </Link>
            {/* Events List */}
            <Link
              to="/forum/events"
              className="bg-white dark:bg-slate-800 rounded-md shadow-sm hover:shadow-md p-3 transition ease-in-out duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-slate-600 dark:stroke-slate-200 hidden xl:block mr-3"
                width="32"
                height="32"
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
              <p className="text-slate-600 dark:text-slate-200 text-base xl:text-xl font-semibold">
                Events List
              </p>
            </Link>
            {/* Manage Admin */}
            <Link
              to="/admin/manage-admin"
              className="bg-white dark:bg-slate-800 rounded-md shadow-sm hover:shadow-md p-3 transition ease-in-out duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-slate-600 dark:stroke-slate-200 hidden xl:block mr-3"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 12l2 2l4 -4" />
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
              </svg>
              <p className="text-slate-600 dark:text-slate-200 text-base xl:text-xl font-semibold">
                Manage Admin
              </p>
            </Link>
            {/* New Certificate */}
            <Link
              to="/admin/new-certificate"
              className="bg-white dark:bg-slate-800 rounded-md shadow-sm hover:shadow-md p-3 transition ease-in-out duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-slate-600 dark:stroke-slate-200 hidden xl:block mr-3"
                width="32"
                height="32"
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
              <p className="text-slate-600 dark:text-slate-200 text-base xl:text-xl font-semibold">
                New Certificate
              </p>
            </Link>
            {/* Certificates */}
            <Link
              to="/admin/certificates"
              className="bg-white dark:bg-slate-800 rounded-md shadow-sm hover:shadow-md p-3 transition ease-in-out duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-slate-600 dark:stroke-slate-200 hidden xl:block mr-3"
                width="32"
                height="32"
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
              <p className="text-slate-600 dark:text-slate-200 text-base xl:text-xl font-semibold">
                Certificates
              </p>
            </Link>
            {/* Users List */}
            <Link
              to="/admin/all-users"
              className="bg-white dark:bg-slate-800 rounded-md shadow-sm hover:shadow-md p-3 transition ease-in-out duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-slate-600 dark:stroke-slate-200 hidden xl:block mr-3"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
              <p className="text-slate-600 dark:text-slate-200 text-base xl:text-xl font-semibold">
                Users List
              </p>
            </Link>
            {/* Teachers List */}
            <Link
              to="/admin/organize-teachers"
              className="bg-white dark:bg-slate-800 rounded-md shadow-sm hover:shadow-md p-3 transition ease-in-out duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-slate-600 dark:stroke-slate-200 hidden xl:block mr-3"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 5h8" />
                <path d="M13 9h5" />
                <path d="M13 15h8" />
                <path d="M13 19h5" />
                <rect x="3" y="4" width="6" height="6" rx="1" />
                <rect x="3" y="14" width="6" height="6" rx="1" />
              </svg>
              <p className="text-slate-600 dark:text-slate-200 text-base xl:text-xl font-semibold">
                Organize Teachers
              </p>
            </Link>
            {/* Team Members */}
            <Link
              to="/admin/organize-team"
              className="bg-white dark:bg-slate-800 rounded-md shadow-sm hover:shadow-md p-3 transition ease-in-out duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-slate-600 dark:stroke-slate-200 hidden xl:block mr-3"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 5h8" />
                <path d="M13 9h5" />
                <path d="M13 15h8" />
                <path d="M13 19h5" />
                <rect x="3" y="4" width="6" height="6" rx="1" />
                <rect x="3" y="14" width="6" height="6" rx="1" />
              </svg>
              <p className="text-slate-600 dark:text-slate-200 text-base xl:text-xl font-semibold">
                Organize Team
              </p>
            </Link>
            {/* Create User */}
            <Link
              to="/admin/create-user"
              className="bg-white dark:bg-slate-800 rounded-md shadow-sm hover:shadow-md p-3 transition ease-in-out duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-slate-600 dark:stroke-slate-200 hidden xl:block mr-3"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 11h6m-3 -3v6" />
              </svg>
              <p className="text-slate-600 dark:text-slate-200 text-base xl:text-xl font-semibold">
                Create User
              </p>
            </Link>
            {/* Threads List */}
            <Link
              to="/admin/forum-threads"
              className="bg-white dark:bg-slate-800 rounded-md shadow-sm hover:shadow-md p-3 transition ease-in-out duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-slate-600 dark:stroke-slate-200 hidden xl:block mr-3"
                width="32"
                height="32"
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
              <p className="text-slate-600 dark:text-slate-200 text-base xl:text-xl font-semibold">
                Threads List
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Dashboard;
