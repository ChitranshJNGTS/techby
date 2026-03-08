import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaThLarge } from "react-icons/fa";

const MobileBottomNavbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "All Products", icon: <FaThLarge />, path: "/all-products" },
    { name: "Profile", icon: <FaUser />, path: "/account" },
  ];

  return (
    <nav className="fixed bottom-2 left-1/2 transform -translate-x-1/2 w-11/12 bg-white rounded-3xl shadow-xl lg:hidden z-50">
      <div className="flex justify-around items-center py-1.5">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex flex-col items-center relative"
            >
              {/* Icon */}
              <div
                className={`text-xl p-2 rounded-full transition-transform duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-green-400 to-blue-500 text-white scale-105 shadow-md"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {item.icon}
              </div>

              {/* Label */}
              <span
                className={`text-[11px] mt-0.5 font-medium ${
                  isActive ? "text-green-600" : "text-gray-500"
                }`}
              >
                {item.name}
              </span>

              {/* Active Dot */}
              {isActive && (
                <span className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-green-500" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNavbar;