import { message } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const AccountSettings = () => {
  const { user } = useAuth();
  return (
    <>
      {user?.uid ? (
        <div>
          <div>
            {/* Name */}
            <div className="text-xl text-slate-700 dark:text-slate-300 font-semibold pl-0.5">
              Name
            </div>
            <div className="text-base mb-3 text-slate-700 dark:text-slate-300 font-medium flex items-center mt-2">
              <input
                type="text"
                id="settings-name"
                className="bg-slate-100 dark:bg-slate-700 outline outline-2 outline-transparent focus:outline-blue-400 p-2 w-full rounded-md duration-300"
                defaultValue={user?.name}
                onChange={(e) => {
                  e?.target.value !== user?.name
                    ? document
                        .getElementById("name-btn")
                        .classList.remove("hidden")
                    : document
                        .getElementById("name-btn")
                        .classList.add("hidden");
                }}
              />
              <button
                id="name-btn"
                className="bg-teal-100 dark:bg-teal-800 hover:bg-teal-200 dark:hover:bg-teal-400 transition ease-in-out duration-300 p-1 rounded-full ml-2 hidden"
                onClick={() => {
                  console.log("save");
                  message.info("Account edit coming soon");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-eraser stroke-teal-600 dark:stroke-teal-800 p-1 bg-teal-300 dark:bg-teal-500 rounded-full"
                  width="31"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            {/* ID */}
            <div className="text-xl text-slate-700 dark:text-slate-300 font-semibold pl-0.5 mt-5">
              ID
            </div>
            <div className="text-base mb-3 text-slate-700 dark:text-slate-300 font-medium flex items-center mt-2">
              <input
                type="text"
                id="settings-id"
                className="bg-slate-100 dark:bg-slate-700 outline outline-2 outline-transparent focus:outline-blue-400 p-2 w-full rounded-md duration-300"
                defaultValue={user?.stu_id}
                onChange={(e) => {
                  e?.target.value !== user?.stu_id
                    ? document
                        .getElementById("id-btn")
                        .classList.remove("hidden")
                    : document.getElementById("id-btn").classList.add("hidden");
                }}
              />
              <button
                id="id-btn"
                className="bg-teal-100 dark:bg-teal-800 hover:bg-teal-200 dark:hover:bg-teal-400 transition ease-in-out duration-300 p-1 rounded-full ml-2 hidden"
                onClick={() => {
                  console.log("save");
                  message.info("Account edit coming soon");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-eraser stroke-teal-600 dark:stroke-teal-800 p-1 bg-teal-300 dark:bg-teal-500 rounded-full"
                  width="31"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            {/* Email */}
            <div className="text-xl text-slate-700 dark:text-slate-300 font-semibold pl-0.5 mt-5">
              Email
            </div>
            <div className="text-base mb-3 text-slate-700 dark:text-slate-300 font-medium flex items-center mt-2">
              <input
                type="text"
                id="settings-email"
                className="bg-slate-100 dark:bg-slate-700 outline outline-2 outline-transparent focus:outline-blue-400 p-2 w-full rounded-md duration-300"
                defaultValue={user?.email}
                onChange={(e) => {
                  e?.target.value !== user?.email
                    ? document
                        .getElementById("email-btn")
                        .classList.remove("hidden")
                    : document
                        .getElementById("email-btn")
                        .classList.add("hidden");
                }}
              />
              <button
                id="email-btn"
                className="bg-teal-100 dark:bg-teal-800 hover:bg-teal-200 dark:hover:bg-teal-400 transition ease-in-out duration-300 p-1 rounded-full ml-2 hidden"
                onClick={() => {
                  console.log("save");
                  message.info("Account edit coming soon");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-eraser stroke-teal-600 dark:stroke-teal-800 p-1 bg-teal-300 dark:bg-teal-500 rounded-full"
                  width="31"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            {/* Phone */}
            <div className="text-xl text-slate-700 dark:text-slate-300 font-semibold pl-0.5 mt-5">
              Phone
            </div>
            <div className="text-base mb-3 text-slate-700 dark:text-slate-300 font-medium flex items-center mt-2">
              <input
                type="text"
                id="settings-phone"
                className="bg-slate-100 dark:bg-slate-700 outline outline-2 outline-transparent focus:outline-blue-400 p-2 w-full rounded-md duration-300"
                defaultValue={user?.phone}
                onChange={(e) => {
                  e?.target.value !== user?.phone
                    ? document
                        .getElementById("phone-btn")
                        .classList.remove("hidden")
                    : document
                        .getElementById("phone-btn")
                        .classList.add("hidden");
                }}
              />
              <button
                id="phone-btn"
                className="bg-teal-100 dark:bg-teal-800 hover:bg-teal-200 dark:hover:bg-teal-400 transition ease-in-out duration-300 p-1 rounded-full ml-2 hidden"
                onClick={() => {
                  console.log("save");
                  message.info("Account edit coming soon");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-eraser stroke-teal-600 dark:stroke-teal-800 p-1 bg-teal-300 dark:bg-teal-500 rounded-full"
                  width="31"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            {/* Password */}
            <div>
              <div className="text-xl text-slate-700 dark:text-slate-300 font-semibold pl-0.5 mt-5">
                Change Password
              </div>
              <div className="text-base mb-3 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-md font-medium flex items-center mt-2">
                <input
                  type="password"
                  id="settings-pass"
                  className="bg-slate-100 dark:bg-slate-700 outline-none ring-2 ring-inset ring-transparent focus:ring-blue-400 p-2 w-full rounded-l-md rounded-r-md last:rounded-r-md duration-300"
                  onChange={(e) => {
                    if (e?.target.value !== "") {
                      document
                        .getElementById("passView-btn")
                        .classList.remove("hidden");
                      document
                        .getElementById("settings-pass")
                        .classList.remove("rounded-r-md");
                    } else {
                      document
                        .getElementById("passView-btn")
                        .classList.add("hidden");
                      document
                        .getElementById("settings-pass")
                        .classList.add("rounded-r-md");
                    }
                  }}
                />
                <button
                  id="passView-btn"
                  className="mx-1 hidden group"
                  onClick={() => {
                    document.getElementById("settings-pass").type === "password"
                      ? (document.getElementById("settings-pass").type = "text")
                      : (document.getElementById("settings-pass").type =
                          "password");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-slate-400 group-hover:stroke-slate-500 dark:stroke-slate-400 dark:group-hover:stroke-slate-300 p-1 rounded-full"
                    width="31"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                  </svg>
                </button>
              </div>

              <div className="text-xs text-slate-700 dark:text-slate-300 font-semibold pl-0.5">
                Retype Password
              </div>
              <div className="text-base mb-3 flex items-center mt-2">
                <div className="text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-md font-medium w-full flex items-center">
                  <input
                    type="password"
                    id="settings-re-pass"
                    className="bg-slate-100 dark:bg-slate-700 outline-none ring-2 ring-inset ring-transparent focus:ring-blue-400 p-2 w-full rounded-l-md rounded-r-md last:rounded-r-md duration-300"
                    onChange={(e) => {
                      if (e?.target.value !== "") {
                        document
                          .getElementById("rePassView-btn")
                          .classList.remove("hidden");
                        document
                          .getElementById("settings-re-pass")
                          .classList.remove("rounded-r-md");
                        if (
                          document.getElementById("settings-pass").value ===
                          document.getElementById("settings-re-pass").value
                        ) {
                          document
                            .getElementById("pass-save-btn")
                            .classList.remove("hidden");
                          document
                            .getElementById("pass-save-btn-err")
                            .classList.add("hidden");
                        } else {
                          document
                            .getElementById("pass-save-btn")
                            .classList.add("hidden");
                          document
                            .getElementById("pass-save-btn-err")
                            .classList.remove("hidden");
                        }
                      } else {
                        document
                          .getElementById("rePassView-btn")
                          .classList.add("hidden");
                        document
                          .getElementById("pass-save-btn")
                          .classList.add("hidden");
                        document
                          .getElementById("pass-save-btn-err")
                          .classList.add("hidden");
                        document
                          .getElementById("settings-re-pass")
                          .classList.add("rounded-r-md");
                      }
                    }}
                  />
                  <button
                    id="rePassView-btn"
                    className="mx-1 hidden group"
                    onClick={() => {
                      document.getElementById("settings-re-pass").type ===
                      "password"
                        ? (document.getElementById("settings-re-pass").type =
                            "text")
                        : (document.getElementById("settings-re-pass").type =
                            "password");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-slate-400 group-hover:stroke-slate-500 dark:stroke-slate-400 dark:group-hover:stroke-slate-300 p-1 rounded-full"
                      width="31"
                      height="32"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="12" r="2" />
                      <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                    </svg>
                  </button>
                </div>
                {/* Save Pass */}
                <button
                  id="pass-save-btn"
                  className="bg-teal-100 dark:bg-teal-800 hover:bg-teal-200 dark:hover:bg-teal-400 transition ease-in-out duration-300 p-1 rounded-full ml-2 hidden"
                  onClick={() => {
                    console.log("save");
                    message.info("Account edit coming soon");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-eraser stroke-teal-600 dark:stroke-teal-800 p-1 bg-teal-300 dark:bg-teal-500 rounded-full"
                    width="31"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </button>
                <button
                  id="pass-save-btn-err"
                  className="bg-red-100 dark:bg-red-800 hover:bg-red-200 dark:hover:bg-red-400 transition ease-in-out duration-300 p-1 rounded-full ml-2 hidden"
                  onClick={() => {
                    message.error("Passwords didn't match");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-eraser stroke-red-700 dark:stroke-red-800 p-1 bg-red-300 dark:bg-red-500 rounded-full"
                    width="31"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 9v2m0 4v.01" />
                    <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-slate-600 dark:text-slate-200 text-lg font-semibold">
          Please Login Or Register{" "}
          <Link to="/login" className="text-orange-600 hover:text-orange-400">
            Here.
          </Link>
        </div>
      )}
    </>
  );
};

export default AccountSettings;
