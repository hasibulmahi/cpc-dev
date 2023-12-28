import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ImageCropper from "../../Components/ImageCropper/ImageCropper";
import useAuth from "../../Hooks/useAuth";
import defaultCover from "../../Media/Images/def_cover.jpg";
import defaultProfile from "../../Media/Images/blank_dp.jpg";
import { useEffect } from "react";
import http from "../../BaseUrl/http";
import { message } from "antd";

const GeneralSettings = () => {
  const [imageOrigin, setImageOrigin] = useState("");
  const {
    toggleTheme,
    user,
    cropperImage,
    setCropperImage,
    displayNameArray,
    delayReload,
  } = useAuth();
  const themeState = !("theme" in localStorage)
    ? "system"
    : localStorage.getItem("theme") === "light"
    ? "light"
    : "dark";
  const handleImage = (origin) => {
    setCropperImage("");
    const file =
      origin === "profile"
        ? document.getElementById("profile-image").files[0]
        : document.getElementById("cover-image").files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        setCropperImage(reader?.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (document.getElementById("display-name")) {
      if (!user?.display_name) {
        document.getElementById("display-name").selectedIndex = 0;
      } else {
        document.getElementById("display-name").selectedIndex =
          displayNameArray.indexOf(user?.display_name);
      }
    }
  }, [user?.display_name, displayNameArray]);

  const handleDisplayNameChange = (uid, display_name) => {
    const data = { display_name, event: "displayNameChange" };
    http
      .put(`/updateUserDisplayName/${uid}`, data)
      .then((res) => {
        if (res?.data?.status === 200) {
          message.success("Display Name Updated Successfully");
        } else {
          message.error("Display Name Updated Failed");
        }
      })
      .finally(() => {
        window.location.reload();
      });
  };

  return (
    <div>
      {/* Theme */}
      <div className="mb-10 flex items-center gap-5">
        <div className="text-xl font-semibold">Site theme</div>
        <div>
          <button
            className={
              themeState === "light"
                ? "bg-slate-800 text-white font-bold p-1 px-2 border-2 border-slate-500 rounded-md mx-2 group"
                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-bold p-1 px-2 border-2 border-slate-500 rounded-md mx-2 group"
            }
            onClick={() => {
              toggleTheme("light");
            }}
          >
            L
          </button>
          <button
            className={
              themeState === "dark"
                ? "bg-white text-slate-700 font-bold p-1 px-2 border-2 border-slate-500 rounded-md mx-2 group"
                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-bold p-1 px-2 border-2 border-slate-500 rounded-md mx-2 group"
            }
            onClick={() => {
              toggleTheme("dark");
            }}
          >
            D
          </button>
          <button
            className={
              themeState === "system"
                ? "bg-slate-800 dark:bg-white text-white dark:text-slate-700 font-bold p-1 px-2 border-2 border-slate-500 rounded-md mx-2 group"
                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-bold p-1 px-2 border-2 border-slate-500 rounded-md mx-2 group"
            }
            onClick={() => {
              toggleTheme("system");
            }}
          >
            System
          </button>
        </div>
      </div>

      {user?.uid ? (
        <>
          {/* Display Name */}
          <div className="mb-10 flex items-center gap-5">
            <div className="text-xl font-semibold">
              Display Name{" "}
              <span className="italic font-normal">(for mobile only)</span>:
            </div>
            <div>
              <select
                onChange={(e) => {
                  handleDisplayNameChange(user?.uid, e.target.value);
                }}
                name="display-name"
                id="display-name"
                className="text-xl bg-slate-200 dark:bg-slate-700 py-1 px-2 rounded-md outline-none"
              >
                {displayNameArray?.map((x) => (
                  <option
                    key={displayNameArray.indexOf(x)}
                    value={x}
                    className="text-slate-600 dark:text-slate-300"
                  >
                    {x}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Profile Pic */}
          <div className="my-10 last:mb-3">
            <div className="text-xl text-slate-700 dark:text-slate-300 font-semibold">
              Profile Picture
            </div>
            <div className="mt-3 flex gap-5">
              <div className="hidden">
                <input
                  type="file"
                  name="DP Image"
                  id="profile-image"
                  accept="image/png, image/jpg, image/jpeg"
                  onChange={() => {
                    setImageOrigin("profile");
                    handleImage("profile");
                  }}
                />
              </div>
              <button
                className="h-40 w-40 bg-slate-200 dark:bg-slate-700 rounded-md border-2 border-dashed border-slate-500 dark:border-slate-400 hover:border-blue-500 dark:hover:border-blue-400 duration-300 flex items-center justify-center font-semibold uppercase"
                onClick={() => {
                  document.getElementById("profile-image").click();
                }}
              >
                Click to upload
              </button>
              <div className="rounded-md shadow-sm">
                <img
                  src={
                    !user?.user_img || user?.user_img === "default"
                      ? defaultProfile
                      : `https://static.cpc.daffodilvarsity.edu.bd/${user?.user_img}`
                  }
                  alt=""
                  className="h-40 w-40 rounded-md"
                />
              </div>
            </div>
            {imageOrigin === "profile" ? (
              <ImageCropper
                origin={imageOrigin}
                uid={user?.uid}
                image={cropperImage}
                oldLink={user?.user_img}
              ></ImageCropper>
            ) : (
              ""
            )}
          </div>

          {/* Cover Image */}
          <div className="my-10 last:mb-3">
            <div className="text-xl text-slate-700 dark:text-slate-300 font-semibold">
              Cover Image
            </div>
            <div className="mt-3 flex flex-col xl:flex-row gap-5">
              <div className="hidden">
                <input
                  type="file"
                  name="CV Image"
                  id="cover-image"
                  accept="image/png, image/jpg, image/jpeg"
                  onChange={() => {
                    setImageOrigin("cover");
                    handleImage("cover");
                  }}
                />
              </div>
              <button
                className="h-28 xl:h-40 w-full xl:w-40 bg-slate-200 dark:bg-slate-700 rounded-md border-2 border-dashed border-slate-500 dark:border-slate-400 hover:border-blue-500 dark:hover:border-blue-400 duration-300 flex items-center justify-center font-semibold uppercase"
                onClick={() => {
                  document.getElementById("cover-image").click();
                }}
              >
                Click to upload
              </button>
              <div className="rounded-md shadow-sm">
                <img
                  src={
                    !user?.user_cover || user?.user_cover === "default"
                      ? defaultCover
                      : `https://static.cpc.daffodilvarsity.edu.bd/${user?.user_cover}`
                  }
                  alt=""
                  className="h-full xl:h-40 rounded-md"
                />
              </div>
            </div>
            {imageOrigin === "cover" ? (
              <ImageCropper
                origin={imageOrigin}
                uid={user?.uid}
                image={cropperImage}
                oldLink={user?.user_cover}
              ></ImageCropper>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        ""
      )}

      {/* Help Page Reset */}
      <div className="my-10 last:mb-3 flex items-center gap-3">
        <div className="text-xl text-slate-700 dark:text-slate-300 font-semibold">
          Help
        </div>
        <button
          className="btn btn-sm"
          onClick={() => {
            localStorage.setItem("first-load", JSON.stringify("true"));
            window.location.href = "/";
          }}
        >
          View
        </button>
      </div>

      {/* Reset Login Data */}
      <div className="my-10 last:mb-3 flex gap-3">
        <button
          className="btn btn-sm btn-error btn-outline"
          onClick={() => {
            document.getElementById("reset-login").checked = true;
          }}
        >
          Fix Login/Logout
        </button>
        <input type="checkbox" id="reset-login" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box bg-white dark:bg-slate-800">
            <h3 className="font-bold text-lg text-slate-600 dark:text-slate-200">
              <span className="text-error">Warning!</span> This will erase login
              data from your device. <br />
              You will have to Login again.
            </h3>
            <div className="modal-action">
              <label
                className="btn btn-info btn-sm text-white"
                onClick={() => {
                  localStorage.removeItem("user");
                  localStorage.removeItem("user-id");
                  localStorage.removeItem("authToken");
                  localStorage.removeItem("authName");
                  message.loading("Erasing", 2);
                  delayReload();
                }}
              >
                Confirm
              </label>
              <label htmlFor="reset-login" className="btn btn-sm">
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>

      {user?.uid ? (
        ""
      ) : (
        <div className="text-slate-400 text-lg font-semibold text-center mt-10">
          <Link to="/login" className="underline decoration-slate-500">
            Login
          </Link>{" "}
          for more settings
        </div>
      )}
    </div>
  );
};

export default GeneralSettings;
