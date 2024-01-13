import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div>Follow Us On</div>
      <div className="max-w-max">
        <div className="flex">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/diucpc.official"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-slate-600 dark:stroke-slate-200 group-hover:stroke-blue-500 dark:group-hover:stroke-blue-400 transition ease-in-out duration-300"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/diu.cpc/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-slate-600 dark:stroke-slate-200 group-hover:stroke-violet-500 dark:group-hover:stroke-violet-400 transition ease-in-out duration-300"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </a>
          {/* Youtube */}
          <a
            href="https://www.youtube.com/c/diucpc"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-slate-600 dark:stroke-slate-200 group-hover:stroke-red-500 dark:group-hover:stroke-red-400 transition ease-in-out duration-300"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="4" />
              <path d="M10 9l5 3l-5 3z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/diu-cpc-daffodil-international-university-computer-programming-club/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-slate-600 dark:stroke-slate-200 group-hover:stroke-blue-500 dark:group-hover:stroke-blue-400 transition ease-in-out duration-300"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
