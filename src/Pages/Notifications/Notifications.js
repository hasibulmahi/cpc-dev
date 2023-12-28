import React from "react";
import ComingSoon from "../../Components/ComingSoon/ComingSoon";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

const Notifications = () => {
  useDocumentTitle("Notifications");
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
        <ComingSoon></ComingSoon>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Notifications;
