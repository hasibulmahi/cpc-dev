import React, { useState } from "react";
import { message } from "antd";
import "./NewEvent.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { DatePicker, Input } from "antd";
import DefaultCoverB64 from "../../Components/EventsCarousel/DefaultCoverB64";
import http from "../../BaseUrl/http";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const { TextArea } = Input;

const formValidate = (flags, uid, eventID, navigate, toggleRefresh) => {
  document.getElementById("eventTitle").value === ""
    ? (flags.title = true)
    : (flags.title = false);
  document.getElementById("eventStartDate").value === ""
    ? (flags.startDate = true)
    : (flags.startDate = false);
  document.getElementById("eventEndDate").value === ""
    ? (flags.endDate = true)
    : (flags.endDate = false);
  document.getElementById("eventDescription").value === ""
    ? (flags.description = true)
    : (flags.description = false);
  !document.getElementById("coverImage").files.length > 0
    ? (flags.cover = true)
    : (flags.cover = false);
  !document.getElementById("cover-image")
    ? (flags.cover = true)
    : (flags.cover = false);

  if (Object.values(flags).every((value) => value === false)) {
    if (
      document
        .getElementById("event-submit-button")
        .classList.contains("custom-shake")
    ) {
      document
        .getElementById("event-submit-button")
        .classList.remove("custom-shake");
    }
    const title = document.getElementById("eventTitle").value;
    const startDate = new Date(
      `${document.getElementById("eventStartDate").value}, 00:00:00`
    ).getTime();
    const endDate = new Date(
      `${document.getElementById("eventEndDate").value}, 23:59:59`
    ).getTime();
    const description = document.getElementById("eventDescription").value;
    const coverImage = document.getElementById("cover-image").src;

    //events data
    const data = {
      uid,
      eventID,
      title,
      startDate,
      endDate,
      description,
      coverImage,
    };

    http
      .post("/createEvent", data)
      .then((res) => {
        if (res.data.status === 200) {
          message.success("Event Created Successfully");
        } else {
          message.error("Event Creation Failed");
        }
      })
      .then(toggleRefresh())
      .catch((error) =>
        message.error(`Event Creation Failed. ${error.message}`)
      )
      .finally(() => {
        navigate("/forum/events");
        window.location.reload();
      });
  } else {
    document
      .getElementById("event-submit-button")
      .classList.add("custom-shake");
  }

  return flags;
};

const errorRenderer = (error, coverSize = 0) => {
  let errorOut = "";
  if (error === "title") {
    errorOut = "Please Insert a title";
  } else if (error === "startDate & endDate") {
    errorOut = "Please Insert a start & end date";
  } else if (error === "startDate") {
    errorOut = "Please Insert a start date";
  } else if (error === "endDate") {
    errorOut = "Please Insert an end date";
  } else if (error === "description") {
    errorOut = "Please Insert a description";
  } else if (error === "cover") {
    errorOut = "Please Insert a cover or load a default one";
  } else if (error === "cover-size") {
    errorOut = `Maximum filesize is ${Math.floor(coverSize / 1024)} Mb`;
  }
  return (
    <>
      <span className="text-xs text-error">({errorOut}) </span>
      <span className="font-bold text-error inline-flex custom-bounce">!</span>
    </>
  );
};

