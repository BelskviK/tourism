import SideFilters from "@/components/SideFilters";
import ResultsHeader from "@/components/ResultsHeader";
import ResultList from "@/components/ResultList";

export default function Home() {
  return (
    <div className="layout-container flex h-full grow flex-col">
      <div className="gap-1 px-6 flex flex-1 justify-center py-5">
        <SideFilters />
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <h1 className="text-2xl font-bold mb-4">Available Stays</h1>
          <ResultsHeader />
          <ResultList />
        </div>
      </div>
    </div>
  );
}
