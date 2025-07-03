// >>> src/components/carRentals/CarRentals.jsx
import SearchForm from "./SearchForm";
import CarRentalCard from "./CarRentalCard";

const carRentals = [
  {
    title: "Car Rental in New York",
    time: "12:00 PM - 3:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADFAopzVZT9m68fL69lTKkZJPWFR7wfpzuqtkzbHw7Tl9lq5jVKW_aDgfhDc21HDNtoWopeHbNi-dAz0LvpVSoey_dwuuFcFkAyHY4jUVFUe1N6IH3gnS2A63TEgIku_L98as91_YujVc_wKlUNVrBXvQi9CNP2uodw5vpnV_z8IbxBFpeIvNpkn-jwor01biQPG0zeikx3F1Quyp-eVWAiRuLC2MbQPfpkVuLphFteeQo73MHsUIK2h5y5Pk_zm7ruK1ih1Ic7tDv",
  },
  {
    title: "Car Rental in Los Angeles",
    time: "2:00 PM - 5:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvV6Aa0oOMp1nCVBZ2lP3OkLDXkIctI4MKLV-4wwRnFRHTnopBF5Yr1W4eHzCN2hsHeP3VFeI_g0pIoELBmEIyaPds1V4WjNVu6UMzgvIIkoNb1E7sUpRWYtjhZ4R3PBr8BEisv3DrC0BJkGI8yILBBekc0UCSHHZ_LmSsuP6IQxa-oaFopabPh9bROtl8_M_zuXqSIwsTOott4DpEPeSk_V0DG6tK-rJlnc3GSPdv-R9mAkSFGJeFP157bPzeSLTjklm8PyMjRSzc",
  },
  {
    title: "Car Rental in Chicago",
    time: "4:00 PM - 7:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-1gT28AALi4fp8zUWAOrqo4rBA8t4Dv1nj2Z5QdpKkwA5CAu0BGR7DZqH8yRwshNrqyo2gZWomgxSFwpNAL8_OfHecYGJRc7cLdUCni9mzDLlHr5SLX1_qqrY7moES6ozsJ7Q-lMHl065l5Cyf31oA0AZYxgTTi6Q2fNBJ2wkWU0lV6uKHgrrHcUVTLJ16TSYU3_SZ3HV-8Uw8XHOikZVU8py99DKLXghA3C8WzPEvxo-KzzvED8XHlhXajmf179Xm3jYsC_QpiQV",
  },
];

export default function CarRentals() {
  return (
    <>
      <div className="layout-content-container flex flex-col w-80">
        <h2 className="text-[#0e151b] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
          Book car rentals
        </h2>
        <SearchForm />
      </div>
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <h2 className="text-[#0e151b] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
          Available Car Rentals
        </h2>
        {carRentals.map((car, index) => (
          <div key={index} className="p-4">
            <CarRentalCard {...car} />
          </div>
        ))}
      </div>
    </>
  );
}
