import React from "react";
import "./Home.css";
import homeBanner0 from "./../../Media/Images/CoverItem 0.jpg";
import homeBanner1 from "./../../Media/Images/CoverItem 1.jpg";
import homeBanner2 from "./../../Media/Images/CoverItem 2.jpg";
import homeBanner3 from "./../../Media/Images/CoverItem 3.jpg";
import homeBanner4 from "./../../Media/Images/CoverItem 4.jpg";
import homeBanner5 from "./../../Media/Images/CoverItem 5.jpg";
import homeBanner6 from "./../../Media/Images/CoverItem 6.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import EventsCarousel from "../../Components/EventsCarousel/EventsCarousel";
import Wings from "../../Components/Wings/Wings";
import Advisors from "../../Components/Advisors/Advisors";
import Team from "../../Components/Team/Team";
import Footer from "../../Components/Footer/Footer";
import useAuth from "../../Hooks/useAuth";
import { useEffect } from "react";
import { useState } from "react";
import FirstLoadModalData from "./FirstLoadModalData";
import NewAdminModalData from "./NewAdminModalData";
import http from "../../BaseUrl/http";
import Sponsors from "./Sponsors";

const Home = () => {
  const bgImages = [
    homeBanner0,
    homeBanner1,
    homeBanner2,
    homeBanner3,
    homeBanner4,
    homeBanner5,
    homeBanner6,
  ];
  const [backgroundImage, setBackgroundImage] = useState(bgImages[0]);
  const [firstLoad, setFirstLoad] = useState(false);
  useEffect(() => {
    if (
      !localStorage.getItem("first-load") ||
      JSON.parse(localStorage.getItem("first-load")) === true
    ) {
      localStorage.setItem("first-load", "true");
      setFirstLoad(true);
    } else {
      setFirstLoad(false);
    }
  }, []);
  useDocumentTitle("Computer Programming Club - DIU");
  const { advisors, team, events, userFlags, user, pageLoading } = useAuth();
  const today = new Date().getTime();
  const unExpiredEvents = events.filter(
    (x) =>
      new Date(
        x?.end_date.includes(" ") ||
        x?.end_date.includes(",") ||
        x?.end_date.includes(":")
          ? x?.end_date
          : parseInt(x?.end_date)
      ).getTime() > today
  );

  useEffect(() => {
    if (firstLoad) {
      if (document.getElementById("modal-first-load")) {
        document.getElementById("modal-first-load").checked = true;
      }
    }
    if (userFlags?.new_admin === "true") {
      if (document.getElementById("modal-new-admin")) {
        document.getElementById("modal-new-admin").checked = true;
      }
    }
  }, [userFlags, firstLoad]);
  return (
    <>
      <div
        className={`absolute bg-slate-100 dark:bg-slate-900 dark:text-slate-200 h-screen w-screen flex items-center justify-center pointer-events-none z-[999] duration-1000 opacity-${
          pageLoading ? 100 : 0
        }`}
      >
        <div className="mb-10">
          <div>
            <div className="w-max mx-auto animate-spin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-circle-dashed w-20 h-20 xl:w-24 xl:h-24 stroke-slate-500 dark:stroke-slate-300"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 3a9 9 0 1 0 9 9"></path>
              </svg>
            </div>
          </div>
          <div className="mt-10 text-xl xl:text-2xl font-semibold text-slate-600 dark:text-slate-500">
            Loading. Please Wait.
          </div>
        </div>
      </div>
      <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-200">
        {/* Navbar */}
        <div>
          <div className="hidden xl:block">
            <Navbar></Navbar>
          </div>
          <div className="xl:hidden">
            <NavbarMini></NavbarMini>
          </div>
        </div>

        {/* Top Banner */}
        <div className="relative">
          <div>
            <img src={backgroundImage} alt="Cover" className="w-full" />
          </div>
          <div className="absolute top-0 -bottom-px 2xl:bottom-0 right-0 left-0 cover-gradient">
            <div className=" p-5 xl:p-32 2xl:p-48 flex items-center h-full">
              <div className="xl:w-4/6 2xl:w-1/2 h-max">
                <div className="text-sm xl:text-3xl text-[#015694]">
                  Daffodil International University
                </div>
                <div className="font-bold text-xl xl:text-7xl text-[#015694] mt-0 xl:mt-2">
                  Computer & <br className="hidden xl:block" /> Programming Club
                </div>
                <div className="text-2xs xl:text-xl font-light text-[#646464] mt-0 xl:mt-7">
                  DIU CPC is the most primitive and extensive club as well as
                  the biggest club in Daffodil International University. We work
                  together to explore every field of Computer Science
                </div>
                <div className="mt-2 xl:mt-7">
                  <button className="bg-[#EA9723] py-1 xl:py-2 px-2 xl:px-4 text-xs xl:text-2xl text-white font-semibold">
                    Read More
                  </button>
                  <button className="ml-2 ring-2 ring-inset ring-[#EA9723] py-1 xl:py-2 px-2 xl:px-4 text-xs xl:text-2xl text-[#656565] font-normal rounded-br-xl xl:rounded-br-[35px]">
                    Contact Us
                  </button>
                </div>
              </div>
              <div className="absolute right-0 xl:right-5 pt-0 xl:pt-12 2xl:pt-16">
                <button
                  className="flex items-center justify-center"
                  onClick={() => {
                    const newBanner =
                      bgImages[
                        bgImages.indexOf(backgroundImage) < bgImages.length - 1
                          ? bgImages.indexOf(backgroundImage) + 1
                          : 0
                      ];
                    setBackgroundImage(newBanner);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-slate-300 hover:stroke-slate-400 duration-500 w-6 h-6 xl:w-16 xl:h-16"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#015694] px-5 xl:px-10 py-0.5 xl:py-5">
          <div className="xl:w-4/5 mx-auto grid grid-cols-5 xl:grid-cols-8 items-center">
            <div className="text-white text-sm xl:text-2xl 2xl:text-3xl font-light">
              Flagship |
            </div>
            <div className="col-span-3 xl:col-span-6">
              <Sponsors></Sponsors>
            </div>
            <div className="text-white text-sm xl:text-2xl 2xl:text-3xl font-light">
              | Events
            </div>
          </div>
        </div>

        <div className="my-10"></div>
        {unExpiredEvents?.length !== 0 ? (
          <>
            {/* Events Carousel */}
            <div>
              <div className="flex justify-center">
                <div className="text-2xl font-semibold py-2 px-32 xl:px-36 home-heading-bg text-center">
                  Ongoing
                  <span className="text-slate-400 dark:text-slate-500">/</span>
                  Upcoming <span className="text-sky-700">Events</span>
                </div>
              </div>
              <div className="px-5 xl:px-0">
                <EventsCarousel
                  unExpiredEvents={unExpiredEvents}
                ></EventsCarousel>
              </div>
            </div>
            <div className="text-slate-400 dark:text-slate-600 text-2xl font-semibold text-center my-10">
              -- - --
            </div>
          </>
        ) : (
          ""
        )}
        {/* Wings */}
        <div>
          <div className="flex justify-center">
            <div className="text-2xl font-semibold py-2 px-32 xl:px-36 home-heading-bg text-center">
              Our <span className="text-sky-700">Wings</span>
            </div>
          </div>
          <Wings></Wings>
        </div>
        <div className="text-slate-400 dark:text-slate-600 text-2xl font-semibold text-center my-10">
          -- - --
        </div>
        {/* Advisors */}
        <div>
          <div className="flex justify-center">
            <div className="text-2xl font-semibold py-2 px-32 xl:px-36 home-heading-bg text-center">
              Meet The <span className="text-sky-700">Advisors</span>
            </div>
          </div>
          <div className="text-slate-500 dark:text-slate-200 text-sm text-center mt-2">
            The advising teachers of DIU Computer & Programming Club
          </div>
          <Advisors advisors={advisors}></Advisors>
        </div>
        <div className="text-slate-400 dark:text-slate-600 text-2xl font-semibold text-center my-10">
          -- - --
        </div>
        {/* Team */}
        <div>
          <div className="flex justify-center">
            <div className="text-2xl font-semibold py-2 px-32 xl:px-36 home-heading-bg text-center">
              Meet The <span className="text-sky-700">Team</span>
            </div>
          </div>
          <div className="text-slate-500 dark:text-slate-200 text-sm text-center mt-2">
            The core members of DIU Computer & Programming Club
          </div>
          <Team team={team}></Team>
        </div>

        {/* Footer */}
        <div className="mt-10">
          <Footer></Footer>
        </div>
      </div>

      {/* New User Modal */}
      {/* {firstLoad === true ? (
        <>
          <div>
            <input
              type="checkbox"
              id="modal-first-load"
              className="modal-toggle"
            />
            <div className="modal">
              <div className="modal-box w-11/12 max-w-5xl bg-white dark:bg-slate-800">
                <FirstLoadModalData></FirstLoadModalData>
                <div className="modal-action">
                  <label
                    htmlFor="modal-first-load"
                    className="btn btn-sm text-white hover:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 border-none"
                    onClick={() => {
                      localStorage.setItem("first-load", "false");
                    }}
                  >
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )} */}

      {/* New Admin Modal */}
      {/* {firstLoad === false && userFlags?.new_admin === "true" ? (
        <>
          <div>
            <input
              type="checkbox"
              id="modal-new-admin"
              className="modal-toggle"
            />
            <div className="modal">
              <div className="modal-box w-11/12 max-w-5xl bg-white dark:bg-slate-800">
                <div
                  className="p-2 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
                  role="alert"
                >
                  <span className="font-medium">Info alert!</span> Please read
                  these carefully. As, these will be shown only once. Scroll to
                  the bottom to dismiss this pop-up.
                </div>
                <h3 className="font-bold text-lg text-slate-600 dark:text-slate-200">
                  Congratulations, {user?.name}!
                </h3>
                <p className="text-slate-600 dark:text-slate-200">
                  Here is the things you can do with your current authority.
                </p>
                <NewAdminModalData></NewAdminModalData>
                <div className="modal-action">
                  <label
                    htmlFor="modal-new-admin"
                    className="btn btn-sm text-white hover:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 border-none"
                    onClick={() => {
                      const data = {
                        event: "new_admin_false",
                        status: "false",
                      };

                      http
                        .put(`/newAdminChange/${user.uid}`, data)
                        .then((res) => {
                          if (res?.data?.status === 200) {
                          } else {
                          }
                        });
                    }}
                  >
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )} */}
    </>
  );
};

export default Home;
