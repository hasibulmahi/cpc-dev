import React from "react";
import { useState } from "react";

const getYear = () => {
  const d = new Date();
  const y = d.getFullYear();
  return y;
};

const Images = [
  "./images/students_panel_2021.jpg",
  "./images/students_panel_2022.jpg",
  "./images/students_panel_2023.jpg",
];

const Team = ({ team = [] }) => {
  const [year, setYear] = useState(getYear);
  const [imageIndex, setImageIndex] = useState(Images.length - 1);

  const updateYear = (operator) => {
    if (operator === "+") {
      setYear(year + 1);
      setImageIndex(imageIndex + 1);
    } else {
      setYear(year - 1);
      setImageIndex(imageIndex - 1);
    }
  };

  return (
    <div className="mt-5 mb-10 p-5">
      <div className="w-11/12 lg:w-4/5 mx-auto rounded-md">
        <img
          src={Images[imageIndex]}
          alt=""
          className="w-full rounded-md shadow-sm"
        />
      </div>
      <div className="md:w-3/5 lg:w-2/5 mt-5 mx-auto flex justify-around items-center text-[#939393]">
        <button
          className={`md:text-xl lg:text-2xl 2xl:text-2xl hover:text-orange-500 cursor-pointer ${
            imageIndex === 0 ? "cursor-not-allowed" : null
          }`}
          onClick={() => updateYear("-")}
          disabled={imageIndex === 0}
        >
          {`<TEAM ${year - 2}`}
        </button>
        <button className="text-lg lg:text-xl 2xl:text-2xl hover:text-orange-500 uppercase underline decoration-orange-500 underline-offset-2">
          <span className="hidden lg:inline">Team </span>
          {year - 1}
        </button>
        <button
          className={`md:text-xl lg:text-2xl 2xl:text-2xl hover:text-orange-500 ${
            getYear() === year ? "cursor-not-allowed" : null
          }`}
          onClick={() => updateYear("+")}
          disabled={getYear() === year}
        >
          {`TEAM ${year + 1}>`}
        </button>
      </div>
    </div>
  );
};

export default Team;
