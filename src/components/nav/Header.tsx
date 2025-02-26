import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-navbar-primary text-navbar-secondary p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          UniteByte
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/services" className="hover:underline">Services</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-2 flex flex-col bg-blue-700 p-4">
          <a href="/" className="py-2 hover:underline">Home</a>
          <a href="/services" className="py-2 hover:underline">Services</a>
          <a href="/about" className="py-2 hover:underline">About</a>
          <a href="/contact" className="py-2 hover:underline">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
