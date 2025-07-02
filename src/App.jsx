import { Routes, Route, Outlet } from "react-router-dom";
import Header from "@/components/Header";

import Home from "@/pages/Home.jsx";
import About from "@/pages/About.jsx";
import Contact from "@/pages/Contact.jsx";
import NotFound from "@/pages/NotFound.jsx"; // optional

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 overflow-y-auto pt-14 pb-14">
        <Routes>
          {/* Shared layout wrapper */}
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> {/* 404 fallback */}
          </Route>
        </Routes>
      </main>
    </div>
  );
}
