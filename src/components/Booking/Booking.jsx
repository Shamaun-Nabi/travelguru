import React from "react";

function Booking() {
  return (
    <div className="text-white container mx-auto mt-4 p-8">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-7 flex items-center order-2 md:order-1">
          <div className="p-5">
            <h2 className="font-semibold text-2xl md:text-5xl text-white">
              COX'S BAZAR
            </h2>
            <p className="mt-1 w-full md:w-[90%] md:mt-3 text-justify text-md md:text-lg text-gray-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              consectetur commodi harum, vel, facere corporis ipsa aliquid
              molestias facilis ratione quia accusantium aperiam, accusamus
              deleniti?commodi harum, vel, facere corporis ipsa aliquid
              molestias facilis ratione quia accusantium aperiam, accusamus
              deleniti?
            </p>
          </div>
        </div>
        <div className="col-span-5 bg-white rounded-lg p-8 order-1 md:order-2">
          <form action="" method="get">
            <div>
              <label className="text-slate-600" htmlFor="Origin">
                Origin
              </label>{" "}
              <br />
              <input
                required
                name="origin"
                className="w-full  focus:ring-slate-400 bg-slate-200 border-none text-black rounded-md mt-1"
                type="text"
              />
            </div>
            <div className="mt-2">
              <label className="text-slate-600" htmlFor="Origin">
                Destination
              </label>{" "}
              <br />
              <input
                required
                name="destination"
                className="w-full  focus:ring-slate-400 bg-slate-200 border-none text-black rounded-md mt-1"
                type="text"
              />
            </div>
            <div className="mt-1 p-2">
              <div className="flex justify-between">
                <label className="text-slate-600" htmlFor="From">
                  From
                </label>
                <label className="text-slate-600" htmlFor="To">
                  To
                </label>
              </div>

              <div className="flex gap-x-2">
                <input
                  required
                  name="dateFrom"
                  className="w-[50%] focus:ring-slate-400 bg-slate-200 border-none text-black rounded-md mt-1"
                  type="date"
                />

                <input
                  required
                  name="dateTo"
                  className="w-[50%]  focus:ring-slate-400 bg-slate-200 border-none text-black rounded-md mt-1"
                  type="date"
                />
              </div>
            </div>
            <div className="mt-2">
              <button className="bg-yellow-300 text-slate-800 hover:text-white font-semibold p-2 w-full rounded-md hover:bg-slate-900 transition duration-200">
                Start Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
