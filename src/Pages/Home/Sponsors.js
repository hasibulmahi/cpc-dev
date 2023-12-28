import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import sponsor1 from "../../Media/Images/sp1_takeoff.png";
import sponsor2 from "../../Media/Images/sp2_iupc.png";
import sponsor3 from "../../Media/Images/sp3_iuh.png";
import sponsor4 from "../../Media/Images/sp4_uta.png";

const Sponsors = () => {
  const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
  return (
    <div>
      <Swiper
        slidesPerView={width < 768 ? 3 : 4}
        spaceBetween={10}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="flex items-center justify-center">
          <img src={sponsor1} alt="Sponsor" className="w-8 xl:w-16 2xl:w-24" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={sponsor2} alt="Sponsor" className="w-8 xl:w-16 2xl:w-24" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={sponsor3} alt="Sponsor" className="w-8 xl:w-16 2xl:w-24" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={sponsor4} alt="Sponsor" className="w-8 xl:w-16 2xl:w-24" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sponsors;
