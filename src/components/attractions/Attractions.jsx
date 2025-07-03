// src/components/attractions/Attractions.jsx
import SearchBar from "./SearchBar";
import PopularAttractions from "./PopularAttractions";
import AllAttractions from "./AllAttractions";

export default function Attractions() {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#101519] tracking-light text-[32px] font-bold leading-tight min-w-72">
          Discover attractions
        </p>
      </div>

      <SearchBar />

      <h2 className="text-[#101519] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Popular attractions
      </h2>
      <PopularAttractions />

      <h2 className="text-[#101519] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        All attractions
      </h2>
      <AllAttractions />
    </div>
  );
}
