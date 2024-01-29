import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import useAuth from "../../Hooks/useAuth";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import SocialLinks from "../../Components/SocialLinks";
import Countdown from "react-countdown";

const Event = () => {
  const eventId = useParams().eventId;
  const { eventsList } = useAuth();
  let event1 = eventsList.filter((x) => x.slug === eventId);
  let event = event1[0];
  useDocumentTitle(`Event - ${event?.title}`);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  if (!event) {
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

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>You are good to go!</span>;
    } else {
      // Render a countdown
      return (
        <div className="flex justify-center xl:gap-5 gap-2 mb-5 items-center">
          <div className="xl:p-5 md:p-3 p-2 bg-orange-500 text-white rounded-lg xl:text-lg text-[10px] flex flex-col text-center">
            <span>{days}</span>
            <span>Days</span>
          </div>
          <div className="xl:p-5 md:p-3 p-2 bg-orange-500 text-white rounded-lg xl:text-lg text-[10px] flex flex-col text-center">
            <span>{hours}</span>
            <span>Hours</span>
          </div>
          <div className="xl:p-5 md:p-3 p-2 bg-orange-500 text-white rounded-lg xl:text-lg text-[10px] flex flex-col text-center">
            <span>{minutes}</span>
            <span>Minutes</span>
          </div>
          <div className="xl:p-5 md:p-3 p-2 bg-orange-500 text-white rounded-lg xl:text-lg text-[10px] flex flex-col text-center">
            <span>{seconds}</span>
            <span>Seconds</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-200">
      {/* Navbar */}
      <div>
        <div className="hidden xl:block">
          <Navbar />
          <div className="h-12 2xl:h-16"></div>
        </div>
        <div className="xl:hidden">
          <NavbarMini></NavbarMini>
        </div>
      </div>

      <div className="mt-5 md:mt-16 min-h-[50vh] md:min-h-[70vh] w-11/12 xl:w-2/3 rounded-md mx-auto">
        {/* <Countdown date={Date.now() + 100000000} renderer={renderer} /> */}
        <div className="flex justify-end my-3"></div>
        <div className="rounded-lg shadow-sm mb-5">
          <img
            src={event?.thumbnail}
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
            <div dangerouslySetInnerHTML={{ __html: event?.description }} />
            {event?.speacker_name && (
              <div className="my-5">
                <div>
                  💢 Speaker,
                  <br />
                  {event?.speaker_name}
                </div>
                <div>{event?.speaker_designation}</div>
              </div>
            )}
            <div className="my-5">
              {event?.registration_link && (
                <div>📌 Registration link: {event?.registration_link}</div>
              )}
              {event?.note && <div>Note: {event?.registration_note}</div>}
            </div>
            <div>
              {event?.started_date && <div>🗓 Date: {event?.started_date}</div>}
              {event?.platform && <div>♻️ Platform: {event?.platform}</div>}
              {/* <div>⏰ Time: {event?.started_time}</div> */}
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-5">
        <a
          className="text-lg bg-red-500 text-white py-1 px-5 rounded-md cursor-pointer hover:bg-red-600 hover:text-white"
          href={event?.registration_link}
          target="_blank"
        >
          Register
        </a>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Event;
