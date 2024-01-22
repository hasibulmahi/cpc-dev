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
import { Typewriter } from "react-simple-typewriter";

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
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
  ];

  const isSmallScreen = window.innerWidth <= 768;

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

  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentSlider]);

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

        {/* text container here */}
        {/* <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
            <div className="w-full h-max">
              <div className="text-xs sm:text-sm xl:text-3xl text-white">
                Daffodil International University
              </div>
              <div className="font-bold text-xl xl:text-4xl text-[#015694] mt-0 xl:mt-2">
                <Typewriter
                  loop
                  cursor
                  words={["Computer & Programming Club"]}
                />
              </div>
              <div className="text-sm xl:text-xl font-light text-[#ccc] mt-0 xl:mt-7">
                DIU CPC is the most primitive and extensive club as well as the
                biggest club in Daffodil International University. We work
                together to explore every field of Computer Science
              </div>
              <div className="mt-2 xl:mt-7">
                <button className="text-xl w-32 h-16 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000 rounded-lg">
                  <span className="absolute bg-sky-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                  <span className="absolute bg-sky-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                  Read More
                </button>
                <button
                  style={{ borderBottomRightRadius: 60 }}
                  className="text-xl w-36 h-16 border-2 border-sky-600 text-sky-600 relative overflow-hidden group z-10 hover:text-white duration-1000 rounded-lg ml-3"
                >
                  <span className="absolute bg-sky-600 w-40 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                  <span className="absolute bg-sky-800 w-40 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                  Contact Us
                </button>
              </div>
            </div>
          </div> */}
        <div className="w-full mx-auto h-[240px] md:h-[470px] lg:h-[500px] pt-[100px] flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10">
          <div className="relative overflow-hidden flex items-center">
            {/* dots */}
            <div className="flex h-fit rounded-full z-50 absolute right-0 bottom-1/2 w-fit gap-1 rotate-90">
              {sliders.map((_, inx) => (
                <button
                  key={inx}
                  onClick={() => setCurrentSlider(inx)}
                  className={`rounded-full duration-300 bg-white ${
                    currentSlider === inx ? "w-10" : "w-2"
                  } h-2`}
                ></button>
              ))}
            </div>
            <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
              <div className="w-full h-max">
                <div className="text-xs sm:text-sm xl:text-3xl text-black">
                  Daffodil International University
                </div>
                <div className="font-bold text-xl xl:text-4xl text-[#015694] mt-0 xl:mt-2">
                  <Typewriter
                    loop
                    cursor
                    words={["Computer & Programming Club"]}
                  />
                </div>
                <div className="text-sm xl:text-xl font-light text-[#666] mt-0 xl:mt-7">
                  DIU CPC is the most primitive and extensive club as well as
                  the biggest club in Daffodil International University. We work
                  together to explore every field of Computer Science
                </div>
                <div className="mt-2 xl:mt-7">
                  <button className="text-xl w-32 h-16 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000 rounded-lg">
                    <span className="absolute bg-sky-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                    <span className="absolute bg-sky-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                    Read More
                  </button>
                  <button
                    style={{ borderBottomRightRadius: 30 }}
                    className="text-xl w-36 h-16 border-2 border-sky-600 text-sky-600 relative overflow-hidden group z-10 hover:text-white duration-1000 rounded-lg ml-3"
                  >
                    <span className="absolute bg-sky-600 w-40 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                    <span className="absolute bg-sky-800 w-40 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            {/* slider container */}
            <div
              className="w-screen ease-linear duration-300 flex flex-col h-[340px] md:h-[400px] transform-gpu relative"
              style={{ transform: `translateY(-${currentSlider * 100}%)` }}
            >
              {/* sliders */}
              {sliders.map((_, inx) => (
                <div
                  key={inx}
                  className="w-1/2 ml-auto duration-200 before:content-['Image'] before:bg-black/20 before:-z-10 before:absolute before:text-3xl before:flex before:justify-center before:items-center before:text-black/40 before:inset-0 relative"
                >
                  <img
                    src={_}
                    className="w-full h-[340px] md:h-[400px] object-fit"
                    alt={`Slider - ${inx + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-2/3 flex justify-evenly h-[100px] rounded-3xl mx-auto bg-[#EF7D14] mt-[30px]">
          <div className="flex flex-col items-center justify-center font-semibold text-white">
            <p className="text-xl">8000+</p>
            <p>Current Members</p>
          </div>
          <div className="flex flex-col items-center justify-center font-semibold text-white">
            <p className="text-xl">1000+</p>
            <p>Alumni</p>
          </div>
          <div className="flex flex-col items-center justify-center font-semibold text-white">
            <p className="text-xl">19</p>
            <p>Committee Member</p>
          </div>
          <div className="flex flex-col items-center justify-center font-semibold text-white">
            <p className="text-xl">50</p>
            <p>Executive</p>
          </div>
        </div>
      </div>

      {/* <div className="bg-[#015694] px-5 xl:px-10 py-0.5 xl:py-5">
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
        </div> */}

      {unExpiredEvents?.length !== 0 ? (
        <>
          {/* Events Carousel */}
          <div className="py-10">
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
      <div className="bg-[#F1F5F9] py-10">
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
      <div className="bg-[#F1F5F9] py-10">
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
      <div className="bg-[#F1F5F9] py-10">
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
