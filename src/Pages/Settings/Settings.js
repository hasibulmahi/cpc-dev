import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import AccountSettings from "./AccountSettings";
import GeneralSettings from "./GeneralSettings";

const firstLetterCapital = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Settings = () => {
  let settingsPage = useParams();
  const [settingsNav, setSettingsNav] = useState(
    settingsPage?.page ? settingsPage?.page : "general"
  );
  useDocumentTitle(`Settings - ${firstLetterCapital(settingsNav)}`);
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-200 min-h-screen">
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

      <div className="mt-5 md:mt-16 min-h-[50vh] md:min-h-[70vh]">
        <div className="w-11/12 xl:w-2/3 rounded-md mx-auto grid grid-cols-1 xl:grid-cols-6 xl:gap-5">
          {/* Settings Nav Phone */}
          <div className="xl:hidden">
            <div className="collapse">
              <input type="checkbox" id="settingsCollaspe" />
              <div className="collapse-title py-3 px-0 flex items-center">
                <div className="text-xl font-semibold text-slate-600 dark:text-slate-300">
                  Settings
                  {settingsNav?.toLowerCase() !== "general"
                    ? " - " + firstLetterCapital(settingsNav)
                    : ""}
                </div>
                <div className="ml-3 -mb-1 custom-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-slate-500 dark:stroke-slate-200"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
              <div className="collapse-content">
                <div className="bg-white dark:bg-slate-800 rounded-md">
                  <button
                    className="p-2 w-full text-start first:rounded-t-md last:rounded-b-md text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-semibold"
                    onClick={() => {
                      setSettingsNav("general");
                      document.getElementById(
                        "settingsCollaspe"
                      ).checked = false;
                    }}
                  >
                    ● General
                  </button>
                  <button
                    className="p-2 w-full text-start first:rounded-t-md last:rounded-b-md text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-semibold"
                    onClick={() => {
                      setSettingsNav("account");
                      document.getElementById(
                        "settingsCollaspe"
                      ).checked = false;
                    }}
                  >
                    ● Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Settings Nav PC */}
          <div className="hidden xl:block">
            <div>
              <button
                className="p-2 w-full text-start font-semibold text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-500 transition duration-500"
                onClick={() => {
                  setSettingsNav("general");
                  document.getElementById("settingsCollaspe").checked = false;
                }}
              >
                ● General
              </button>
              <button
                className="p-2 w-full text-start font-semibold text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-500 transition duration-500"
                onClick={() => {
                  setSettingsNav("account");
                  document.getElementById("settingsCollaspe").checked = false;
                }}
              >
                ● Account
              </button>
            </div>
          </div>
          <div className="col-span-5 bg-white dark:bg-slate-800 rounded-md shadow-sm p-5">
            {settingsNav?.toLowerCase() === "" ||
            settingsNav?.toLowerCase() === "general" ? (
              <GeneralSettings></GeneralSettings>
            ) : settingsNav?.toLowerCase() === "account" ? (
              <AccountSettings></AccountSettings>
            ) : (
              <div>
                Settings page not found <br />
                Please check if the link is correct.
              </div>
            )}
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

export default Settings;
