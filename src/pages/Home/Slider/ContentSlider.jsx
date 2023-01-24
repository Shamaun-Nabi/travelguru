import React from "react";
import slider1 from "../../../assets/images/Sajek.png";
// import slider1 from "../../../assets/images/Sajek.png";

function ContentSlider() {
  return (
    <div
      className="cursor-pointer h-[350px] w-[100%] bg-center bg-cover border-2 rounded-2xl border-yellow-300 "
      style={{ backgroundImage: `url(${slider1})` }}
    >
      <div className="h-full bg-[#00000057] rounded-2xl p-4 relative">
        <h3 className="text-white text-xl  md:text-3xl absolute bottom-5 right-10">Cox's Bazar</h3>
      </div>
    </div>
  );
}

export default ContentSlider;
