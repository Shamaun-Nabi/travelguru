import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import ContentSlider from "./Slider/ContentSlider";
import { useLocation } from "react-router-dom";
import slide1 from "../../assets/images/Sajek.png";
import slide2 from "../../assets/images/Sreemongol.png";
import slide3 from "../../assets/images/sundorbon.png";

function RightContent() {
  const placesView = [
    {
      id: 1,
      placeName: "সাজেক",
      imgURL: slide1,
    },
    {
      id: 2,
      placeName: "শ্রীমঙ্গল",
      imgURL: slide2,
    },
    {
      id: 3,
      placeName: "সুন্দরবন",
      imgURL: slide3,
    },
    {
      id: 4,
      placeName: "সুন্দরবন",
      imgURL: slide2,
    },
  ];
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
      {placesView.map((place) => (
        <SwiperSlide key={place.id}>
          <ContentSlider place={place} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default RightContent;
