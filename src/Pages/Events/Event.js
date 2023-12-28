import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import useAuth from "../../Hooks/useAuth";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

const Event = () => {
  const eventId = useParams().eventId;
  const { events } = useAuth();
  let event = events.filter(
    (x) => x.event_id.toLowerCase() === eventId.toLowerCase()
  );
  event = event[0]?.event_id ? event[0] : [];
  useDocumentTitle(`Event - ${event?.title}`);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  if (!/^\b[a-zA-Z0-9_]+\b$/.test(eventId) || event?.length === 0) {
    return (
      <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-200 h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl font-semibold text-slate-600 dark:text-slate-400">
            Event Not Found
          </div>
          <div className="mt-2 text-slate-600 dark:text-slate-400">
            Check if the Link/ID is correct.{" "}
            <Link
              to="/forum/events"
              className="hover:text-orange-500 font-semibold"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    );
  }

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

      <div className="mt-5 md:mt-16 min-h-[50vh] md:min-h-[70vh] w-11/12 xl:w-2/3 rounded-md mx-auto">
        <div className="rounded-lg shadow-sm mb-5">
          <img
            src={`https://static.cpc.daffodilvarsity.edu.bd/${event?.cover_image}`}
            alt="Event Cover"
            className="w-full rounded-lg shadow-sm"
          />
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-5">
          <div className="text-xl font-semibold text-slate-600 dark:text-slate-200">
            {event?.title}
          </div>
          <div className="divider before:bg-slate-200 dark:before:bg-slate-700 after:bg-slate-200 dark:after:bg-slate-700 xl:hidden"></div>
          <div className="text-slate-400 text-sm whitespace-pre-wrap break-words">
            {event?.description}
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

export default Event;
