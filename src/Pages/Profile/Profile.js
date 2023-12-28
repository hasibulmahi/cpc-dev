import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Badge from "../../Components/Badge/Badge";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import ProfileCertificates from "../../Components/ProfileCertificates/ProfileCertificates";
import useAuth from "../../Hooks/useAuth";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import defaultCover from "../../Media/Images/def_cover.jpg";

const renderDate = (date = 0) => {
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
  const d = new Date(date);
  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  if (date !== 0) {
    return `${day} ${month}, ${year}`;
  }
};

const Profile = () => {
  const { users, certificates } = useAuth();
  const uid = useParams().id;
  let user = users?.filter((x) => x.uid === uid);
  user = user[0]?.uid ? user[0] : [];
  const [userCertificates, setUserCertificates] = useState([]);
  useEffect(() => {
    let userCertificates = certificates?.filter(
      (x) => x.stu_id === user.stu_id
    );
    setUserCertificates(userCertificates);
  }, [user.stu_id, certificates]);
  useDocumentTitle(
    `${user?.display_name ? user?.display_name : user?.name}'s profile`
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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

      <div className="mt-5 md:mt-10 min-h-[50vh] md:min-h-[70vh] w-11/12 xl:w-2/3 rounded-md mx-auto">
        {/* Cover Image */}
        <div
          className="bg-cover bg-center h-28 md:h-60 xl:h-60 2xl:h-80 rounded-md shadow-sm"
          style={
            user?.user_cover === "" || user?.user_cover === "default"
              ? { backgroundImage: `url(${defaultCover})` }
              : user?.user_cover
              ? {
                  backgroundImage: `url(https://static.cpc.daffodilvarsity.edu.bd/${user?.user_cover})`,
                }
              : { backgroundImage: `url(${defaultCover})` }
          }
        ></div>
        <div className="relative">
          <div className="grid grid-cols-5 md:grid-cols-10 2xl:grid-cols-12 grid-rows-2 -my-9 md:-my-[4.5rem] xl:-my-20 2xl:-my-[5.5rem]">
            {/* DP */}
            <div className="col-span-1 md:col-span-2 2xl:col-span-2 row-span-2 flex items-center justify-end">
              {user?.user_img === "" || user?.user_img === "default" ? (
                <>
                  {/* Image Placeholder */}
                  <div className="bg-white dark:bg-slate-800 p-1.5 md:p-2 xl:p-3 rounded-t-full">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content mask mask-circle w-14 md:w-28 xl:w-32 2xl:w-36">
                        <span className="text-5xl">
                          {user?.display_name
                            ? user?.display_name[0]
                            : user?.name[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Image */}
                  <div className="bg-white dark:bg-slate-800 p-1.5 md:p-2 xl:p-3 rounded-t-full shadow-sm">
                    <div className="avatar rounded-full">
                      <div className="mask mask-circle w-14 md:w-28 xl:w-32 2xl:w-36 h-14 md:h-28 xl:h-32 2xl:h-36">
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
                  </div>
                </>
              )}
            </div>
            {/* Badge */}
            <div className="col-span-4 md:col-span-8 2xl:col-span-10"></div>
            <div className="col-span-4 md:col-span-8 2xl:col-span-10 pt-1 md:pt-3 pl-1 md:pl-2 xl:pl-3">
              <div className="bg-white dark:bg-slate-800 shadow-sm h-full rounded-md flex items-center px-3">
                {/* Badges */}
                {<Badge status={user?.role}></Badge>}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-20 xl:mt-24 bg-white dark:bg-slate-800 shadow-sm p-3 grid grid-cols-4 gap-3 rounded-md">
          <div className="col-span-4 xl:col-span-1 grid grid-cols-4 gap-y-2">
            <div className="font-semibold">Name: </div>
            <div className="col-span-3">{user?.name}</div>
            <div className="font-semibold">Email: </div>
            <div className="col-span-3">{user?.email}</div>
            <div className="font-semibold">ID: </div>
            <div className="col-span-3">{user?.stu_id}</div>
            <div className="font-semibold">Phone: </div>
            <div className="col-span-3">{user?.phone}</div>
            <div className="font-semibold">Joined: </div>
            <div className="col-span-3">{renderDate(user?.created_at)}</div>
          </div>
          <div className="col-span-4 md:col-span-3 hidden grid-cols-3">
            <div>a</div>
            <div>a</div>
            <div>a</div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 xl:grid-cols-2 gap-10">
          <ProfileCertificates
            certificates={userCertificates}
          ></ProfileCertificates>
        </div>

        <div className="my-20 font-semibold text-2xl text-center text-slate-500">
          More Things Coming Soon . . .
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Profile;
