import { useState } from "react";

export default function SideFilters() {
  const [location, setLocation] = useState("San Francisco");

  return (
    <div className="layout-content-container flex flex-col w-80">
      {/* Location Search Field */}
      <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div className="text-[#5c778a] flex border-none bg-[#eaeef1] items-center justify-center pl-4 rounded-l-xl border-r-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaeef1] focus:border-none h-full placeholder:text-[#5c778a] px-4 rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Search destination"
            />
            <div className="flex items-center justify-center rounded-r-xl border-l-0 border-none bg-[#eaeef1] pr-2 pr-4">
              <button
                type="button"
                onClick={() => setLocation("")}
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent text-[#101518] gap-2 text-base font-bold leading-normal tracking-[0.015em] h-auto min-w-0 px-0"
              >
                <div className="text-[#5c778a]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </label>
      </div>

      {/* People Select */}
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <select className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border border-[#d4dce2] bg-gray-50 focus:border-[#d4dce2] h-14 bg-[image:--select-button-svg] placeholder:text-[#5c778a] p-[15px] text-base font-normal leading-normal">
            <option value="">Number of People</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4+">Four+</option>
          </select>
        </label>
      </div>

      {/* Calendar */}
      <div className="flex flex-wrap items-center justify-center gap-6 p-4">
        <div className="flex min-w-72 max-w-[336px] flex-1 flex-col gap-0.5">
          <div className="flex items-center p-1 justify-between">
            <button>
              <div className="text-[#101518] flex size-10 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                </svg>
              </div>
            </button>
            <p className="text-[#101518] text-base font-bold leading-tight flex-1 text-center">
              July 2024
            </p>
            <button>
              <div className="text-[#101518] flex size-10 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </div>
            </button>
          </div>

          <div className="grid grid-cols-7">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <p
                key={i}
                className="text-[#101518] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5"
              >
                {d}
              </p>
            ))}

            {[...Array(35)].map((_, i) => {
              const day = i + 1;
              if (day > 31) return <div key={i} className="h-12 w-full"></div>;
              return (
                <button
                  key={i}
                  className={`h-12 w-full ${
                    day === 5 || day === 30 ? "bg-[#eaeef1]" : ""
                  } ${day === 5 ? "rounded-l-full" : ""} ${
                    day === 30 ? "rounded-r-full" : ""
                  } text-[#101518] text-sm font-medium leading-normal`}
                >
                  <div
                    className={`flex size-full items-center justify-center rounded-full ${
                      day === 5 || day === 30 ? "bg-[#b2d0e5]" : ""
                    }`}
                  >
                    {day}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-3 p-3 flex-wrap pr-4">
        {[
          "Booking Options",
          "Amenities",
          "Accessibility",
          "Property Type",
          "More Filters",
        ].map((filter, i) => (
          <div
            key={i}
            className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#eaeef1] pl-4 pr-4"
          >
            <p className="text-[#101518] text-sm font-medium leading-normal">
              {filter}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