const NewEvent = () => {
  const { user } = useAuth();

  const navigate = useNavigate();
  const { randomIDGenerator, toggleRefresh } = useAuth();
  const maxCoverSize = 5120; // In Kilobyte
  const [coverImage, setCoverImage] = useState("");
  const [coverImageSize, setCoverImageSize] = useState(0);
  const [formError, setFormError] = useState({
    title: false,
    startDate: false,
    endDate: false,
    description: false,
    cover: false,
    coverSize: false,
  });

  const handleCover = () => {
    const file = document.getElementById("coverImage").files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        setCoverImage(reader.result);
        setCoverImageSize(Math.ceil(file.size / 1024));
        if (Math.ceil(file.size / 1024) > maxCoverSize) {
          setFormError({ ...formError, coverSize: true });
        } else {
          setFormError({ ...formError, coverSize: false });
        }
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDefaultCover = () => {
    const imgBase64 = DefaultCoverB64();
    const stringLength = imgBase64.length - "data:image/png;base64,".length;
    const sizeInKB = Math.ceil(
      (4 * Math.ceil(stringLength / 3) * 0.5624896334383812) / 1000
    );
    setCoverImage(imgBase64);
    setCoverImageSize(sizeInKB);
  };

  useEffect(() => {
    const dropArea = document.querySelector(".drag-area");
    const dropAreaMain = document.getElementById("drag-area-main");
    const validImages = ["image/png", "image/jpg", "image/jpeg"];
    dropArea?.addEventListener("dragover", (e) => {
      e.preventDefault();
      if (dropAreaMain) {
        dropAreaMain.classList.remove("hover:border-slate-400");
        dropAreaMain.classList.add("border-blue-400");
      }
    });
    dropArea?.addEventListener("dragleave", (e) => {
      e.preventDefault();
      if (dropAreaMain) {
        dropAreaMain.classList.remove("border-blue-400");
        dropAreaMain.classList.add("hover:border-slate-400");
      }
    });
    dropArea?.addEventListener("drop", (e) => {
      e.preventDefault();
      let files = e?.dataTransfer?.files;
      let file = files[0];
      if (files.length > 1) {
        message.warning("Only one cover image is allowed");
      } else {
        file = files[0];
      }
      if (validImages.includes(file.type)) {
        setCoverImageSize(file.size / 1024);
        if (Math.ceil(file.size / 1024) > maxCoverSize) {
          setFormError({ ...formError, coverSize: true });
        } else {
          setFormError({ ...formError, coverSize: false });
        }
        let filereader = new FileReader();
        filereader.onload = () => {
          let fileB64 = filereader.result;
          setCoverImage(fileB64);
        };
        filereader.readAsDataURL(file);
      } else {
        message.error("Only image files are allowed.");
      }
    });
  }, [coverImage, formError]);

  useDocumentTitle("Admin - New Event");

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

      <div className="mt-5 md:mt-16 min-h-[50vh] md:min-h-[70vh]">
        <div className="bg-white dark:bg-slate-800 w-11/12 xl:w-2/3 rounded-md shadow-sm p-3 mx-auto grid grid-cols-1 xl:grid-cols-3 gap-y-5 xl:gap-5">
          <div className="col-span-2 p-3">
            {/* Title */}
            <div>
              <label className="label">
                <span className="label-text text-slate-700 dark:text-slate-300 font-medium">
                  Title {formError.title === true ? errorRenderer("title") : ""}
                </span>
              </label>
              <Input
                autoComplete="off"
                placeholder="Type Title"
                className="rounded-md"
                id="eventTitle"
              />
            </div>
            <div className="mt-3">
              <label className="label">
                <span className="label-text text-slate-700 dark:text-slate-300 font-medium">
                  Event Duration{" "}
                  {formError.startDate === true && formError.endDate === true
                    ? errorRenderer("startDate & endDate")
                    : formError.startDate === true
                    ? errorRenderer("startDate")
                    : formError.endDate === true
                    ? errorRenderer("endDate")
                    : ""}
                </span>
              </label>
              {/* Start Date */}
              <div className="grid grid-cols-11">
                <div className="col-span-5">
                  <DatePicker
                    className="rounded-md w-full"
                    id="eventStartDate"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-slate-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
                  </svg>
                </div>
                {/* End Date */}
                <div className="form-control col-span-5">
                  <DatePicker className="rounded-md w-full" id="eventEndDate" />
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="mt-3">
              <label className="label">
                <span className="label-text text-slate-700 dark:text-slate-300 font-medium">
                  Description{" "}
                  {formError.description === true
                    ? errorRenderer("description")
                    : ""}
                </span>
              </label>
              <TextArea
                autoComplete="off"
                style={{ height: 120 }}
                placeholder="Enter Description"
                className="rounded-md"
                id="eventDescription"
              />
            </div>
          </div>
          {/* Cover Image */}
          <div>
            <label className="label">
              <span className="label-text text-slate-700 dark:text-slate-300 font-medium">
                Cover Image{" "}
                {formError.cover === true ? errorRenderer("cover") : ""}
                {formError.coverSize === true
                  ? errorRenderer("cover-size", maxCoverSize)
                  : ""}
              </span>
            </label>
            <div>
              <div className="hidden">
                <input
                  type="file"
                  name="Cover"
                  id="coverImage"
                  accept="image/png, image/jpg, image/jpeg"
                  onChange={handleCover}
                />
              </div>
              <button
                onClick={() => {
                  document.getElementById("coverImage").click();
                }}
                className="w-full"
              >
                <div className="w-full">
                  {!coverImage ? (
                    <div
                      id="drag-area-main"
                      className="text-slate-700 dark:text-slate-300 font-medium text-center border-2 hover:border-slate-400 border-dashed p-5 rounded-md transition ease-in-out duration-500 drag-area"
                    >
                      Upload Cover
                    </div>
                  ) : (
                    ""
                  )}
                  {coverImage ? (
                    <div className="flex items-center">
                      <span className="text-xs">0 Mb</span>
                      <progress
                        className={
                          coverImageSize <= maxCoverSize
                            ? "progress progress-success w-full"
                            : "progress progress-error w-full"
                        }
                        value={coverImageSize ? coverImageSize : ""}
                        max={maxCoverSize}
                      ></progress>
                      <span
                        className={
                          coverImageSize <= maxCoverSize
                            ? "text-xs"
                            : "text-xs text-error"
                        }
                      >
                        {(coverImageSize / 1024).toFixed(2)} Mb
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {coverImage ? (
                  <div className="rounded-md mt-5 drag-area">
                    <img
                      id="cover-image"
                      src={coverImage}
                      alt="Cover"
                      className="w-full rounded-md"
                    />
                  </div>
                ) : (
                  ""
                )}
              </button>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <button
                  className="text-slate-700 dark:text-slate-300 font-medium text-center border-2 border-dashed hover:border-blue-400 p-2 rounded-md transition ease-in-out duration-500"
                  onClick={() => {
                    handleDefaultCover();
                  }}
                >
                  Load Default
                </button>
                <button
                  className="text-slate-700 dark:text-slate-300 font-medium text-center border-2 border-dashed hover:border-red-400 p-2 rounded-md transition ease-in-out duration-500"
                  onClick={() => {
                    setCoverImage("");
                    setCoverImageSize(0);
                  }}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 xl:w-2/3 p-3 mx-auto flex items-center justify-center">
          <button
            id="event-submit-button"
            className="btn btn-sm text-white hover:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 border-none"
            onClick={() => {
              const validatedError = formValidate(
                formError,
                user?.uid,
                randomIDGenerator(12),
                navigate,
                toggleRefresh
              );
              setFormError({ ...formError, ...validatedError });
            }}
          >
            Submit
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default NewEvent;
