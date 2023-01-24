import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function Home() {
  return (
    <>
      <div className="mx-auto container ">
        <div className="grid grid-cols-1 md:grid-cols-12 mt-4 p-4">
          <div className="flex justify-center items-center col-span-5 order-2 md:order-1 ">
            <LeftContent />
          </div>
          <div className="flex justify-center items-center col-span-7 order-1 md:order-2 ">
            <RightContent />
          </div>
        </div>
      </div>
    </>
  );
}
