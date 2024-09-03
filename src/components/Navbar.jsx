import React, { useState, useRef, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";
import { PiStudent } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Moved inside the component
  const dropdownRef = useRef(null);
const navigate = useNavigate()
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Replace 'token' with your key for auth tokens
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    
    localStorage.removeItem('token'); // Remove token on logout
    setIsLoggedIn(false); // Update the login status
    navigate("/")
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div>
              <a href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <img src="https://png.pngtree.com/template/20191024/ourmid/pngtree-deal-people-logo-template-design-icons-logo-symbol-iconic-deal-logo-image_323048.jpg" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="font-bold">Alumni Connect</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</a>
              <a href="/alumni" className="py-5 px-3 text-gray-700 hover:text-gray-900">Alumni</a>
              <a href="/students" className="py-5 px-3 text-gray-700 hover:text-gray-900">Students</a>
              <a href="/mentorship" className="py-5 px-3 text-gray-700 hover:text-gray-900">Mentorship</a>
              <a href="/events" className="py-5 px-3 text-gray-700 hover:text-gray-900">Events</a>
              <a href="/forums" className="py-5 px-3 text-gray-700 hover:text-gray-900">Forums</a>
              <a href="/support" className="py-5 px-3 text-gray-700 hover:text-gray-900">Support</a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <form className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="ml-2 text-gray-700 hover:text-gray-900">
                <CiSearch size={24} />
              </button>
            </form>
            <div
              className="relative ml-4"
              onClick={handleDropdownToggle}
              ref={dropdownRef}
            >
              <button className="py-2 px-4 bg-gray-200 text-gray-700 rounded flex items-center space-x-2 hover:bg-gray-300 transition duration-300">
                <span>Talent</span>
                <HiChevronDown size={20} />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  <a href="/alumni" className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700">
                    <FaUserGraduate size={20} className="mr-2" />
                    Alumni
                  </a>
                  <a href="/students" className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700">
                    <PiStudent size={20} className="mr-2" />
                    Students
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="py-2 px-5 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
              >
                Logout
              </button>
            ) : (
              <a href="/login" className="py-2 px-5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
                Login
              </a>
            )}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={handleMenuToggle} className="mobile-menu-button">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-300">
          <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
          <a href="/alumni" className="block py-2 px-4 text-sm hover:bg-gray-200">Alumni</a>
          <a href="/students" className="block py-2 px-4 text-sm hover:bg-gray-200">Students</a>
          <a href="/mentorship" className="block py-2 px-4 text-sm hover:bg-gray-200">Mentorship</a>
          <a href="/events" className="block py-2 px-4 text-sm hover:bg-gray-200">Events</a>
          <a href="/forums" className="block py-2 px-4 text-sm hover:bg-gray-200">Forums</a>
          <a href="/support" className="block py-2 px-4 text-sm hover:bg-gray-200">Support</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
