import { message } from "antd";
import { Link } from "react-router-dom";
import EventCardRibbon from "./EventCardRibbon";
import { useState } from "react";
import http from "../../BaseUrl/http";
import useAuth from "../../Hooks/useAuth";

const deleteEvent = (event_id, toggleRefresh) => {
  http
    .delete(`/deleteEvent/${event_id}`)
    .then((res) => {
      if (res?.data?.status === 200) {
        message.success("Event Removed");
      } else {
        message.error("Event Remove Failed");
      }
    })
    .finally(() => {
      toggleRefresh();
    });
};

const editEvent = (event_id) => {
  message.info("Edit Feature Coming Soon");
};

const renderDate = (date = "") => {
  const nDate =
    date.includes(" ") || date.includes(",") || date.includes(":")
      ? date
      : parseInt(date);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date(nDate);
  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  return `${day} ${month}, ${year}`;
};

const renderStatus = (start, end) => {
  const today = new Date().getTime();
  const nStart =
    start?.includes(" ") || start?.includes(",") || start?.includes(":")
      ? start
      : parseInt(start);
  const nEnd =
    end?.includes(" ") || end?.includes(",") || end?.includes(":")
      ? start
      : parseInt(end);
  if (new Date(nStart).getTime() > today && new Date(nEnd).getTime() > today) {
    return "upcoming";
  } else if (
    new Date(nStart).getTime() < today &&
    new Date(nEnd).getTime() > today
  ) {
    return "ongoing";
  } else if (
    new Date(nStart).getTime() < today &&
    new Date(nEnd).getTime() < today
  ) {
    return "finished";
  }
};

const EventCard = ({ event = {} }) => {
  const { toggleRefresh, user } = useAuth();
  const [actionVisibility, setActionVisibility] = useState(false);
  const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
  return (
    <>
      <div
        className="relative w-11/12 xl:w-2/3 rounded-md mx-auto my-10 xl:my-16 group"
        onClick={() => {
          setActionVisibility(actionVisibility ? false : true);
        }}
        onMouseEnter={() => {
          setActionVisibility(true);
        }}
        onMouseLeave={() => {
          setActionVisibility(false);
        }}
      >
        <div className="bg-white dark:bg-slate-800 rounded-md shadow-sm grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 group">
          <div className="hidden md:block">
            <Link to={`/forum/events/${event?.event_id}`}>
              <div className="rounded-lg shadow-sm">
                <img
                  src={`https://static.cpc.daffodilvarsity.edu.bd/${event?.cover_image}`}
                  alt="Event Cover"
                  className="w-full h-full rounded-l-lg shadow-sm"
                />
              </div>
            </Link>
          </div>
          <div className="xl:col-span-2 py-2 px-5 relative">
            <EventCardRibbon
              status={renderStatus(event?.start_date, event?.end_date)}
            ></EventCardRibbon>
            <Link
              to={`/forum/events/${event?.event_id}`}
              className="text-xl font-semibold text-slate-600 dark:text-slate-200 group-hover:text-orange-600 dark:group-hover:text-orange-500 w-11/12"
            >
              {event?.title}
            </Link>
            <div className="mt-1 flex items-center text-xs text-slate-500">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-clock mr-1 stroke-slate-500"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
              </span>{" "}
              {renderDate(event?.start_date)} - {renderDate(event?.end_date)}
            </div>
            <div
              className={
                width < 1500
                  ? "mt-2 text-slate-400 description-text-3 whitespace-pre-wrap break-words"
                  : "mt-2 text-slate-400 description-text-7 whitespace-pre-wrap break-words"
              }
            >
              {event?.description}
            </div>
          </div>
        </div>
        {/* Edit & Delete */}
        {user?.role === "dev" ||
        user?.role === "developer" ||
        user?.role === "mod" ||
        user?.role === "moderator" ||
        user?.role === "admin" ||
        user?.uid === event?.author_id ? (
          <div
            className={
              actionVisibility
                ? "xl:absolute xl:right-0 xl:top-[50%] xl:-translate-y-[50%] xl:translate-x-full mt-3 xl:mt-0 xl:h-full flex xl:flex-col items-center justify-center xl:pl-3 h-full xl:w-max overflow-hidden"
                : "xl:absolute xl:right-0 xl:top-[50%] xl:-translate-y-[50%] xl:translate-x-full mt-3 xl:mt-0 xl:h-full flex xl:flex-col items-center justify-center xl:pl-0 h-0 xl:w-0 overflow-hidden"
            }
          >
            <button
              className="bg-blue-100 dark:bg-blue-800 hover:bg-blue-200 dark:hover:bg-blue-400 transition ease-in-out duration-300 p-1 rounded-full mr-3 xl:mb-3 xl:mr-0"
              onClick={() => {
                editEvent(event?.event_id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-eraser stroke-blue-600 dark:stroke-blue-800 p-1 bg-blue-300 dark:bg-blue-500 rounded-full"
                width="31"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
              </svg>
            </button>
            <button
              className="bg-red-100 dark:bg-red-800 hover:bg-red-200 dark:hover:bg-red-400 transition ease-in-out duration-300 p-1 rounded-full"
              onClick={() => {
                document.getElementById(
                  `modal-event-${event?.event_id}`
                ).checked = true;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-eraser stroke-red-600 dark:stroke-red-800 p-1 bg-red-300 dark:bg-red-500 rounded-full"
                width="31"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19 19h-11l-4 -4a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9 9" />
                <line x1="18" y1="12.3" x2="11.7" y2="6" />
              </svg>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Modal */}
      <input
        type="checkbox"
        id={`modal-event-${event?.event_id}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box bg-white dark:bg-slate-800">
          <h3 className="font-bold text-lg text-slate-600 dark:text-slate-200">
            Confirm Delete
          </h3>
          <p className="py-4 text-slate-600 dark:text-slate-200">
            You are going to delete event{" "}
            <span className="font-semibold text-slate-600 dark:text-slate-200">
              {event?.title}
            </span>
          </p>
          <p className="text-slate-600 dark:text-slate-200">
            {renderDate(event?.start_date)} - {renderDate(event?.end_date)}
          </p>
          <div className="modal-action">
            <label
              className="btn btn-sm text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none"
              onClick={() => {
                deleteEvent(event?.event_id, toggleRefresh);
                document.getElementById(
                  `modal-event-${event?.event_id}`
                ).checked = false;
              }}
            >
              Confirm
            </label>
            <label
              htmlFor={`modal-event-${event?.event_id}`}
              className="btn btn-sm text-white hover:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 border-none"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
