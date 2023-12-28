import React from "react";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import EventCard from "../../Components/EventCard/EventCard";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Events = () => {
  const { events, user } = useAuth();
  const compare = (a, b) => {
    const today = new Date().getTime();
    let aFlag = 0;
    let bFlag = 0;
    if (
      new Date(
        a?.start_date.includes(" ") ||
        a?.start_date.includes(",") ||
        a?.start_date.includes(":")
          ? a?.start_date
          : parseInt(a?.start_date)
      ).getTime() > today
    ) {
      aFlag = new Date(
        a?.start_date.includes(" ") ||
        a?.start_date.includes(",") ||
        a?.start_date.includes(":")
          ? a?.start_date
          : parseInt(a?.start_date)
      ).getTime();
    } else {
      aFlag = new Date(
        a?.end_date.includes(" ") ||
        a?.end_date.includes(",") ||
        a?.end_date.includes(":")
          ? a?.end_date
          : parseInt(a?.end_date)
      ).getTime();
    }
    if (
      new Date(
        b?.start_date.includes(" ") ||
        b?.start_date.includes(",") ||
        b?.start_date.includes(":")
          ? b?.start_date
          : parseInt(b?.start_date)
      ).getTime() > today
    ) {
      bFlag = new Date(
        b?.start_date.includes(" ") ||
        b?.start_date.includes(",") ||
        b?.start_date.includes(":")
          ? b?.start_date
          : parseInt(b?.start_date)
      ).getTime();
    } else {
      bFlag = new Date(
        b?.end_date.includes(" ") ||
        b?.end_date.includes(",") ||
        b?.end_date.includes(":")
          ? b?.end_date
          : parseInt(b?.end_date)
      ).getTime();
    }
    if (aFlag > bFlag) {
      return -1;
    } else if (aFlag < bFlag) {
      return 1;
    } else {
      return 0;
    }
  };
  events.sort(compare);

  const [splittedEvents, setSplittedEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationArray, setPaginationArray] = useState([]);
  const [eventsView, setEventsView] = useState([]);
  useEffect(() => {
    let splittedEvents = [];
    for (let i = 0; i < events?.length; i += 10) {
      const eventChunk = events?.slice(i, i + 10);
      splittedEvents.push(eventChunk);
    }
    setSplittedEvents(splittedEvents);
  }, [events]);

  const handlePagination = (current, total) => {
    if (total <= 1) return [1];
    const center = [
        current - 2,
        current - 1,
        current,
        current + 1,
        current + 2,
      ],
      filteredCenter = center.filter((p) => p > 1 && p < total),
      includeThreeLeft = current === 5,
      includeThreeRight = current === total - 4,
      includeLeftDots = current > 5,
      includeRightDots = current < total - 4;

    if (includeThreeLeft) filteredCenter.unshift(2);
    if (includeThreeRight) filteredCenter.push(total - 1);

    if (includeLeftDots) filteredCenter.unshift("...");
    if (includeRightDots) filteredCenter.push("...");

    return [1, ...filteredCenter, total];
  };

  useEffect(() => {
    setPaginationArray(handlePagination(currentPage, splittedEvents?.length));
    setEventsView(splittedEvents[currentPage - 1]);
  }, [currentPage, splittedEvents]);

  useDocumentTitle("Events");
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

      <div className="mt-5 md:mt-16 min-h-[50vh] md:min-h-[70vh]">
        <div className="w-11/12 xl:w-2/3 mx-auto flex">
          {user && user?.role !== "user" ? (
            <>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-md shadow-sm w-full font-semibold">
                All Events
              </div>
              <Link
                to="/admin/new-event"
                className="group hover:text-orange-500 ml-3"
              >
                <div className="flex bg-white dark:bg-slate-800 rounded-lg px-2 h-full w-max group-hover:px-5 overflow-hidden items-center justify-center shadow-sm duration-300">
                  Create New Event
                </div>
              </Link>
            </>
          ) : (
            ""
          )}
        </div>

        {/* Event */}
        {eventsView?.map((x) => (
          <EventCard key={Math.random()} event={x}></EventCard>
        ))}

        {/* Pagination */}
        <div className="mt-10">
          <div className="bg-white dark:bg-slate-800 dark:text-white max-w-max mx-auto rounded-md shadow-sm flex items-center">
            <button
              className="py-2 px-3 flex items-center justify-center first:rounded-l-md last:rounded-r-md hover:bg-orange-100 dark:hover:bg-orange-300 duration-300"
              onClick={() => {
                currentPage > 1
                  ? setCurrentPage(currentPage - 1)
                  : setCurrentPage(1);
              }}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {paginationArray?.map((x) => (
              <button
                key={Math.random()}
                onClick={() => {
                  if (x !== "...") {
                    setCurrentPage(x);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={
                  currentPage === x
                    ? "bg-orange-100 dark:bg-slate-700 text-orange-600 dark:text-orange-500 py-2 px-3 flex items-center justify-center first:rounded-l-md last:rounded-r-md hover:bg-orange-100 dark:hover:bg-orange-300 duration-300 font-semibold"
                    : "py-2 px-3 flex items-center justify-center first:rounded-l-md last:rounded-r-md hover:bg-orange-100 dark:hover:bg-orange-300 duration-300 font-semibold"
                }
              >
                {x}
              </button>
            ))}
            <button
              className="py-2 px-3 flex items-center justify-center first:rounded-l-md last:rounded-r-md hover:bg-orange-100 dark:hover:bg-orange-300 duration-300"
              onClick={() => {
                currentPage < splittedEvents?.length
                  ? setCurrentPage(currentPage + 1)
                  : setCurrentPage(splittedEvents?.length);
              }}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
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

export default Events;
