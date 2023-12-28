import React, { useState } from "react";
import EventCardSmall from "../../Components/EventCard/EventCardSmall";
import Footer from "../../Components/Footer/Footer";
import ForumCardSmall from "../../Components/ForumCard/ForumCardSmall";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import UserCardSmall from "../../Components/UserCard/UserCardSmall";
import useAuth from "../../Hooks/useAuth";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

const Search = () => {
  useDocumentTitle("Search");
  const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
  const [searchType, setSearchType] = useState(width < 768 ? "users" : "all");
  const { users, events } = useAuth();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const handleSearch = (searchType, value) => {
    if (value === "") {
      setFilteredUsers([]);
      setFilteredEvents([]);
    } else if (searchType === "all") {
      setFilteredUsers(
        users?.filter(
          (x) =>
            x?.stu_id === value ||
            x?.name.toLowerCase().includes(value?.toLowerCase()) ||
            x?.email.toLowerCase().includes(value?.toLowerCase())
        )
      );
      setFilteredEvents(
        events?.filter((x) =>
          x?.title.toLowerCase().includes(value?.toLowerCase())
        )
      );
    } else if (searchType === "users") {
      setFilteredUsers(
        users?.filter(
          (x) =>
            x?.stu_id === value ||
            x?.name.toLowerCase().includes(value?.toLowerCase()) ||
            x?.email.toLowerCase().includes(value?.toLowerCase())
        )
      );
    } else if (searchType === "events") {
      setFilteredEvents(
        events?.filter((x) =>
          x?.title.toLowerCase().includes(value?.toLowerCase())
        )
      );
    }
  };
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

      <div className="mt-5 md:mt-10 min-h-[80vh] md:min-h-[70vh]">
        {/* Body */}
        <div className="text-xl p-3 ml-5 mt-2 font-semibold text-slate-600 dark:text-slate-200 block md:hidden">
          Browse{" "}
          <select
            defaultValue={width < 768 ? "user" : "all"}
            onChange={() => {
              setSearchType(document.getElementById("searchType").value);
            }}
            name="searchType"
            id="searchType"
            className="bg-slate-200 dark:bg-slate-800 rounded-md select text-xl"
          >
            <option
              value="users"
              className="text-slate-600 dark:text-slate-300"
            >
              Users
            </option>
            <option
              value="events"
              className="text-slate-600 dark:text-slate-300"
            >
              Events
            </option>
            {/* <option
              value="forum"
              className="text-slate-600 dark:text-slate-300"
            >
              Forum
            </option> */}
            <option
              value="all"
              className="text-slate-600 dark:text-slate-300 hidden"
            >
              All
            </option>
          </select>
        </div>

        <div className="flex justify-center mt-5 md:mt-16">
          <div className="bg-white dark:bg-slate-800 w-3/4 xl:w-2/5 px-3 py-2 flex items-center rounded-md shadow">
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600 hidden md:block"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
            {/* Search Box */}
            <input
              type="text"
              id="search-text"
              className="mx-2 outline-0 w-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium md:font-semibold"
              placeholder="Search"
              autoComplete="off"
              onChange={(e) => {
                handleSearch(searchType, e?.target?.value);
              }}
              onKeyUp={(key) => {
                if (key.code === "Enter" || key.code === "NumpadEnter") {
                  handleSearch(searchType, key?.target?.value);
                }
              }}
            />
            {/* Cross Icon */}
            <button
              onClick={() => {
                document.getElementById("search-text").value = "";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600 hidden md:block hover:stroke-orange-700 dark:hover:stroke-orange-600"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            {/* Search Button Phone */}
            <button
              className="block md:hidden"
              onClick={() => {
                handleSearch(
                  searchType,
                  document.getElementById("search-text").value
                );
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Result */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-10 xl:w-3/4 mx-auto">
          {/* Users */}
          {filteredUsers?.length > 0 ? (
            <>
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  Users
                </span>
                <div>
                  {filteredUsers?.map((user) => (
                    <UserCardSmall
                      key={users?.indexOf(user)}
                      user={user}
                    ></UserCardSmall>
                  ))}
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          {/* Events */}
          {filteredEvents?.length > 0 ? (
            <>
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  Events
                </span>
                <div>
                  {filteredEvents?.map((event) => (
                    <EventCardSmall
                      key={events?.indexOf(event)}
                      event={event}
                    ></EventCardSmall>
                  ))}
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          {/* Forums */}
          <div className="hidden">
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              Forums
            </span>
            <div>
              <ForumCardSmall type="Discussion"></ForumCardSmall>
              <ForumCardSmall type="Event"></ForumCardSmall>
              <ForumCardSmall type="Notice"></ForumCardSmall>
              <ForumCardSmall type="Bug"></ForumCardSmall>
              <ForumCardSmall type="Feature"></ForumCardSmall>
              <ForumCardSmall type="Site"></ForumCardSmall>
              <ForumCardSmall></ForumCardSmall>
            </div>
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

export default Search;
