import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import ContentSlider from "./Slider/ContentSlider";

function RightContent() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
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
