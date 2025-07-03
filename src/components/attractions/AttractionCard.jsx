// src/components/attractions/AttractionCard.jsx
export default function AttractionCard({ title, location, image }) {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div>
        <p className="text-[#101519] text-base font-medium leading-normal">
          {title}
        </p>
        <p className="text-[#58778d] text-sm font-normal leading-normal">
          {location}
        </p>
      </div>
    </div>
  );
}
