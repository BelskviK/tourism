// Calendar.jsx
export default function Calendar() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <button>{"<"}</button>
        <p className="text-base font-bold">July 2024</p>
        <button>{">"}</button>
      </div>
      <div className="grid grid-cols-7 gap-1 mt-2">
        {[...Array(30)].map((_, i) => (
          <button
            key={i}
            className="h-12 text-sm rounded-full flex items-center justify-center bg-[#eaeef1]"
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
