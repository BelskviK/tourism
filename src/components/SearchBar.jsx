// SearchBar.jsx
export default function SearchBar() {
  return (
    <label className="flex min-w-40 h-10 max-w-64">
      <div className="flex w-full items-stretch rounded-xl">
        <div className="pl-4 flex items-center bg-[#eaeef1] rounded-l-xl">
          🔍
        </div>
        <input
          placeholder="Search"
          className="flex-1 px-4 text-base bg-[#eaeef1] border-none focus:outline-none rounded-r-xl"
        />
      </div>
    </label>
  );
}
