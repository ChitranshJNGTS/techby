import React from "react";
import { motion } from "framer-motion";
import { MdArrowBack } from "react-icons/md";
import { FaInfoCircle, FaShieldAlt, FaFileContract, FaQuestionCircle } from "react-icons/fa";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import AboutPoliciesPage from "../about/page";

const AccountPage = () => {
  const links = [
    { label: "About Us", icon: <FaInfoCircle />, url: "/about" },
    { label: "Privacy Policy", icon: <FaShieldAlt />, url: "/privacy" },
    { label: "Terms & Conditions", icon: <FaFileContract />, url: "/terms" },
    { label: "Help", icon: <FaQuestionCircle />, url: "/help" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Top Back Button & Title */}
      <div className="px-4  pt-6 pb-4 bg-green-100 flex items-center gap-4">
        <button
          onClick={() => window.history.back()}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
        >
          <MdArrowBack className="text-gray-700 text-xl" />
        </button>
         <Link to="/" className="flex items-center space-x-2">
       <img src={logo} alt="TechBy Logo" className="h-12 md:h-18" />
        </Link>
      </div>

      {/* Main Content */}
      <AboutPoliciesPage/>

      {/* Bottom Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-5xl mx-auto px-4 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>© 2026 TechBy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AccountPage;