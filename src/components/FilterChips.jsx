// FilterChips.jsx
export default function FilterChips({ labels }) {
  return (
    <div className="flex flex-wrap gap-2 p-3">
      {labels.map((label) => (
        <div
          key={label}
          className="h-8 bg-[#eaeef1] px-4 flex items-center rounded-full"
        >
          <p className="text-sm text-[#101518]">{label}</p>
        </div>
      ))}
    </div>
  );
}
