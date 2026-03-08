import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInfoCircle,
  FaShieldAlt,
  FaFileContract,
  FaExclamationTriangle,
  FaMapMarkerAlt,
} from "react-icons/fa";

const AboutPoliciesPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "About Us",
      icon: <FaInfoCircle className="text-green-600 w-6 h-6" />,
      content: (
        <>
          <p className="mb-3">
            Welcome to <span className="font-semibold">YourWebsiteName</span>, your trusted online marketplace for pre-owned products. Our platform connects verified dealers directly to customers, offering high-quality products at competitive prices.
          </p>
          <p className="mb-3">
            We strive to make buying and selling pre-owned goods as seamless as possible. From electronics and gadgets to home appliances and fashion items, we provide detailed listings, photos, and dealer contact information to help you make informed purchases.
          </p>
          <p className="mb-3">
            Our mission is simple: **connect customers with reliable dealers, simplify the buying process, and provide excellent customer service**. While we facilitate the transactions, the products are owned and managed by the dealers themselves.
          </p>
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-3 rounded-lg flex items-start gap-2">
            <FaExclamationTriangle className="text-green-600 w-5 h-5 mt-1" />
            <p className="text-green-800 text-sm">
              Important: Product quality, warranty, or any issues related to the products are the responsibility of the dealer. We provide all necessary details about each shop to ensure transparency.
            </p>
          </div>
          <p className="mb-3">
            Currently, our services are available only in <span className="font-semibold">Indore</span>, connecting customers to local trusted dealers.
          </p>
        </>
      ),
    },
    {
      title: "Privacy Policy",
      icon: <FaShieldAlt className="text-green-600 w-6 h-6" />,
      content: (
        <>
          <p className="mb-3">
            Your privacy is important to us. At <span className="font-semibold">YourWebsiteName</span>, we collect personal information such as your name, email, phone number, and purchase details to facilitate transactions and improve your shopping experience.
          </p>
          <p className="mb-3">
            We do not sell your personal data to third parties. Necessary information may be shared with dealers to ensure proper order fulfillment. We use cookies and similar technologies to enhance navigation and personalize your experience.
          </p>
          <p className="mb-3">
            All sensitive information is stored securely and handled in compliance with applicable laws. By using our platform, you consent to our data collection and usage policies.
          </p>
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-3 rounded-lg flex items-start gap-2">
            <FaExclamationTriangle className="text-green-600 w-5 h-5 mt-1" />
            <p className="text-green-800 text-sm">
              Note: We may update our privacy policy from time to time. Users are advised to review it periodically for changes.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Terms & Conditions",
      icon: <FaFileContract className="text-green-600 w-6 h-6" />,
      content: (
        <>
          <p className="mb-3">
            <span className="font-semibold">YourWebsiteName</span> serves as an online marketplace connecting customers with verified dealers. We facilitate transactions but do not own the products listed.
          </p>
          <p className="mb-3">
            Users are responsible for checking product details, quality, and authenticity. Any issues related to products, warranties, or returns must be addressed directly with the dealer.
          </p>
          <p className="mb-3">
            By using our platform, you agree to our terms and conditions and acknowledge that we are not liable for product-related problems. Our revenue comes from commissions on sales made through our platform.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-3 rounded-lg flex items-start gap-2">
            <FaExclamationTriangle className="text-yellow-600 w-5 h-5 mt-1" />
            <p className="text-yellow-800 text-sm">
              Disclaimer: We are not responsible for the accuracy, quality, or legality of the products listed. All disputes should be resolved between the dealer and the customer.
            </p>
          </div>
          <p>
            Users are encouraged to read all product descriptions carefully and confirm details directly with the dealer before making a purchase.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Page Title */}
      <div className="px-4 pt-6 pb-4 flex items-center gap-4 bg-white shadow-sm">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-green-700"
        >
          About & Policies
        </motion.h1>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-5xl mx-auto py-10 space-y-8 px-4 md:px-0">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            {/* Header */}
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center gap-3 p-6 bg-gradient-to-r from-green-100 via-green-50 to-green-100 hover:from-green-200 hover:via-green-100 hover:to-green-200 transition-colors"
            >
              {section.icon}
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">{section.title}</h2>
              <span className="ml-auto text-gray-500">{openIndex === idx ? "−" : "+"}</span>
            </button>

            {/* Content */}
            {openIndex === idx && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="p-6 text-gray-700 text-sm md:text-base space-y-3"
              >
                {section.content}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-5xl mx-auto px-4 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>© 2026 YourWebsiteName. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#about" className="hover:text-green-600">About Us</a>
            <a href="#privacy" className="hover:text-green-600">Privacy Policy</a>
            <a href="#terms" className="hover:text-green-600">Terms & Conditions</a>
            <a href="#help" className="hover:text-green-600">Help</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPoliciesPage;