import React from "react";
import slider1 from "../../../assets/images/Sajek.png";
// import slider1 from "../../../assets/images/Sajek.png";
function ContentSlider({ place }) {
  const { placeName, imgURL } = place;
  return (
    <div
      className="cursor-pointer h-[350px] w-[100%] bg-center bg-cover border-2 rounded-2xl border-yellow-300 "
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <div className="h-full bg-[#00000057] rounded-2xl p-4 relative">
        <h3 className="text-white text-xl  md:text-2xl absolute bottom-5 ">
          {placeName}
        </h3>
      </div>
    </div>
  );
}

export default ContentSlider;
