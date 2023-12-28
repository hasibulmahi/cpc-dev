import { message } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../BaseUrl/http";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import useAuth from "../../Hooks/useAuth";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

const formValidate = (
  flags,
  certificate_id,
  approved_by,
  navigate,
  toggleRefresh
) => {
  document.getElementById("c-name").value === ""
    ? (flags.name = true)
    : (flags.name = false);
  document.getElementById("c-id").value === ""
    ? (flags.id = true)
    : (flags.id = false);
  document.getElementById("c-email").value === ""
    ? (flags.email = true)
    : (flags.email = false);
  document.getElementById("c-program").value === ""
    ? (flags.program = true)
    : (flags.program = false);
  !document.getElementById("c-certificate-input").files.length > 0
    ? (flags.certificate = true)
    : (flags.certificate = false);
  !document.getElementById("c-certificate-preview")
    ? (flags.certificate = true)
    : (flags.certificate = false);

  if (Object.values(flags).every((value) => value === false)) {
    if (
      document
        .getElementById("certificate-submit-button")
        .classList.contains("custom-shake")
    ) {
      document
        .getElementById("certificate-submit-button")
        .classList.remove("custom-shake");
    }
    const stu_id = document.getElementById("c-id").value;
    const stu_name = document.getElementById("c-name").value;
    const stu_email = document.getElementById("c-email").value;
    const program_name = document.getElementById("c-program").value;
    const certificate_image = document.getElementById(
      "c-certificate-preview"
    ).src;

    // certificate data
    const data = {
      certificate_id,
      stu_id,
      stu_name,
      stu_email,
      program_name,
      approved_by,
      certificate_image,
    };

    http
      .post("/createCertificate", data)
      .then((res) => {
        if (res.data.status === 200) {
          message.success("Certificate Created Successfully");
        } else {
          message.error("Certificate Creation Failed");
        }
      })
      .then(toggleRefresh())
      .catch((error) =>
        message.error(`Certificate Creation Failed. ${error.message}`)
      )
      .finally(() => {
        navigate("/admin/certificates");
        window.location.reload();
      });
  } else {
    document
      .getElementById("certificate-submit-button")
      .classList.add("custom-shake");
  }

  return flags;
};

const errorRenderer = (error, certificateSize = 0) => {
  let errorOut = "";
  if (error === "name") {
    errorOut = "Please insert student's name";
  } else if (error === "id") {
    errorOut = "Please insert student's ID";
  } else if (error === "email") {
    errorOut = "Please insert student's email";
  } else if (error === "program") {
    errorOut =
      "Please insert the name of the program student is being certified for";
  } else if (error === "certificate") {
    errorOut = "Please insert certificate image";
  } else if (error === "certificate-size") {
    errorOut = `Maximum filesize is ${Math.floor(certificateSize / 1024)} Mb`;
  }
  return (
    <>
      <span className="text-xs text-error">({errorOut}) </span>
      <span className="font-bold text-error inline-flex custom-bounce">!</span>
    </>
  );
};

