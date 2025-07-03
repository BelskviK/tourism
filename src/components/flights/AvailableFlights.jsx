import React from "react";
import FlightCard from "./FlightCard";

export default function AvailableFlights() {
  const flights = [
    {
      title: "Flight to New York",
      time: "12:00 PM - 3:00 PM",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBF7IguX3-CIc_Vdr4J4YVwJCa78fFWUI-5npDT3ylimIA0i8V1LUoBwgOjr95Loq-OzAs_TxovU6zgPCLrvdzyVG4O_Xgaqz1bv3-aZM8gnriybXrqEny3JPkZ_7TCsbuHuSf1doIIkytmExWGh-jzf0AD36YIkVQkX0P-lZrF9blWnc_4I0Ma8rAsTvvn8UTaaHCanpIPpv1iEfNKvB-J72hzRD3ZucRzWyZH9VsJMiqzGIyV9C05Ixifkwg6sV5oznJ5uSASSeu9",
    },
    {
      title: "Flight to Los Angeles",
      time: "2:00 PM - 5:00 PM",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCeVjMK8FefAAcyXUB5WUon3CJLOlKwMhBrkN48n0oWQe6KM_CpfeMl79PloIZPqEIldJvYVplnibYJpgjRtdfIV99vTCLPtihOobNqHKZAK2OC6NfabxHcUjfTfhs85s24bXdIbe8kobx9YUxHvdsq5NiMr9h2WhYJx4WF8MkkkXtc57GOqzT4lCYZ_36ah_ugTv4vs9VwRVdrWzBpASfJXjct29qHeB1N_NMvLJOHfj3VSvmTl-EK0IoUkFOIR1Pr3lxV_9k7R0Ur",
    },
    {
      title: "Flight to Chicago",
      time: "4:00 PM - 7:00 PM",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBq5PsiM_FViqbWv2bhpX8g0YTCJqKT7yhny016nzP2ipqVHT3wzLOJyfgout7vWO_GNTUICL7CvrGIuKYnvvZe8gWRgdL1KAINnTpJVRs8v7lDevplS956awclutUoFOeP_nskqO0Qm9fMNjrQ_HS0vJKujXBwyFJ79Tmw2iJES1K-K9xa32dQr8Qwf1BINm2XLNmJCbAkSHhjTsz8wNVQS6VItx8KLcU8ae7hqXzKyYl7ZYWgj5z6ZVM4KhOlxDkgv3eexcvShDxa",
    },
  ];

  return (
    <div className="flex-1 px-4">
      <h2 className="text-[28px] font-bold text-[#101518] py-5">
        Available Flights
      </h2>
      {flights.map((flight, i) => (
        <FlightCard key={i} {...flight} />
      ))}
    </div>
  );
}
