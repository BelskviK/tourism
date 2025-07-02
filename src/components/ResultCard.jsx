// ResultCard.jsx
export default function ResultCard({ title, subtitle, image }) {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <div
        className="aspect-video bg-center bg-cover rounded-xl"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div>
        <p className="text-base font-medium">{title}</p>
        <p className="text-sm text-[#5c778a]">{subtitle}</p>
      </div>
    </div>
  );
}
