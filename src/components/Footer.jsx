// import React from "react";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaSnapchatGhost,
//   FaTwitter,
//   FaYoutube,
//   FaPhoneAlt,
// } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import {
//   FaRegBuilding,
//   FaLandmark,
//   FaArchway,
//   FaMonument,
//   FaTowerObservation,
// } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <footer className="bg-[#1a1a1a] hidden lg:block text-gray-300 px-6 md:px-12 lg:px-24 py-10">
//       {/* Top Section - Cities */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 border-b border-gray-600 pb-8">
//         {[
//           { city: "New York", address: "3948 Ray Court", icon: <FaRegBuilding /> },
//           { city: "San Francisco", address: "933 Harry Place", icon: <FaLandmark /> },
//           { city: "Rome", address: "614 White Oak Drive", icon: <FaArchway /> },
//           { city: "Athens", address: "2648 Pallet Street", icon: <FaMonument /> },
//           { city: "Paris", address: "676 Ottis Street", icon: <FaTowerObservation /> },
//           { city: "London", address: "2132 Nuzum Court", icon: <FaTowerObservation /> },
//         ].map((item, i) => (
//           <div key={i} className="flex flex-col items-start gap-1">
//             <div className="text-white text-lg">{item.icon}</div>
//             <p className="text-white font-semibold">{item.city}</p>
//             <p className="text-gray-400 text-sm">{item.address}</p>
//           </div>
//         ))}
//       </div>

//       {/* Middle Section */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10 border-b border-gray-600">
//         {/* Logo + Info */}
//         <div>
//           <div className="flex items-center gap-2 mb-3">
//             <div className="bg-[#36b37e] text-white font-bold text-2xl px-2 py-1 rounded">
//               H
//             </div>
//             <p className="text-white text-2xl font-bold">TechBy</p>
//           </div>
//           <p className="text-sm text-gray-400 mb-2">
//             The call center is open on weekdays from 9:00 to 20:00 and on weekends
//             from 9:00 to 18:00
//           </p>
//           <p className="flex items-center gap-2 mt-3">
//             <FaPhoneAlt className="text-[#36b37e]" /> +1-716-514-5309
//           </p>
//           <p className="flex items-center gap-2 mt-2">
//             <MdEmail className="text-[#36b37e]" /> TechBy.sales@mail.com
//           </p>
//           <div className="flex items-center gap-4 mt-4 text-lg">
//             <FaFacebookF />
//             <FaInstagram />
//             <FaSnapchatGhost />
//             <FaTwitter />
//             <FaYoutube />
//           </div>
//         </div>

//         {/* Support Service */}
//         <div>
//           <h4 className="text-white font-semibold mb-4">SUPPORT SERVICE</h4>
//           <p className="text-sm text-gray-400 mb-2">
//             The declared value of the goods are valid as of the current date
//           </p>
//           <ul className="space-y-2 mt-4">
//             <li>🐞 Bug report</li>
//             <li>💬 TechBy support</li>
//           </ul>
//         </div>

//         {/* Useful Links */}
//         <div>
//           <h4 className="text-white font-semibold mb-4">USEFUL LINKS</h4>
//           <ul className="space-y-2 text-gray-400">
//             <li>Home</li>
//             <li>Blog</li>
//             <li>Shop</li>
//             <li>About us</li>
//             <li>Contact us</li>
//           </ul>
//         </div>

//         {/* Information + Categories */}
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <h4 className="text-white font-semibold mb-4">INFORMATION</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li>Compare</li>
//               <li>Cart</li>
//               <li>Terms</li>
//               <li>Wishlist</li>
//               <li>Privacy Policy</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-white font-semibold mb-4">CATEGORIES</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li>Audio</li>
//               <li>Mobile</li>
//               <li>Video</li>
//               <li>Computers</li>
//               <li>Appliances</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-400">
//         <p>TechBy © 2025 Created by XTemos Studio</p>
//         <div className="flex items-center gap-3 mt-3 md:mt-0">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
//           <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
//           <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mastercard-logo.png" alt="MasterCard" className="h-6" />
//           <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" alt="Amex" className="h-6" />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;















import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 px-6 md:px-12 lg:px-30 py-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-600 pb-8">
        {/* Logo & Contact */}
        <div>
          <Link to="/" className="flex items-center space-x-2 mb-4">
                <img src={logo} alt="TechBy Logo" className="h-20" />
                 </Link>
          {/* <p className="text-sm text-gray-400 mb-2">
            Call center open weekdays 9:00-20:00, weekends 9:00-18:00
          </p> */}
          {/* <p className="flex items-center gap-2 mt-3">
            <FaPhoneAlt className="text-[#36b37e]" /> 
          </p> */}
          <p className="flex items-center gap-2 mt-2">
            <MdEmail className="text-[#36b37e]" /> techbysupport@gmail.com
          </p>
          <p className="flex items-center gap-2 mt-2 text-green-400 font-semibold">
            <MdLocationOn /> Available only in Indore
          </p>
        </div>

       {/* Quick Links */}
<div>

  <h4 className="text-white font-semibold mb-4">QUICK LINKS</h4>
  <ul className="space-y-2 text-gray-400">
    <li>
      <Link to="/about" className="hover:text-white transition">
        About Us
      </Link>
    </li>

    <li>
      <Link to="/about" className="hover:text-white transition">
        Privacy & Policy
      </Link>
    </li>

    <li>
      <Link to="/about" className="hover:text-white transition">
        Terms & Conditions
      </Link>
    </li>

    <li>
      <Link to="/seller-login" className="hover:text-white transition">
        Seller Login
      </Link>
    </li>
  </ul>
</div>

       {/* Social Media */}
<div>
  <h4 className="text-white font-semibold mb-4">FOLLOW US</h4>

  {/* Social Icons */}
  <div className="flex items-center gap-4 text-lg mb-6">
    <FaFacebookF className="hover:text-[#36b37e] cursor-pointer" />
    <FaInstagram className="hover:text-[#36b37e] cursor-pointer" />
    <FaTwitter className="hover:text-[#36b37e] cursor-pointer" />
    <FaYoutube className="hover:text-[#36b37e] cursor-pointer" />
  </div>

  {/* App Download Section */}
  <h4 className="text-white font-semibold mb-3">DOWNLOAD APP</h4>

  <div className="flex gap-3">
    {/* Apple Store */}
    <div className="relative">
      <img
        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
        alt="App Store"
        className="h-10 opacity-60"
      />
      <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white bg-black/60 rounded">
        Coming Soon
      </span>
    </div>

    {/* Play Store */}
    <div className="relative">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
        alt="Play Store"
        className="h-10 opacity-60"
      />
      <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white bg-black/60 rounded">
        Coming Soon
      </span>
    </div>
  </div>
</div>
      </div>

     {/* Bottom Section */}
<div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-400">
  <p>TechBy © 2025. All rights reserved.</p>


</div>
    </footer>
  );
};

export default Footer;