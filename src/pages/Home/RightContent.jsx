import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import ContentSlider from "./Slider/ContentSlider";
import { useLocation } from "react-router-dom";

function RightContent() {
  return (
    <Swiper
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        "@1.00": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      spaceBetween={10}
      slidesPerView={3}
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <ContentSlider />
      </SwiperSlide>
      <SwiperSlide>
        <ContentSlider />
      </SwiperSlide>
      <SwiperSlide>
        <ContentSlider />
      </SwiperSlide>
      <SwiperSlide>
        <ContentSlider />
      </SwiperSlide>
      <SwiperSlide>
        <ContentSlider />
      </SwiperSlide>
      <SwiperSlide>
        <ContentSlider />
      </SwiperSlide>
      <SwiperSlide>
        <ContentSlider />
      </SwiperSlide>
      <SwiperSlide>
        <ContentSlider />
      </SwiperSlide>
    </Swiper>
  );
}

export default RightContent;
