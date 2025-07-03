// src/pages/Attractions.jsx
import Attractions from "@/components/attractions/Attractions";

export default function AttractionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-['Plus Jakarta Sans']">
      <div className="flex justify-center gap-4 px-6 py-5">
        <Attractions />
      </div>
    </div>
  );
}
