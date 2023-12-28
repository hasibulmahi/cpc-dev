import React from "react";
import { Link } from "react-router-dom";
import EventCardRibbon from "./EventCardRibbon";

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

const EventCardSmall = ({ event }) => {
  return (
    <Link
      to={`/forum/events/${event?.event_id}`}
      className="first:mt-0 last:mb-0 my-5 block"
    >
      <div className="p-3 px-5 bg-white dark:bg-slate-800 rounded-md shadow hover:bg-slate-200 dark:hover:bg-slate-600 transition duration-300 relative">
        <div className="text-slate-600 dark:text-slate-300 font-medium text-2xl">
          {event?.title}
        </div>
        <div className="text-xs font-medium text-slate-400 mt-2">
          {renderDate(event?.start_date)} - {renderDate(event?.end_date)}
        </div>
        <EventCardRibbon
          status={renderStatus(event?.start_date, event?.end_date)}
        ></EventCardRibbon>
      </div>
    </Link>
  );
};

export default EventCardSmall;
