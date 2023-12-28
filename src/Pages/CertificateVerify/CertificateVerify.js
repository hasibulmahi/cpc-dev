import { Image } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import useAuth from "../../Hooks/useAuth";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

const CertificateVerify = () => {
  const { certificates } = useAuth();
  const [certificate, setCertificate] = useState([]);
  const id = useParams().id?.toLowerCase();
  const certificateLoad = (id) => {
    if (id !== "") {
      const filteredCertificate = certificates.filter(
        (x) => x.certificate_id.toLowerCase() === id
      );
      if (filteredCertificate?.length === 0) {
        setCertificate([{ certificate_id: "empty" }]);
      } else {
        setCertificate(filteredCertificate);
      }
    } else {
      setCertificate([]);
    }
  };
  useEffect(() => {
    if (id) {
      certificateLoad(id.toLowerCase());
    }
  }, [id, certificates]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useDocumentTitle("Certificate Verification");
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

      {/* Body */}
      <div className="min-h-[50vh] md:min-h-[70vh]">
        <div className="">
          <div className="flex justify-center mt-5 md:mt-16">
            <div className="bg-white dark:bg-slate-800 w-3/4 xl:w-2/5 px-3 py-2 flex items-center rounded-md shadow">
              {/* Search Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600 hidden md:block"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
              {/* Search Box */}
              <input
                type="text"
                id="certificate-verify-field"
                className="mx-2 outline-0 w-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium md:font-semibold uppercase"
                placeholder="Enter Certificate No."
                autoComplete="off"
                defaultValue={id ? id : ""}
                onBlur={(e) => {
                  certificateLoad(e?.target.value.toLowerCase());
                }}
                onKeyUp={(key) => {
                  if (key.code === "Enter" || key.code === "NumpadEnter") {
                    certificateLoad(key?.target.value.toLowerCase());
                  }
                }}
              />
              {/* Cross Icon */}
              <button
                onClick={() => {
                  document.getElementById("certificate-verify-field").value =
                    "";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600 hidden md:block hover:stroke-orange-700 dark:hover:stroke-orange-600"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              {/* Search Button Phone */}
              <button
                className="block md:hidden"
                onClick={() => {
                  certificateLoad(
                    document
                      .getElementById("certificate-verify-field")
                      .value.toLowerCase()
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="10" cy="10" r="7" />
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
              </button>
            </div>
          </div>

          {/* Result */}
          {certificate[0]?.certificate_id ? (
            certificate[0]?.certificate_id === "empty" ? (
              <div className="mt-16 text-center font-semibold text-2xl text-slate-500">
                Certificate Not Found{" "}
                <div className="text-red-500 custom-bounce inline-flex">!</div>
              </div>
            ) : (
              <div className="grid grid-cols-1 xl:grid-cols-4 mt-16 xl:w-3/4 mx-auto p-5 gap-5">
                {/* Certificate Holder Info */}
                <div>
                  <div>
                    <div className="text-xs mb-0.5 text-slate-600 dark:text-slate-400">
                      Certificate Serial
                    </div>
                    <div className="text-xl mb-3 text-slate-700 dark:text-slate-300 font-medium uppercase">
                      {certificate[0].certificate_id}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs mb-0.5 text-slate-600 dark:text-slate-400">
                      Certificate Holder Name
                    </div>
                    <div className="text-xl mb-3 text-slate-700 dark:text-slate-300 font-medium">
                      {certificate[0].stu_name}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs mb-0.5 text-slate-600 dark:text-slate-400">
                      ID
                    </div>
                    <div className="text-xl mb-3 text-slate-700 dark:text-slate-300 font-medium">
                      {certificate[0].stu_id}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs mb-0.5 text-slate-600 dark:text-slate-400">
                      Email
                    </div>
                    <div className="text-xl mb-3 text-slate-700 dark:text-slate-300 font-medium">
                      {certificate[0].stu_email}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs mb-0.5 text-slate-600 dark:text-slate-400">
                      Certificate offered for
                    </div>
                    <div className="text-xl mb-3 text-slate-700 dark:text-slate-300 font-medium">
                      {certificate[0].program_name}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs mb-0.5 text-slate-600 dark:text-slate-400">
                      Certificate Status
                    </div>
                    <div className="text-xl mb-3 text-slate-700 dark:text-slate-300 font-medium">
                      Verified &#9989;
                    </div>
                  </div>
                </div>
                {/* Certificate Image */}
                <div className="xl:col-span-3 max-w-max mx-auto">
                  <Image
                    className="rounded-lg"
                    src={`https://static.cpc.daffodilvarsity.edu.bd/${certificate[0].certificate_image}`}
                  />
                </div>
              </div>
            )
          ) : (
            <div className="mt-16 text-center font-semibold text-2xl text-slate-500">
              Search certificate by certificate ID
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default CertificateVerify;
