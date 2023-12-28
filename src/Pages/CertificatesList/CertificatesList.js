import { message } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../BaseUrl/http";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import useAuth from "../../Hooks/useAuth";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

const handleCertificateDelete = (certificate_id, toggleRefresh) => {
  http
    .delete(`/deleteCertificate/${certificate_id}`)
    .then((res) => {
      if (res?.data?.status === 200) {
        message.success("Certificate Removed");
      } else {
        message.error("Certificate Remove Failed");
      }
    })
    .finally(() => {
      toggleRefresh();
    });
};

const CertificatesList = () => {
  const { certificateId } = useParams();
  const { certificates, toggleRefresh } = useAuth();
  const [modalInfo, setModalInfo] = useState();
  const [certificateList, setCertificateList] = useState([]);
  useEffect(() => {
    certificates ? setCertificateList(certificates) : setCertificateList([]);
  }, [certificates]);
  useEffect(() => {
    if (certificateId) {
      setCertificateList(
        certificates?.filter((x) => x?.stu_id === certificateId)
      );
      document.getElementById("filter-users").value = certificateId;
    }
  }, [certificateId, certificates]);
  const navigate = useNavigate();
  const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
  useDocumentTitle("Admin - All Certificates");
  return (
    <>
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
          <div className="w-11/12 xl:w-3/4 mx-auto flex items-center gap-2 justify-end py-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-slate-600 dark:stroke-slate-200"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
              </svg>
            </div>
            {/* filter input */}
            <div className="bg-white/70 dark:bg-slate-800 rounded-lg p-2 px-1.5">
              <input
                type="text"
                id="filter-users"
                className="mx-2 w-36 outline-0 bg-transparent text-slate-600 dark:text-slate-300 font-medium"
                autoComplete="off"
                onChange={(e) => {
                  if (e?.target.value === "") {
                    setCertificateList(certificates);
                  } else {
                    setCertificateList(
                      certificates?.filter(
                        (x) =>
                          x.stu_name
                            .toLowerCase()
                            .includes(e?.target.value.toLowerCase()) ||
                          x.stu_id
                            .toLowerCase()
                            .includes(e?.target.value.toLowerCase()) ||
                          x.program_name
                            .toLowerCase()
                            .includes(e?.target.value.toLowerCase())
                      )
                    );
                  }
                }}
              />
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 w-11/12 xl:w-3/4 rounded-md shadow-sm mx-auto">
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
                    {/* 1st map  */}
                    {certificateList?.map((x) => (
                      <tr key={certificateList.indexOf(x)}>
                        <th className="bg-white dark:bg-slate-800 px-2 text-center">
                          {certificateList.indexOf(x) + 1}
                        </th>
                        <td className="bg-white dark:bg-slate-800 px-2">
                          <div>
                            {/* Name */}
                            <div className="font-bold mb-2">{x.stu_name}</div>
                            {/* Email */}
                            <div className="font-bold">{x.stu_email}</div>
                            {/* ID */}
                            <div className="text-sm">{x.stu_id}</div>
                            {/* Program */}
                            <div className="text-sm font-bold mt-2">
                              {x.program_name}
                            </div>
                          </div>
                        </td>
                        <th className="bg-white dark:bg-slate-800 px-2">
                          <div className="flex flex-col gap-5 items-center justify-center">
                            <button
                              onClick={() => {
                                navigate(`/certificate/${x.certificate_id}`);
                              }}
                              className="btn btn-sm text-white hover:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 border-none"
                            >
                              &nbsp;&nbsp;View&nbsp;&nbsp;
                            </button>
                            <button
                              onClick={() => {
                                setModalInfo(x);
                                document.getElementById(
                                  "delete-certificates-modal"
                                ).checked = true;
                              }}
                              className="btn btn-sm text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none"
                            >
                              Delete
                            </button>
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
                      <th className="bg-slate-200 dark:bg-slate-600">C. ID</th>
                      <th className="bg-slate-200 dark:bg-slate-600">Name</th>
                      <th className="bg-slate-200 dark:bg-slate-600">ID</th>
                      <th className="bg-slate-200 dark:bg-slate-600">Email</th>
                      <th className="bg-slate-200 dark:bg-slate-600">
                        Program
                      </th>
                      <th className="bg-slate-200 dark:bg-slate-600 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* 2nd map  */}
                    {certificateList?.map((x) => (
                      <tr key={certificateList.indexOf(x)}>
                        <th className="bg-white dark:bg-slate-800 text-center">
                          {certificateList.indexOf(x) + 1}
                        </th>
                        <td className="bg-white dark:bg-slate-800 font-semibold uppercase">
                          {x.certificate_id}
                        </td>
                        <td className="bg-white dark:bg-slate-800 font-semibold">
                          {x.stu_name}
                        </td>
                        <td className="bg-white dark:bg-slate-800 font-semibold">
                          {x.stu_id}
                        </td>
                        <td className="bg-white dark:bg-slate-800 font-semibold">
                          {x.stu_email}
                        </td>
                        <td className="bg-white dark:bg-slate-800 font-semibold">
                          {x.program_name}
                        </td>
                        <td className="bg-white dark:bg-slate-800">
                          <div className="flex gap-2 items-center justify-center">
                            <button
                              onClick={() => {
                                navigate(`/certificate/${x.certificate_id}`);
                              }}
                              className="btn btn-sm text-white hover:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 border-none"
                            >
                              View
                            </button>
                            <button
                              onClick={() => {
                                setModalInfo(x);
                                document.getElementById(
                                  "delete-certificates-modal"
                                ).checked = true;
                              }}
                              className="btn btn-sm text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
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

      {/* Modal */}
      <input
        type="checkbox"
        id="delete-certificates-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box bg-white dark:bg-slate-800">
          <h3 className="font-bold text-lg text-slate-600 dark:text-slate-200">
            Confirm Delete
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-200">
            You are deleting certificate of{" "}
            <span className="font-semibold text-slate-600 dark:text-slate-200">
              {modalInfo?.stu_name}
            </span>{" "}
            offered for{" "}
            <span className="font-semibold text-slate-600 dark:text-slate-200">
              {modalInfo?.program_name}
            </span>
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-200">
            Certificate ID:{" "}
            <span className="font-semibold text-slate-600 dark:text-slate-200 uppercase">
              {modalInfo?.certificate_id}
            </span>
          </p>
          <div className="modal-action">
            <label
              className="btn btn-sm text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 border-none"
              onClick={() => {
                handleCertificateDelete(
                  modalInfo?.certificate_id,
                  toggleRefresh
                );
                document.getElementById(
                  "delete-certificates-modal"
                ).checked = false;
              }}
            >
              Confirm
            </label>
            <label
              htmlFor="delete-certificates-modal"
              className="btn btn-sm text-white hover:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 border-none"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificatesList;
