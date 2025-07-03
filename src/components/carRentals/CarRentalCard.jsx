// >>> src/components/carRentals/CarRentalCard.jsx
export default function CarRentalCard({ title, time, image }) {
  return (
    <div className="flex items-stretch justify-between gap-4 rounded-xl">
      <div className="flex flex-col gap-1 flex-[2_2_0px]">
        <p className="text-[#0e151b] text-base font-bold leading-tight">
          {title}
        </p>
        <p className="text-[#4e7997] text-sm font-normal leading-normal">
          {time}
        </p>
      </div>
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
}
