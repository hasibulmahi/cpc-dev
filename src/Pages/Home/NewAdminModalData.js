import React from "react";
import newAdmin1 from "../../Media/Images/new-admin1.png";
import newAdmin2 from "../../Media/Images/new-admin2.png";
import newAdmin3 from "../../Media/Images/new-admin3.png";
import newAdmin4 from "../../Media/Images/new-admin4.png";
import newAdmin5 from "../../Media/Images/new-admin5.png";
import newAdmin6 from "../../Media/Images/new-admin6.png";

const NewAdminModalData = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 xl:gap-y-10 mt-10">
      <div className="text-slate-700 dark:text-slate-200">
        <ul className="list-disc list-inside">
          <li className="xl:mb-2 last:mb-0">
            Navigate to Dashboard through Navbar.
          </li>
          <li className="xl:mb-2 last:mb-0">Access Dashboard.</li>
        </ul>
      </div>
      <div className="xl:col-span-2">
        <img
          src={newAdmin1}
          alt="Events"
          className="w-full rounded-md shadow"
        />
      </div>
      <div className="text-slate-700 dark:text-slate-200 mt-4 xl:mt-0">
        <ul className="list-disc list-inside">
          <li className="xl:mb-2 last:mb-0">
            Create New Event either from{" "}
            <span className="font-bold">Dashboard</span> or{" "}
            <span className="font-bold">Events</span> page
          </li>
          <li className="xl:mb-2 last:mb-0 text-red-600">
            NB. Start date shall not be more than 99 days from current date.
          </li>
          <li className="xl:mb-2 last:mb-0 text-red-600">
            NB. Gap between Start date and End date shall not exceed 99 days.
          </li>
        </ul>
      </div>
      <div className="xl:col-span-2">
        <img
          src={newAdmin2}
          alt="Events"
          className="w-full rounded-md shadow"
        />
      </div>
      <div className="text-slate-700 dark:text-slate-200 mt-4 xl:mt-0">
        <ul className="list-disc list-inside">
          <li className="xl:mb-2 last:mb-0">List All Events</li>
          <li className="xl:mb-2 last:mb-0">
            Delete Events either from{" "}
            <span className="font-bold">Dashboard</span> or{" "}
            <span className="font-bold">Events</span> page
          </li>
        </ul>
      </div>
      <div className="xl:col-span-2">
        <img
          src={newAdmin3}
          alt="Events"
          className="w-full rounded-md shadow"
        />
      </div>
      <div className="text-slate-700 dark:text-slate-200 mt-4 xl:mt-0">
        <ul className="list-disc list-inside">
          <li className="xl:mb-2 last:mb-0">Promote or Demote an User/Admin</li>
          <li className="xl:mb-2 last:mb-0">Filter by All, User & Admin</li>
          <li className="xl:mb-2 last:mb-0">Filter by Name or ID</li>
        </ul>
      </div>
      <div className="xl:col-span-2">
        <img
          src={newAdmin4}
          alt="Events"
          className="w-full rounded-md shadow"
        />
      </div>
      <div className="text-slate-700 dark:text-slate-200 mt-4 xl:mt-0">
        <ul className="list-disc list-inside">
          <li className="xl:mb-2 last:mb-0">Add certificate</li>
          <li className="xl:mb-2 last:mb-0 text-purple-500">
            NB. Inserting information of certificate receiver will be much
            easier if he/she have an account on this site. The certificate will
            also be directly added to his/her profile.
          </li>
        </ul>
      </div>
      <div className="xl:col-span-2">
        <img
          src={newAdmin5}
          alt="Events"
          className="w-full rounded-md shadow"
        />
      </div>
      <div className="text-slate-700 dark:text-slate-200 mt-4 xl:mt-0">
        <ul className="list-disc list-inside">
          <li className="xl:mb-2 last:mb-0">List certificates</li>
          <li className="xl:mb-2 last:mb-0">
            Filter by Name, ID or Program Name
          </li>
          <li className="xl:mb-2 last:mb-0">View/Delete certificates</li>
        </ul>
      </div>
      <div className="xl:col-span-2">
        <img
          src={newAdmin6}
          alt="Events"
          className="w-full rounded-md shadow"
        />
      </div>
    </div>
  );
};

export default NewAdminModalData;
