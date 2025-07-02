export default function ResultsHeader() {
  return (
    <>
      <div className="flex gap-3 p-3 flex-wrap pr-4">
        {[
          "City",
          "Number of People",
          "Number of Rooms",
          "Price range",
          "More filters",
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
      <div className="flex px-4 py-3 justify-start">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#eaeef1] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Collapse/Uncollapse</span>
        </button>
      </div>
      <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        1,000+ places to stay
      </h2>
    </>
  );
}
