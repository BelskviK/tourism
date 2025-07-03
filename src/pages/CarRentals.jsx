// >>> src/pages/CarRentals.jsx
import CarRentals from "@/components/carRentals/CarRentals";

export default function CarRentalsPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-['Plus Jakarta Sans']">
      <div className="flex justify-center gap-4 px-6 py-5">
        <CarRentals />
      </div>
    </div>
  );
}
