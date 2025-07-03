import React from "react";
import TripTypeTabs from "./TripTypeTabs"; // <-- import here

export default function FlightForm() {
  return (
    <>
      <TripTypeTabs />
      <div className="space-y-4 px-4 py-3">
        <div className="flex gap-4 flex-wrap">
          <Input label="From" placeholder="Where from?" />
          <Input label="To" placeholder="Where to?" />
        </div>
        <div className="flex gap-4 flex-wrap">
          <Input label="Depart" placeholder="Select date" />
          <Input label="Return" placeholder="Select date" />
        </div>
        <div className="flex gap-4 flex-wrap">
          <label className="flex flex-col flex-1">
            <span className="pb-2 font-medium text-[#101518]">Travelers</span>
            <select className="form-input h-14 rounded-xl bg-[#eaeef1] p-4 text-base text-[#101518]">
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
            </select>
          </label>
        </div>
        <button className="h-10 rounded-full bg-[#b2d0e5] px-4 text-sm font-bold text-[#101518]">
          Search
        </button>
      </div>
    </>
  );
}

function Input({ label, placeholder }) {
  return (
    <label className="flex flex-col flex-1 min-w-40">
      <span className="pb-2 font-medium text-[#101518]">{label}</span>
      <input
        placeholder={placeholder}
        className="form-input h-14 rounded-xl bg-[#eaeef1] p-4 text-base text-[#101518] placeholder-[#5c778a]"
      />
    </label>
  );
}