const NewCertificate = () => {
  const navigate = useNavigate();
  const { randomIDGenerator, toggleRefresh, users, user } = useAuth();
  const maxCertificateSize = 5120; // In Kilobyte
  const [certificateImage, setCertificateImage] = useState("");
  const [certificateImageSize, setCertificateImageSize] = useState(0);
  const [targetUser, setTargetUser] = useState({ name: "", email: "" });
  const [formError, setFormError] = useState({
    id: false,
    name: false,
    email: false,
    program: false,
    certificate: false,
    certificateSize: false,
  });
  const handleCertificate = () => {
    const file = document.getElementById("c-certificate-input").files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        setCertificateImage(reader.result);
        setCertificateImageSize(Math.ceil(file.size / 1024));
        if (Math.ceil(file.size / 1024) > maxCertificateSize) {
          setFormError({ ...formError, certificateSize: true });
        } else {
          setFormError({ ...formError, certificateSize: false });
        }
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const dropArea = document.querySelector(".c-drag-area");
    const dropAreaMain = document.getElementById("c-drag-area-main");
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
        message.warning("Only one certificate is allowed");
      } else {
        file = files[0];
      }
      if (validImages.includes(file.type)) {
        setCertificateImageSize(file.size / 1024);
        if (Math.ceil(file.size / 1024) > maxCertificateSize) {
          setFormError({ ...formError, certificateSize: true });
        } else {
          setFormError({ ...formError, certificateSize: false });
        }
        let filereader = new FileReader();
        filereader.onload = () => {
          let fileB64 = filereader.result;
          setCertificateImage(fileB64);
        };
        filereader.readAsDataURL(file);
      } else {
        message.error("Only image files are allowed.");
      }
    });
  }, [certificateImage, formError]);

  const handleTargetUser = (id) => {
    const target = users.find((x) => x.stu_id === id);
    let x = { name: "", email: "" };
    if (target) {
      x.name = target?.name;
      x.email = target?.email;

      document.getElementById("c-name").value = target?.name;
      setTargetUser(x);
    }
  };
  useDocumentTitle("Admin - New Certificate");
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
        <div className="bg-white dark:bg-slate-800 w-11/12 xl:w-2/3 rounded-md shadow-sm p-3 mx-auto grid grid-cols-1 xl:grid-cols-3 gap-y-5 xl:gap-5">
          <div className="col-span-2 p-3">
            {/* ID */}
            <div>
              <label className="label">
                <span className="label-text text-slate-700 dark:text-slate-300 font-medium">
                  ID {formError.id === true ? errorRenderer("id") : ""}
                </span>
              </label>
              <input
                onBlur={(e) => {
                  handleTargetUser(e?.target.value);
                }}
                onKeyUp={(key) => {
                  if (key.code === "Enter" || key.code === "NumpadEnter") {
                    handleTargetUser(key?.target.value);
                  }
                }}
                autoComplete="off"
                placeholder="ID"
                className="rounded-md w-full px-3 py-1 border ring-2 ring-transparent outline-none border-slate-300 hover:border-blue-400 focus:border-blue-400 focus:ring-blue-100 transition duration-200 dark:text-slate-800"
                id="c-id"
              />
            </div>
            {/* Name */}
            <div className="mt-3">
              <label className="label">
                <span className="label-text text-slate-700 dark:text-slate-300 font-medium">
                  Name {formError.name === true ? errorRenderer("name") : ""}
                </span>
              </label>
              <input
                defaultValue={targetUser?.name}
                autoComplete="off"
                placeholder="Name"
                className="rounded-md w-full px-3 py-1 border ring-2 ring-transparent outline-none border-slate-300 hover:border-blue-400 focus:border-blue-400 focus:ring-blue-100 transition duration-200 dark:text-slate-800"
                id="c-name"
              />
            </div>
            {/* Email */}
            <div className="mt-3">
              <label className="label">
                <span className="label-text text-slate-700 dark:text-slate-300 font-medium">
                  Email {formError.email === true ? errorRenderer("email") : ""}
                </span>
              </label>
              <input
                defaultValue={targetUser?.email}
                autoComplete="off"
                placeholder="Email"
                className="rounded-md w-full px-3 py-1 border ring-2 ring-transparent outline-none border-slate-300 hover:border-blue-400 focus:border-blue-400 focus:ring-blue-100 transition duration-200 dark:text-slate-800"
                id="c-email"
              />
            </div>
            {/* Certified For */}
            <div className="mt-3">
              <label className="label">
                <span className="label-text text-slate-700 dark:text-slate-300 font-medium">
                  Program Name{" "}
                  {formError.program === true ? errorRenderer("program") : ""}
                </span>
              </label>
              <input
                autoComplete="off"
                placeholder="Program Name"
                className="rounded-md w-full px-3 py-1 border ring-2 ring-transparent outline-none border-slate-300 hover:border-blue-400 focus:border-blue-400 focus:ring-blue-100 transition duration-200 dark:text-slate-800"
                id="c-program"
              />
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-slate-700 dark:text-slate-300 font-medium">
                Certificate Image{" "}
                {formError.certificate === true
                  ? errorRenderer("certificate")
                  : ""}
                {formError.certificateSize === true
                  ? errorRenderer("certificate-size", maxCertificateSize)
                  : ""}
              </span>
            </label>
            <div>
              <div className="hidden">
                <input
                  type="file"
                  name="Cover"
                  id="c-certificate-input"
                  accept="image/png, image/jpg, image/jpeg"
                  onChange={handleCertificate}
                />
              </div>
              <button
                onClick={() => {
                  document.getElementById("c-certificate-input").click();
                }}
                className="w-full"
              >
                <div className="w-full">
                  {!certificateImage ? (
                    <div
                      id="c-drag-area-main"
                      className="text-slate-700 dark:text-slate-300 font-medium text-center border-2 hover:border-slate-400 border-dashed p-5 rounded-md transition ease-in-out duration-500 c-drag-area"
                    >
                      Upload Certificate
                    </div>
                  ) : (
                    ""
                  )}
                  {certificateImage ? (
                    <div className="flex items-center">
                      <span className="text-xs">0 Mb</span>
                      <progress
                        className={
                          certificateImageSize <= maxCertificateSize
                            ? "progress progress-success w-full"
                            : "progress progress-error w-full"
                        }
                        value={certificateImageSize ? certificateImageSize : ""}
                        max={maxCertificateSize}
                      ></progress>
                      <span
                        className={
                          certificateImageSize <= maxCertificateSize
                            ? "text-xs"
                            : "text-xs text-error"
                        }
                      >
                        {(certificateImageSize / 1024).toFixed(2)} Mb
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {certificateImage ? (
                  <div className="rounded-md mt-5 c-drag-area">
                    <img
                      id="c-certificate-preview"
                      src={certificateImage}
                      alt="Cover"
                      className="w-full rounded-md"
                    />
                  </div>
                ) : (
                  ""
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="w-11/12 xl:w-2/3 p-3 mx-auto flex items-center justify-center">
          <button
            id="certificate-submit-button"
            className="btn btn-sm text-white hover:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 border-none"
            onClick={() => {
              const validatedError = formValidate(
                formError,
                randomIDGenerator(8),
                user?.name,
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

export default NewCertificate;
