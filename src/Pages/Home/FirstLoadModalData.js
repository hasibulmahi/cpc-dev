import React from "react";
import firstLoad1 from "../../Media/Images/firstload-help-1.png";
import firstLoad2 from "../../Media/Images/firstload-help-2.png";
import firstLoad3 from "../../Media/Images/firstload-help-3.png";
import firstLoad5_1 from "../../Media/Images/firstload-help-5_1.png";
import firstLoad5_2 from "../../Media/Images/firstload-help-5_2.png";
import firstLoad6_1 from "../../Media/Images/firstload-help-6_1.png";
import firstLoad7 from "../../Media/Images/firstload-help-7.png";
import firstLoad8 from "../../Media/Images/firstload-help-8.png";
import firstLoad9 from "../../Media/Images/firstload-help-9.png";

const FirstLoadModalData = () => {
  return (
    <div>
      <div
        className="p-2 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
        role="alert"
      >
        <span className="font-medium">Info alert!</span> Please read these
        carefully. As, these will be shown only once. Scroll to the bottom to
        dismiss this pop-up.
      </div>
      <h3 className="font-bold text-lg text-slate-600 dark:text-slate-200">
        Hello, User!
      </h3>
      <p className="text-slate-600 dark:text-slate-200">
        Here is a basic rundown of CPC website. <br />
        This site will be usable fully if you are logged in otherwise your
        access will be limited.
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 xl:gap-y-10 mt-10">
        <div className="text-slate-700 dark:text-slate-200">
          <ul className="list-disc list-inside">
            <li className="xl:mb-2 last:mb-0">
              On the homepage, you can see ongoing & upcoming events.
            </li>
            <li className="xl:mb-2 last:mb-0">
              Details will be shown when you Hover/Touch them.
            </li>
          </ul>
        </div>
        <div className="xl:col-span-2">
          <img
            src={firstLoad1}
            alt="Events"
            className="w-full rounded-md shadow"
          />
        </div>
        <div className="text-slate-700 dark:text-slate-200 mt-4 xl:mt-0">
          <ul className="list-disc list-inside">
            <li className="xl:mb-2 last:mb-0">
              On the profile page, you will be able to view your informations.
            </li>
            <li className="xl:mb-2 last:mb-0">
              You can also visit other people's profile page & view their
              information.
            </li>
            <li className="xl:mb-2 last:mb-0">
              Certificates you aquire through CPC will be showcased in your
              profile if an admin uploads them.
            </li>
          </ul>
        </div>
        <div className="xl:col-span-2">
          <img
            src={firstLoad2}
            alt="Profile"
            className="w-full rounded-md shadow"
          />
        </div>
        <div className="text-slate-700 dark:text-slate-200 mt-4 xl:mt-0">
          <ul className="list-disc list-inside">
            <li className="xl:mb-2 last:mb-0">
              You will be able to view details of a certificate by clicking on a
              certificate from profile or by manually searching for certificate
              on <span className="font-bold">Verify Certificate</span> page.
            </li>
            <li className="xl:mb-2 last:mb-0">
              You can also enlarge a certificate by clicking on the image in
              verify certificate page.
            </li>
          </ul>
        </div>
        <div className="xl:col-span-2">
          <img
            src={firstLoad3}
            alt="Verify Certificate"
            className="w-full rounded-md shadow"
          />
        </div>
        <div className="text-slate-700 dark:text-slate-200 mt-4 xl:mt-0">
          <ul className="list-disc list-inside">
            <li className="xl:mb-2 last:mb-0">
              Navigation Button on mobile phones is on lower right part of the
              screen.
            </li>
          </ul>
        </div>
        <div className="xl:col-span-2 grid grid-cols-2 gap-5">
          <img
            src={firstLoad5_1}
            alt="Phone Nav"
            className="w-full rounded-md shadow"
          />
          <img
            src={firstLoad5_2}
            alt="Phone Nav"
            className="w-full rounded-md shadow"
          />
        </div>
        <div className="text-slate-700 dark:text-slate-200 mt-4 xl:mt-0">
          <ul className="list-disc list-inside">
            <li className="xl:mb-2 last:mb-0">
              You can customize how your name will be shown to you in navigation
              on phones.
            </li>
            <li className="xl:mb-2 last:mb-0">
              This will also change the letter in default avatar.
            </li>
          </ul>
        </div>
        <div className="xl:col-span-2 grid grid-cols-2 gap-5">
          <img
            src={firstLoad5_2}
            alt="Display Name"
            className="w-full rounded-md shadow"
          />
          <img
            src={firstLoad6_1}
            alt="Display Name"
            className="w-full rounded-md shadow"
          />
        </div>
        <div className="text-slate-700 dark:text-slate-200 mt-4 xl:mt-0">
          <ul className="list-disc list-inside">
            <li className="xl:mb-2 last:mb-0">
              If you want, you can change your profile & cover photo from{" "}
              <span className="font-bold">Settings - General</span> page.
            </li>
          </ul>
        </div>
        <div className="xl:col-span-2">
          <img
            src={firstLoad7}
            alt="General Settings"
            className="w-full rounded-md shadow"
          />
        </div>
        <div className="text-slate-700 dark:text-slate-200 mt-4 xl:mt-0">
          <ul className="list-disc list-inside">
            <li className="xl:mb-2 last:mb-0">
              If you want, you can change your information{" "}
              <span className="font-bold">Settings - Account</span> page.
            </li>
          </ul>
        </div>
        <div className="xl:col-span-2">
          <img
            src={firstLoad8}
            alt="Account Settings"
            className="w-full rounded-md shadow"
          />
        </div>
        <div className="text-slate-700 dark:text-slate-200 mt-4 xl:mt-0">
          <ul className="list-disc list-inside">
            <li className="xl:mb-2 last:mb-0">
              If you face any problem regarding Login/Logout, go to{" "}
              <span className="font-bold">Settings</span> page & click{" "}
              <span className="font-bold">Fix Login/Logout</span> button.
            </li>
          </ul>
        </div>
        <div className="xl:col-span-2">
          <img
            src={firstLoad9}
            alt="Account Settings"
            className="w-full rounded-md shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstLoadModalData;
