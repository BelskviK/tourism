export default function FlightCard({ title, time, image }) {
  return (
    <div className="p-4">
      <div className="flex justify-between gap-4 rounded-xl">
        <div className="flex flex-col gap-1 flex-[2_2_0px]">
          <p className="text-base font-bold text-[#101518]">{title}</p>
          <p className="text-sm text-[#5c778a]">{time}</p>
        </div>
        <div
          className="flex-1 aspect-video rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
      </div>
    </div>
  );
}
