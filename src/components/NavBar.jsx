// NavBar.jsx
const links = [
  "Stays",
  "Flights",
  "Car rentals",
  "Attractions",
  "Travel guides",
];
export default function NavBar() {
  return (
    <nav className="flex items-center gap-9">
      {links.map((link) => (
        <a key={link} href="#" className="text-sm font-medium text-[#101518]">
          {link}
        </a>
      ))}
    </nav>
  );
}
