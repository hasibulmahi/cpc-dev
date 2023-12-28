import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { message } from "antd";
import "./ManageAdmin.css";
import useAuth from "../../Hooks/useAuth";
import http from "../../BaseUrl/http";
import { Link } from "react-router-dom";

const handleAdmin = (action, roleType, user, toggleRefresh) => {
  const handleFlagData = (uid) => {
    const data = {
      event: "new_admin_true",
      status: "true",
    };
    http.put(`/newAdminChange/${user.uid}`, data).then((res) => {
      if (res?.data?.status === 200) {
      } else {
      }
    });
  };

  if (action === "add") {
    const data = { role: roleType === "admin" ? "admin" : "moderator" };
    http
      .put(`/manageAdmin/${user?.uid}`, data)
      .then((res) => {
        handleFlagData(user?.uid);
        if (res?.data?.status === 200) {
          if (roleType === "admin") {
            message.success("Admin Added");
          } else {
            message.success("Moderator Added");
          }
        } else {
          if (roleType === "admin") {
            message.error("Admin Add Failed");
          } else {
            message.error("Moderator Add Failed");
          }
        }
      })
      .finally(() => {
        toggleRefresh();
      });
  } else if (action === "remove") {
    const data = { role: "user" };
    http
      .put(`/manageAdmin/${user.uid}`, data)
      .then((res) => {
        if (res?.data?.status === 200) {
          message.success("Demoted Successfully");
        } else {
          message.error("Demotion Failed");
        }
      })
      .finally(() => {
        toggleRefresh();
      });
  }
};

