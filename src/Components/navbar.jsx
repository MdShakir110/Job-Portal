import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineSearch, HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navigationLinks = [
    { name: "Find Jobs", path: "/find-jobs" },
    { name: "Top Companies", path: "/top-companies" },
    { name: "Job Tracker", path: "/job-tracker" },
    { name: "My Calendar", path: "/my-calendar" },
    { name: "Documents", path: "/documents" },
    { name: "Messages", path: "/messages" },
    { name: "Notifications", path: "/notifications" },
  ];

  const isActiveLink = (path) => pathname === path;

  return (
    <>
      <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/job-search-logo.jpg"
                alt="Find Jobs Logo"
                className="h-10 w-10 rounded-lg object-cover"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-md transition-colors duration-200 ${
                    isActiveLink(link.path)
                      ? "font-bold bg-gradient-to-r from-blue-700 to-gray-800 bg-clip-text text-transparent"
                      : "text-gray-700 hover:text-blue-600 font-light"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2">
                <div className="relative">
                  <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    className="pl-10 pr-4 py-2  bg-[#F1F5F9] rounded-lg focus:none  focus:border-transparent outline-none text-sm w-64"
                  />
                </div>
              </div>

              <button className="sm:hidden p-2 text-gray-600 hover:text-blue-600">
                <HiOutlineSearch className="h-6 w-6" />
              </button>

              <button className="hidden lg:block bg-blue-600 text-white px-4 py-2 rounded-lg font-normal hover:bg-blue-700">
                Resume Builder
              </button>

              <img
                src="/professional-profile-avatar.png"
                alt="Profile"
                className="h-10 w-10 rounded-full border-2 border-gray-200 hover:border-blue-300 cursor-pointer object-cover"
              />

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
              >
                <HiOutlineMenu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0  bg-[rgba(0,0,0,0.2)]"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Link
                to="/"
                className="flex items-center space-x-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img
                  src="/job-search-logo.jpg"
                  alt="Find Jobs Logo"
                  className="h-8 w-8 rounded-lg object-cover"
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-600 hover:text-red-600"
              >
                <HiOutlineX className="h-6 w-6" />
              </button>
            </div>

            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                />
              </div>
            </div>

            <div className="py-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-6 py-3 text-base font-medium ${
                    isActiveLink(link.path)
                      ? "text-blue-600 bg-blue-50 border-r-4 border-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200">
              <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700">
                Resume Builder
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
