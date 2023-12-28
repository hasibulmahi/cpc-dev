import React from "react";

const Badge = (statusIn) => {
  const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
  const status = statusIn.status ? statusIn.status : "user";

  if (status.toLowerCase() === "user" && width > 700) {
    return (
      <div className="flex items-center bg-emerald-200 rounded-full p-1 mx-1 first:ml-0 last:mr-0">
        <div className="bg-emerald-300 p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-user stroke-emerald-700 w-3 md:w-5 h-3 md:h-5"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
        </div>
        <div className="mx-1 text-emerald-700">User</div>
      </div>
    );
  } else if (status.toLowerCase() === "user" && width < 700) {
    return (
      <div
        className="mx-1 first:ml-0 last:mr-0 tooltip tooltip-accent"
        data-tip="User"
      >
        <div className="flex items-center bg-emerald-200 rounded-full p-0.5">
          <div className="bg-emerald-300 p-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-user stroke-emerald-700 w-3 md:w-5 h-3 md:h-5"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="7" r="4" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </div>
        </div>
      </div>
    );
  } else if (
    status.toLowerCase() === "dev" ||
    status.toLowerCase() === "developer"
  ) {
    return (
      <div className="flex items-center bg-teal-200 rounded-full p-1 mx-1 first:ml-0 last:mr-0">
        <div className="bg-teal-300 p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-user stroke-teal-700 w-3 md:w-5 h-3 md:h-5"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
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
        <div className="mx-1 text-emerald-700">Developer</div>
      </div>
    );
  } else if (status.toLowerCase() === "admin" && width > 700) {
    return (
      <div className="flex items-center bg-amber-200 rounded-full p-1 mx-1 first:ml-0 last:mr-0">
        <div className="bg-amber-300 p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-user stroke-amber-700 w-3 md:w-5 h-3 md:h-5"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
          </svg>
        </div>
        <div className="mx-1 text-amber-700">Admin</div>
      </div>
    );
  } else if (status.toLowerCase() === "admin" && width < 700) {
    return (
      <div
        className="mx-1 first:ml-0 last:mr-0 tooltip tooltip-warning"
        data-tip="Admin"
      >
        <div className="flex items-center bg-amber-200 rounded-full p-0.5">
          <div className="bg-amber-300 p-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-user stroke-amber-700 w-3 h-3"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
            </svg>
          </div>
        </div>
      </div>
    );
  } else if (
    (status.toLowerCase() === "mod" || status.toLowerCase() === "moderator") &&
    width > 700
  ) {
    return (
      <div className="flex items-center bg-violet-200 rounded-full p-1 mx-1 first:ml-0 last:mr-0">
        <div className="bg-violet-300 p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-user stroke-violet-700 w-3 md:w-5 h-3 md:h-5"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
          </svg>
        </div>
        <div className="mx-1 text-violet-700">Moderator</div>
      </div>
    );
  } else if (
    (status.toLowerCase() === "mod" || status.toLowerCase() === "moderator") &&
    width < 700
  ) {
    return (
      <div
        className="mx-1 first:ml-0 last:mr-0 tooltip tooltip-warning"
        data-tip="Moderator"
      >
        <div className="flex items-center bg-violet-200 rounded-full p-0.5">
          <div className="bg-violet-300 p-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-user stroke-violet-700 w-3 h-3"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
            </svg>
          </div>
        </div>
      </div>
    );
  } else {
    return;
  }
};

export default Badge;