const ManageAdmin = () => {
  const { user, users, toggleRefresh } = useAuth();
  const [modalData, setModalData] = useState({});
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    users ? setUserList(users) : setUserList([]);
  }, [users]);
  const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
  useDocumentTitle("Admin - Manage Admin");
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

      <div className="mt-5 md:mt-10 min-h-[50vh] md:min-h-[70vh]">
        {/* Filter */}
        <div className="w-11/12 xl:w-2/3 mx-auto flex items-center gap-2 justify-end py-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-slate-600 dark:stroke-slate-200"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
            </svg>
          </div>
          {/* filter buttons */}
          <div>
            <button
              onClick={() => {
                setUserList(users);
              }}
              className="mx-1 hover:text-blue-500 transition duration-300"
            >
              All
            </button>
            <button
              onClick={() => {
                setUserList(
                  users.filter((x) => x.role.toLowerCase() === "admin")
                );
              }}
              className="mx-1 hover:text-orange-500 transition duration-300"
            >
              Admin
            </button>
            <button
              onClick={() => {
                setUserList(
                  users.filter(
                    (x) =>
                      x.role.toLowerCase() === "moderator" ||
                      x.role.toLowerCase() === "mod"
                  )
                );
              }}
              className="mx-1 hover:text-purple-500 transition duration-300"
            >
              Mods
            </button>
            <button
              onClick={() => {
                setUserList(
                  users.filter((x) => x.role.toLowerCase() === "user")
                );
              }}
              className="mx-1 hover:text-blue-500 transition duration-300"
            >
              Users
            </button>
          </div>
          {/* filter input */}
          <div className="bg-white/70 dark:bg-slate-800 rounded-lg p-2 px-1.5">
            <input
              type="text"
              id="filter-users"
              className="mx-2 w-36 outline-0 bg-transparent text-slate-600 dark:text-slate-300 font-medium"
              autoComplete="off"
              onChange={(e) => {
                if (e?.target.value === "") {
                  setUserList(users);
                } else {
                  setUserList(
                    users?.filter(
                      (x) =>
                        x.name
                          .toLowerCase()
                          .includes(e?.target.value.toLowerCase()) ||
                        x.email
                          .toLowerCase()
                          .includes(e?.target.value.toLowerCase()) ||
                        x.stu_id.includes(e?.target.value)
                    )
                  );
                }
              }}
            />
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 w-11/12 xl:w-2/3 rounded-md shadow-sm mx-auto">
          <div className="overflow-x-auto w-full">
            {width < 500 ? (
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="bg-slate-200 dark:bg-slate-600"></th>
                    <th className="bg-slate-200 dark:bg-slate-600">Info</th>

                    <th className="bg-slate-200 dark:bg-slate-600 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userList?.map((singleUser) => (
                    <tr key={userList.indexOf(singleUser)}>
                      {/* SL */}
                      <th className="bg-white dark:bg-slate-800 px-2 text-center">
                        {userList.indexOf(singleUser) + 1}
                      </th>
                      <td className="bg-white dark:bg-slate-800 px-2">
                        <div>
                          {/* Name */}
                          <Link
                            to={`/user/${singleUser?.uid}`}
                            className="hover:text-orange-600"
                          >
                            <div className="font-bold mb-2">
                              {singleUser?.name}
                            </div>
                          </Link>
                          {/* Email */}
                          <div className="font-bold">{singleUser?.email}</div>
                          {/* ID */}
                          <div className="text-sm">{singleUser?.stu_id}</div>
                          {/* Role */}
                          <div className="text-sm font-bold mt-2">
                            Role:{" "}
                            <span
                              className={
                                singleUser?.role.toLowerCase() === "dev" ||
                                singleUser?.role.toLowerCase() === "developer"
                                  ? "text-teal-600 dark:text-teal-400 capitalize"
                                  : singleUser?.role.toLowerCase() === "mod" ||
                                    singleUser?.role.toLowerCase() ===
                                      "moderator"
                                  ? "text-violet-600 dark:text-violet-400 capitalize"
                                  : singleUser?.role.toLowerCase() === "admin"
                                  ? "text-amber-600 dark:text-amber-400 capitalize"
                                  : "capitalize"
                              }
                            >
                              {singleUser?.role}
                            </span>
                          </div>
                        </div>
                      </td>
                      <th className="bg-white dark:bg-slate-800 px-2">
                        <div className="flex items-center justify-center">
                          {singleUser?.role.toLowerCase() === "dev" ||
                          singleUser?.role.toLowerCase() === "developer" ? (
                            <button
                              onClick={() => {
                                handleAdmin(
                                  message.error("Authority Level Low")
                                );
                              }}
                              className="btn btn-sm text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none"
                            >
                              demote
                            </button>
                          ) : (
                            <>
                              {singleUser?.role === "user" ? (
                                <button
                                  onClick={() => {
                                    if (
                                      user?.role.toLowerCase() !==
                                        "moderator" ||
                                      user?.role.toLowerCase() !== "mod" ||
                                      user?.role.toLowerCase() !== "user"
                                    ) {
                                      setModalData(singleUser);
                                      document.getElementById(
                                        "promote-user-modal"
                                      ).checked = true;
                                    } else {
                                      message.error("Authority Level Low");
                                    }
                                  }}
                                  className="btn btn-sm text-white hover:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 border-none"
                                >
                                  Promote
                                </button>
                              ) : (
                                <button
                                  className="btn btn-sm text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none"
                                  onClick={() => {
                                    if (singleUser?.uid === user?.uid) {
                                      setModalData(singleUser);
                                      document.getElementById(
                                        "self-demote-warninr-modal"
                                      ).checked = true;
                                    } else if (
                                      user?.role.toLowerCase() !==
                                        "moderator" ||
                                      user?.role.toLowerCase() !== "mod"
                                    ) {
                                      handleAdmin(
                                        "remove",
                                        "",
                                        singleUser,
                                        toggleRefresh
                                      );
                                    } else {
                                      message.error("Authority Level Low");
                                    }
                                  }}
                                >
                                  Demote
                                </button>
                              )}
                            </>
                          )}
                        </div>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="bg-slate-200 dark:bg-slate-600"></th>
                    <th className="bg-slate-200 dark:bg-slate-600">Name</th>
                    <th className="bg-slate-200 dark:bg-slate-600">
                      Contact Info
                    </th>
                    <th className="bg-slate-200 dark:bg-slate-600 text-center">
                      Authority
                    </th>
                    <th className="bg-slate-200 dark:bg-slate-600 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userList?.map((singleUser) => (
                    <tr key={userList.indexOf(singleUser)}>
                      {/* SL */}
                      <th className="bg-white dark:bg-slate-800 text-center">
                        {userList.indexOf(singleUser) + 1}
                      </th>
                      <td className="bg-white dark:bg-slate-800">
                        <div className="flex items-center space-x-3">
                          {singleUser?.user_img === "" ||
                          singleUser?.user_img === "default" ? (
                            <>
                              {/* Image Placeholder */}
                              <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content mask mask-squircle w-12">
                                  <span className="text-xl">
                                    {singleUser?.display_name
                                      ? singleUser?.display_name[0]
                                      : singleUser?.name[0]}
                                  </span>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              {/* Image */}
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    src={
                                      singleUser?.user_img
                                        ? `https://static.cpc.daffodilvarsity.edu.bd/${singleUser?.user_img}`
                                        : ""
                                    }
                                    alt={singleUser?.name}
                                  />
                                </div>
                              </div>
                            </>
                          )}

                          {/* Name */}
                          <Link
                            to={`/user/${singleUser?.uid}`}
                            className="hover:text-orange-600"
                          >
                            <div className="font-bold">{singleUser?.name}</div>
                          </Link>
                        </div>
                      </td>
                      <td className="bg-white dark:bg-slate-800">
                        {/* Email */}
                        <div className="font-bold">{singleUser.email}</div>
                        {/* ID */}
                        <div className="text-sm">{singleUser?.stu_id}</div>
                      </td>
                      {/* Role */}
                      <td className="bg-white dark:bg-slate-800 font-bold text-center">
                        <span
                          className={
                            singleUser?.role.toLowerCase() === "dev" ||
                            singleUser?.role.toLowerCase() === "developer"
                              ? "text-teal-600 dark:text-teal-400 capitalize"
                              : singleUser?.role.toLowerCase() === "mod" ||
                                singleUser?.role.toLowerCase() === "moderator"
                              ? "text-violet-600 dark:text-violet-400 capitalize"
                              : singleUser?.role.toLowerCase() === "admin"
                              ? "text-amber-600 dark:text-amber-400 capitalize"
                              : "capitalize"
                          }
                        >
                          {singleUser?.role}
                        </span>
                      </td>
                      <th className="bg-white dark:bg-slate-800">
                        <div className="flex items-center justify-center">
                          {singleUser?.role.toLowerCase() === "dev" ||
                          singleUser?.role.toLowerCase() === "developer" ? (
                            <button
                              onClick={() => {
                                handleAdmin(
                                  message.error("Authority Level Low")
                                );
                              }}
                              className="btn btn-sm text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none"
                            >
                              demote
                            </button>
                          ) : (
                            <>
                              {singleUser?.role === "user" ? (
                                <button
                                  onClick={() => {
                                    if (
                                      user?.role.toLowerCase() ===
                                        "moderator" ||
                                      user?.role.toLowerCase() === "mod" ||
                                      user?.role.toLowerCase() === "user"
                                    ) {
                                      message.error("Authority Level Low");
                                    } else {
                                      setModalData(singleUser);
                                      document.getElementById(
                                        "promote-user-modal"
                                      ).checked = true;
                                    }
                                  }}
                                  className="btn btn-sm text-white hover:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 border-none"
                                >
                                  Promote
                                </button>
                              ) : (
                                <button
                                  className="btn btn-sm text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none"
                                  onClick={() => {
                                    if (singleUser?.uid === user?.uid) {
                                      setModalData(singleUser);
                                      document.getElementById(
                                        "self-demote-warninr-modal"
                                      ).checked = true;
                                    } else if (
                                      user?.role.toLowerCase() ===
                                        "moderator" ||
                                      user?.role.toLowerCase() === "mod" ||
                                      user?.role.toLowerCase() === "user"
                                    ) {
                                      message.error("Authority Level Low");
                                    } else {
                                      handleAdmin(
                                        "remove",
                                        "",
                                        singleUser,
                                        toggleRefresh
                                      );
                                    }
                                  }}
                                >
                                  Demote
                                </button>
                              )}
                            </>
                          )}
                        </div>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer></Footer>
      </div>

      {/* Modal */}
      <input type="checkbox" id="promote-user-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white dark:bg-slate-800">
          <h3 className="font-bold text-lg text-slate-600 dark:text-slate-200">
            Promoting {modalData?.name}!
          </h3>
          <ul className="py-4 text-slate-600 dark:text-slate-200 list-disc list-inside">
            <li>
              <span className="text-amber-600 dark:text-amber-400 font-semibold">
                Admin
              </span>{" "}
              will be able to manage everything in this site including adding &
              removing another admin or moderator.
            </li>
            <li className="mt-2">
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                Moderator
              </span>{" "}
              will be able to manage almost everything in this site except
              adding & removing another admin or moderator.
            </li>
          </ul>
          <div className="modal-action">
            <label
              className="btn btn-sm text-white bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:bg-gradient-to-br shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-amber-800/80 border-none"
              onClick={() => {
                handleAdmin("add", "admin", modalData, toggleRefresh);
                document.getElementById("promote-user-modal").checked = false;
              }}
            >
              Admin
            </label>
            <label
              className="btn btn-sm text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 border-none"
              onClick={() => {
                handleAdmin("add", "moderator", modalData, toggleRefresh);
                document.getElementById("promote-user-modal").checked = false;
              }}
            >
              Moderator
            </label>
            <label
              htmlFor="promote-user-modal"
              className="btn btn-sm text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
      {/* Self Demote Warning Modal */}
      <input
        type="checkbox"
        id="self-demote-warninr-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box bg-white dark:bg-slate-800">
          <h3 className="font-bold text-lg text-slate-600 dark:text-slate-200">
            <span className="text-red-600 dark:text-red-400">Warning!</span> You
            are about to demote yourself.
          </h3>
          <p className="py-4 text-slate-600 dark:text-slate-200">
            You will lose your authority.
          </p>
          <div className="modal-action">
            <label
              className="btn btn-sm text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none"
              onClick={() => {
                handleAdmin("remove", "", modalData, toggleRefresh);
                document.getElementById(
                  "self-demote-warninr-modal"
                ).checked = false;
              }}
            >
              Demote
            </label>
            <label
              htmlFor="self-demote-warninr-modal"
              className="btn btn-sm text-white hover:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 border-none"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAdmin;
