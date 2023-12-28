import { message } from "antd";
import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import http from "../../BaseUrl/http";
import useAuth from "../../Hooks/useAuth";
import { getCroppedImg } from "./canvusUtils";

const handleUpload = (origin, uid, rnd, image, oldLink, delayReload) => {
  if (origin === "profile") {
    const data = { image, event: "proImgChange", rnd, oldLink };
    http
      .put(`/updateUserImg/${uid}`, data)
      .then((res) => {
        if (res?.data?.status === 200) {
          message.success("Profile Image Updated Successfully");
        } else {
          message.error("Profile Image Updated Failed");
        }
      })
      .finally(() => {
        delayReload();
      });
  } else {
    const data = { image, event: "coverImgChange", rnd, oldLink };
    http
      .put(`/updateUserCoverImg/${uid}`, data)
      .then((res) => {
        if (res?.data?.status === 200) {
          message.success("Cover Image Updated Successfully");
        } else {
          message.error("Cover Image Updated Failed");
        }
      })
      .finally(() => {
        delayReload();
      });
  }
};

const ImageCropper = ({ origin, uid = "", image = "", oldLink }) => {
  const { cropperImage, setCropperImage, randomIDGenerator, delayReload } =
    useAuth();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState("");
  const onCropComplete = useCallback(
    (croppedArea, croppedAreaPixels) => {
      getCroppedImg(cropperImage, croppedAreaPixels).then((x) =>
        setCroppedImage(x)
      );
    },
    [cropperImage]
  );
  return (
    <div>
      {uid !== "" && image !== "" ? (
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-slate-700/50 z-0 flex flex-col justify-center items-center">
          <div className="flex items-center justify-center">
            <div className="bg-white dark:bg-slate-800 min-w-[50vw] w-11/12 xl:w-2/4 rounded-md relative">
              <div className="rounded-md max-h-[50vh] relative">
                <img
                  src={image}
                  alt=""
                  className="rounded-md w-full h-full invisible"
                />
                <div>
                  <Cropper
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    aspect={origin === "profile" ? 1 / 1 : 12 / 5}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-200 dark:bg-slate-800 w-11/12 xl:w-2/4 rounded-md mt-3 p-2 flex items-center">
            <div className="w-full flex items-center pr-2">
              <input
                type="range"
                min="1"
                max="3"
                step="0.1"
                value={zoom}
                className="range range-xs range-primary dark:range-accent"
                onChange={(e) => {
                  setZoom(e.target.value);
                }}
              />
            </div>
            <div className="flex gap-2">
              <button
                className="btn btn-info btn-sm text-white"
                onClick={() => {
                  handleUpload(
                    origin,
                    uid,
                    randomIDGenerator(8),
                    croppedImage,
                    oldLink,
                    delayReload
                  );
                  setCropperImage("");
                }}
              >
                Confirm
              </button>
              <button
                className="btn btn-sm"
                onClick={() => {
                  setCropperImage("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ImageCropper;
