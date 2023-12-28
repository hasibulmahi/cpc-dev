import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import useAuth from "../../Hooks/useAuth";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

const AllUsers = () => {
  const { users } = useAuth();
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    users ? setUserList(users) : setUserList([]);
  }, [users]);
  const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
  useDocumentTitle("Admin - All Users");
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-200 min-h-screen">
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
        {/* Filter */}
        <div className="w-11/12 xl:w-2/3 mx-auto flex items-center gap-2 justify-end py-3">
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
                  {userList?.map((user) => (
                    <tr key={userList.indexOf(user)}>
                      {/* SL */}
                      <th className="bg-white dark:bg-slate-800 px-2 text-center">
                        {userList.indexOf(user) + 1}
                      </th>
                      <td className="bg-white dark:bg-slate-800 px-2">
                        <div>
                          {/* Name */}
                          <Link
                            to={`/user/${user?.uid}`}
                            className="hover:text-orange-600"
                          >
                            <div className="font-bold mb-2">{user?.name}</div>
                          </Link>
                          {/* Email */}
                          <div className="font-bold">{user?.email}</div>
                          {/* ID */}
                          <div className="text-sm">{user?.stu_id}</div>
                        </div>
                      </td>
                      <th className="bg-white dark:bg-slate-800 px-2">
                        <div className="flex flex-col items-center justify-center gap-3">
                          <Link
                            to={`/user/${user?.uid}`}
                            className="btn btn-sm text-white hover:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 border-none"
                          >
                            Profile
                          </Link>
                          <Link
                            to={`/admin/certificates/${user?.stu_id}`}
                            className="btn btn-sm text-white hover:text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 border-none"
                          >
                            Certificates
                          </Link>
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
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userList?.map((user) => (
                    <tr key={userList.indexOf(user)}>
                      {/* SL */}
                      <th className="bg-white dark:bg-slate-800 text-center">
                        {userList.indexOf(user) + 1}
                      </th>
                      <td className="bg-white dark:bg-slate-800">
                        <div className="flex items-center space-x-3">
                          {user?.user_img === "" ||
                          user?.user_img === "default" ? (
                            <>
                              {/* Image Placeholder */}
                              <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content mask mask-squircle w-12">
                                  <span className="text-xl">
                                    {user?.display_name
                                      ? user?.display_name[0]
                                      : user?.name[0]}
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
                                      user?.user_img
                                        ? `https://static.cpc.daffodilvarsity.edu.bd/${user?.user_img}`
                                        : ""
                                    }
                                    alt={user?.name}
                                  />
                                </div>
                              </div>
                            </>
                          )}

                          {/* Name */}
                          <Link
                            to={`/user/${user?.uid}`}
                            className="hover:text-orange-600"
                          >
                            <div className="font-bold">{user?.name}</div>
                          </Link>
                        </div>
                      </td>
                      <td className="bg-white dark:bg-slate-800">
                        {/* Email */}
                        <div className="font-bold">{user.email}</div>
                        {/* ID */}
                        <div className="text-sm">{user?.stu_id}</div>
                      </td>
                      <th className="bg-white dark:bg-slate-800">
                        <div className="flex items-center justify-center gap-3">
                          <Link
                            to={`/user/${user?.uid}`}
                            className="btn btn-sm text-white hover:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 border-none"
                          >
                            Profile
                          </Link>
                          <Link
                            to={`/admin/certificates/${user?.stu_id}`}
                            className="btn btn-sm text-white hover:text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 border-none"
                          >
                            Certificates
                          </Link>
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
    </div>
  );
};

export default AllUsers;
