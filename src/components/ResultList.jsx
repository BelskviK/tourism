// ResultList.jsx
import ResultCard from "./ResultCard.jsx";

const mockData = [
  {
    title: "Cozy Apartment in Downtown",
    subtitle: "★★★★ · Apartment · 2 beds",
    image: "https://via.placeholder.com/400x200",
  },
  // Add more mock listings
];

export default function ResultList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {mockData.map((item, index) => (
        <ResultCard key={index} {...item} />
      ))}
    </div>
  );
}
