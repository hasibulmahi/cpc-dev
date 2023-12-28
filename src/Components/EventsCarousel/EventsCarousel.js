import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import EventItem from "./EventItem";

const EventsCarousel = ({ unExpiredEvents }) => {
  const compare = (a, b) => {
    const today = new Date().getTime();
    let aFlag = 0;
    let bFlag = 0;
    if (
      new Date(
        a?.start_date.includes(" ") ||
        a?.start_date.includes(",") ||
        a?.start_date.includes(":")
          ? a?.start_date
          : parseInt(a?.start_date)
      ).getTime() > today
    ) {
      aFlag = new Date(
        a?.start_date.includes(" ") ||
        a?.start_date.includes(",") ||
        a?.start_date.includes(":")
          ? a?.start_date
          : parseInt(a?.start_date)
      ).getTime();
    } else {
      aFlag = new Date(
        a?.end_date.includes(" ") ||
        a?.end_date.includes(",") ||
        a?.end_date.includes(":")
          ? a?.end_date
          : parseInt(a?.end_date)
      ).getTime();
    }
    if (
      new Date(
        b?.start_date.includes(" ") ||
        b?.start_date.includes(",") ||
        b?.start_date.includes(":")
          ? b?.start_date
          : parseInt(b?.start_date)
      ).getTime() > today
    ) {
      bFlag = new Date(
        b?.start_date.includes(" ") ||
        b?.start_date.includes(",") ||
        b?.start_date.includes(":")
          ? b?.start_date
          : parseInt(b?.start_date)
      ).getTime();
    } else {
      bFlag = new Date(
        b?.end_date.includes(" ") ||
        b?.end_date.includes(",") ||
        b?.end_date.includes(":")
          ? b?.end_date
          : parseInt(b?.end_date)
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
    <div>
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
          <SwiperSlide key={unExpiredEvents.indexOf(x)}>
            <EventItem
              id={x?.event_id}
              date={x?.start_date}
              title={x?.title}
              description={x?.description}
              image={x?.cover_image}
            ></EventItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventsCarousel;
