// src/App.jsx
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "@/components/common/Header";

import Home from "@/pages/Home.jsx";
import Flights from "@/pages/Flights.jsx";
import CarRentals from "@/pages/CarRentals.jsx";
import Attractions from "@/pages/Attractions.jsx";
import TravelGuides from "@/pages/TravelGuides.jsx";
import NotFound from "@/pages/NotFound.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto pt-14 pb-14">
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="flights" element={<Flights />} />
            <Route path="car-rentals" element={<CarRentals />} />
            <Route path="attractions" element={<Attractions />} />
            <Route path="travel-guides" element={<TravelGuides />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}
