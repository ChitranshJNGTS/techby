import React from "react";
import { motion } from "framer-motion";
import { MdArrowBack } from "react-icons/md";
import { FaInfoCircle, FaShieldAlt, FaFileContract, FaQuestionCircle } from "react-icons/fa";

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
      <div className="px-4  pt-6 pb-4 flex items-center gap-4">
        <button
          onClick={() => window.history.back()}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
        >
          <MdArrowBack className="text-gray-700 text-xl" />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">My Account</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1    space-y-10 pb-10">
        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="flex flex-col items-center gap-3 p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors shadow-sm"
              >
                <div className="text-green-600 text-3xl">{link.icon}</div>
                <span className="font-semibold text-gray-900">{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

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