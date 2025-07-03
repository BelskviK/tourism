export default function TripTypeTabs() {
  return (
    <div className="flex border-b border-[#d4dce2] px-4 gap-8">
      <a className="flex flex-col items-center justify-center border-b-[3px] border-[#b2d0e5] pb-3 pt-4 text-sm font-bold text-[#101518]">
        Round trip
      </a>
      <a className="flex flex-col items-center justify-center border-b-[3px] border-transparent pb-3 pt-4 text-sm font-bold text-[#5c778a]">
        One way
      </a>
    </div>
  );
}
