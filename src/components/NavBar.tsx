"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => setIsOpen(!isOpen); // Function to toggle menu visibility

  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-purple-900">
      {/* Logo */}
      <div className="text-yellow-500 font-bold text-lg">Savia Yarba</div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex">
        <ul className="flex space-x-8 text-white font-semibold">
          {[
            "Home",
            "About",
            "Services",
            "My Skills",
            "My Work",
            "Contact Me",
          ].map((item, index) => (
            <li key={index}>
              <Link href={`#${item.toLowerCase().replace(/ /g, "")}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div onClick={toggleMenu} className="sm:hidden cursor-pointer">
        <FaBars size={30} className="text-green-600" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-[65%] h-screen bg-yellow-500 p-10 ease-in duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <div onClick={toggleMenu} className="cursor-pointer">
            <FaTimes size={30} className="text-green-600" />
          </div>
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col space-y-4 mt-4 text-purple-900 font-semibold">
          {[
            "Home",
            "About",
            "Services",
            "My Skills",
            "My Work",
            "Contact Me",
          ].map((item, index) => (
            <li key={index}>
              <Link
                href={`#${item.toLowerCase().replace(/ /g, "")}`}
                onClick={toggleMenu}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
