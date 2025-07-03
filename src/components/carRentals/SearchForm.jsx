// >>> src/components/carRentals/SearchForm.jsx
export default function SearchForm() {
  return (
    <>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#0e151b] text-base font-medium leading-normal pb-2">
            Pick-up location
          </p>
          <input
            placeholder="Where from?"
            className="form-input h-14 rounded-xl bg-[#e7eef3] p-4 text-base text-[#0e151b] placeholder:text-[#4e7997]"
          />
        </label>

        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#0e151b] text-base font-medium leading-normal pb-2">
            Drop-off location
          </p>
          <input
            placeholder="Where to?"
            className="form-input h-14 rounded-xl bg-[#e7eef3] p-4 text-base text-[#0e151b] placeholder:text-[#4e7997]"
          />
        </label>
      </div>

      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#0e151b] text-base font-medium leading-normal pb-2">
            Pick-up date
          </p>
          <input
            placeholder="Select date"
            className="form-input h-14 rounded-xl bg-[#e7eef3] p-4 text-base text-[#0e151b] placeholder:text-[#4e7997]"
            type="date"
          />
        </label>

        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#0e151b] text-base font-medium leading-normal pb-2">
            Drop-off date
          </p>
          <input
            placeholder="Select date"
            className="form-input h-14 rounded-xl bg-[#e7eef3] p-4 text-base text-[#0e151b] placeholder:text-[#4e7997]"
            type="date"
          />
        </label>
      </div>

      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#0e151b] text-base font-medium leading-normal pb-2">
            Travelers
          </p>
          <select className="form-input h-14 rounded-xl bg-[#e7eef3] p-4 text-base text-[#0e151b]">
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </label>
      </div>

      <div className="flex px-4 py-3 justify-start">
        <button className="rounded-full h-10 px-4 bg-[#1990e5] text-white text-sm font-bold">
          <span className="truncate">Search</span>
        </button>
      </div>
    </>
  );
}
