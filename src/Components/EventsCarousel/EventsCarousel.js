import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import EventItem from "./EventItem";

const EventsCarousel = ({ unExpiredEvents }) => {
  const compare = (a, b) => {
    const today = new Date().getTime();
    let aFlag = 0;
    let bFlag = 0;
    if (
      new Date(
        a?.started_date.includes(" ") ||
        a?.started_date.includes(",") ||
        a?.started_date.includes(":")
          ? a?.started_date
          : parseInt(a?.started_date)
      ).getTime() > today
    ) {
      aFlag = new Date(
        a?.started_date.includes(" ") ||
        a?.started_date.includes(",") ||
        a?.started_date.includes(":")
          ? a?.started_date
          : parseInt(a?.started_date)
      ).getTime();
    } else {
      aFlag = new Date(
        a?.ended_date.includes(" ") ||
        a?.ended_date.includes(",") ||
        a?.ended_date.includes(":")
          ? a?.ended_date
          : parseInt(a?.ended_date)
      ).getTime();
    }
    if (
      new Date(
        b?.started_date.includes(" ") ||
        b?.started_date.includes(",") ||
        b?.started_date.includes(":")
          ? b?.started_date
          : parseInt(b?.started_date)
      ).getTime() > today
    ) {
      bFlag = new Date(
        b?.started_date.includes(" ") ||
        b?.started_date.includes(",") ||
        b?.started_date.includes(":")
          ? b?.started_date
          : parseInt(b?.started_date)
      ).getTime();
    } else {
      bFlag = new Date(
        b?.ended_date.includes(" ") ||
        b?.ended_date.includes(",") ||
        b?.ended_date.includes(":")
          ? b?.ended_date
          : parseInt(b?.ended_date)
      ).getTime();
    }
    if (aFlag > bFlag) {
      return 1;
    } else if (aFlag < bFlag) {
      return -1;
    } else {
      return 0;
    }
  };
  unExpiredEvents?.sort(compare);

  return (
    <Link to="/">
      <Swiper
        initialSlide={0}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        effect={"coverflow"}
        modules={[Autoplay, Pagination]}
      >
        {/*
          Date Note
          ---------
          - Date can be given in either milliseconds (1659376799000) or in date string (Aug 2, 2022 23:59:59) or (2022-08-02, 23:59:59)
          - Maximum 99d 23h 59m 59s
          ---------
        */}
        {unExpiredEvents?.map((x) => (
          <SwiperSlide key={unExpiredEvents?.indexOf(x)}>
            <EventItem
              id={x?.slug}
              key={x?.slug}
              date={x?.started_date}
              title={x?.title}
              description={x?.description}
              image={x?.thumbnail}
            ></EventItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </Link>
  );
};

export default EventsCarousel;
