import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function Home() {
  return (
    <>
      <div className="mx-auto container">
        <div className="grid grid-cols-12 mt-4 p-4">
          <div className="flex justify-center items-center col-span-5 ">
            <LeftContent />
          </div>
          <div className="flex justify-center items-center col-span-7 ">
            <RightContent />
          </div>
        </div>
      </div>
    </>
  );
}
