import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

function LeftContent() {
  return (
    <>
      <div className="">
        <div className="p-5">
          <h2 className="font-semibold text-5xl text-white">Journey Begins...</h2>
          <p className="mt-3 text-justify text-gray-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            consectetur commodi harum, vel, facere corporis ipsa aliquid
            molestias facilis ratione quia accusantium aperiam, accusamus
            deleniti?
          </p>
          <button className="mt-3 flex items-center gap-x-1 hover:bg-slate-800 hover:text-white bg-yellow-300 px-3 py-2 transition duration-200 rounded-md text-slate-900">
            Booking Now <BsArrowRightShort />
          </button>
        </div>
      </div>
    </>
  );
}

export default LeftContent;
