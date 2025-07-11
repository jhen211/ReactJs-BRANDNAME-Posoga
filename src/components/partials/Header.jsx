import React from "react";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Navigation */}
      <nav className="bg-white p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-500 text-lg">
                  BrandName
                </span>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              <a
                href="#home"
                className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
              >
                Home
              </a>
              <a
                href="#services"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Services
              </a>
              <a
                href="#about"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                About
              </a>
              <a
                href="#contact"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Contact
              </a>
            </div>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-green-700 z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-white text-2xl">
          <a
            href="#home"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#about"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
