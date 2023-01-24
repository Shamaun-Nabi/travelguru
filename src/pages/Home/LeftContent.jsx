import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function LeftContent() {
  return (
    <>
      <div className="">
        <div className="p-5 ">
          <h2 className="font-semibold text-2xl md:text-5xl text-white">
            Journey Begins...
          </h2>
          <p className="mt-1 md:mt-3 text-justify text-lg text-gray-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            consectetur commodi harum, vel, facere corporis ipsa aliquid
            molestias facilis ratione quia accusantium aperiam, accusamus
            deleniti?
          </p>
          <div className="flex justify-center md:justify-start">
            <NavLink to="/booking">
              <button className="mt-4 hover:-translate-y-1 hover:scale-110 flex items-center  gap-x-1 hover:bg-slate-800 hover:text-white bg-yellow-300 px-3 py-2 transition duration-200 rounded-md text-slate-900">
                Booking Now <BsArrowRightShort />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftContent;
