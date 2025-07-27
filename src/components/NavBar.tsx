"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "My work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // منع تمرير الصفحة عند فتح القائمة
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md" : "bg-white/60"
      } backdrop-blur-xl`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold font-serif text-[#A74B5D] tracking-wide">
          Savia Yarba
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#4B2E2E] font-medium">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className="hover:text-[#A74B5D] transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#4B2E2E] z-50"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-5 p-6 text-[#4B2E2E] text-lg font-medium">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={toggleMenu}
              className="block hover:text-[#A74B5D] transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 backdrop-blur-sm"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
