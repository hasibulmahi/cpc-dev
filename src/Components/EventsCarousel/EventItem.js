import React from "react";
import "./EventCarousel.css";
import { Link } from "react-router-dom";
import CountDown from "../CountDown/CountDown";
import DefaultCoverB64 from "./DefaultCoverB64";

const EventItem = ({
  id = "",
  date = "0",
  title = "",
  description = "",
  image = "",
}) => {
  const today = new Date().getTime();
  const baseUrl = "https://static.cpc.daffodilvarsity.edu.bd/";
  return (
    <div className="min-h-full xl:w-2/3 bg-white dark:bg-slate-800 rounded-lg shadow-sm m-8 mx-auto group">
      <div className="relative">
        <div
          className="rounded-lg from-slate-400 bg-cover"
          style={{
            backgroundImage: `url(${
              image === "" ? DefaultCoverB64() : baseUrl + image
            })`,
          }}
        >
          <img
            src={image === "" ? DefaultCoverB64() : baseUrl + image}
            alt="Event Cover"
            className="w-full rounded-lg invisible"
          />
        </div>
        <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-200 border-l-2 border-b-2 dark:group-hover:border-slate-900 absolute -top-[1px] -right-[1px] px-1 md:p-3 rounded-tr-lg rounded-bl-lg group-hover:w-0 group-hover:p-0 ease-in-out duration-200 xl:duration-500 overflow-hidden">
          <div className="text-center">
            {new Date(
              date?.includes(" ") || date?.includes(",") || date?.includes(":")
                ? date
                : parseInt(date)
            ).getTime() > today ? (
              <>
                <div className="text-xs xl:text-sm font-semibold uppercase mb-1 hidden md:block">
                  Event starts in
                </div>
                <CountDown
                  date={date}
                  className="countdown font-mono text-xs md:text-xl xl:text-2xl"
                ></CountDown>
              </>
            ) : (
              <div className="text-xs xl:text-sm font-mono xl:font-semibold xl:font-sans uppercase">
                Event Ongoing
              </div>
            )}
          </div>
        </div>
        {/* PC */}
        <div className="hidden xl:block">
          <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-200 absolute -top-[1px] -right-[1px] -bottom-[1px] rounded-r-lg w-0 group-hover:w-[25%] overflow-hidden ease-in-out duration-500 shadow">
            <div className="py-10 px-5">
              <div className="text-center">
                <div className="text-xs xl:text-sm font-semibold uppercase mb-1">
                  Event starts in
                </div>
                <CountDown
                  date={date}
                  className="countdown font-mono text-xl xl:text-2xl"
                ></CountDown>
              </div>
              <div className="text-slate-400 dark:text-slate-600 text-2xl font-semibold text-center my-2">
                -- - --
              </div>
              <div className="text-xl text-center truncate">
                {title === "" ? "Title" : title}
              </div>
              <div className="mt-3 mb-3 text-sm description-text-5">
                {description === "" ? "Description" : description}
              </div>
              <div className="text-slate-400 text-xs text-right w-full">
                <Link
                  to={id === "" ? "/forum/events" : `/forum/events/${id}`}
                  className="hover:text-orange-600"
                >
                  ... click to view details
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Phone */}
        <div className="xl:hidden">
          <div className="absolute top-0 right-0 bottom-0 left-0 rounded-lg p-2">
            <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-200 rounded-lg grid grid-cols-3 ease-in-out duration-200 h-full w-0 group-hover:w-full overflow-hidden shadow">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xs xl:text-sm font-semibold uppercase mb-1">
                    Starts in
                  </div>
                  <CountDown
                    date={date}
                    className="countdown font-mono text-sm"
                  ></CountDown>
                </div>
              </div>
              <div className="col-span-2 flex items-center justify-center px-3">
                <div className="w-full">
                  <div className="text-lg truncate">
                    {title === "" ? "Title" : title}
                  </div>
                  <div className="mt-2 mb-2 text-sm description-text-5 text-slate-400">
                    {description === "" ? "Description" : description}
                  </div>
                  <div className="text-slate-400 text-xs text-right w-full">
                    <Link
                      to={id === "" ? "/forum/events" : `/forum/events/${id}`}
                      className="hover:text-orange-600"
                    >
                      ... read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
