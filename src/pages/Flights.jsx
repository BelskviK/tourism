import FlightForm from "../components/flights/FlightForm";
import AvailableFlights from "../components/flights/AvailableFlights";

export default function Flights() {
  return (
    <div className="min-h-screen bg-gray-50 font-['Plus Jakarta Sans']">
      <div className="flex justify-center gap-4 px-6 py-5">
        <div className="w-80">
          <h2 className="text-[28px] font-bold text-[#101518] pb-3 pt-5 px-4">
            Book flights
          </h2>
          <FlightForm />
        </div>

        <AvailableFlights />
      </div>
    </div>
  );
}
