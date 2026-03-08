// import React, { useState } from "react";
// import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Navbar from "./Navbar";

// const productsData = Array.from({ length: 30 }, (_, i) => ({
//   id: i + 1,
//   name: `Product ${i + 1}`,
//   desc: "High-quality and durable item for daily use.",
//   price: 100 + (i * 10) % 300,
//   rating: Math.floor(Math.random() * 5) + 1,
//   image: `https://picsum.photos/300/300?random=${i + 1}`,
//   tag: i % 5 === 0 ? "HOT" : "",
// }));

// const ProductsPage = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const itemsPerPage = 12;
//   const totalPages = Math.ceil(productsData.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const displayedProducts = productsData.slice(
//     startIndex,
//     startIndex + itemsPerPage
//   );

//   const handlePageChange = (page) => {
//     if (page > 0 && page <= totalPages) setCurrentPage(page);
//   };

//   return (
//     <>
//       {/* <Navbar /> */}
//       <div className="max-w-7xl mx-auto px-2 sm:px-4 pt-4 pb-8">

//         {/* Heading */}
//         <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10 px-1">
//           Products Near You
//         </h2>

//         {/* Products Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
//           {displayedProducts.map((product) => (
//             <div
//               key={product.id}
//               className="relative bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition rounded-lg"
//             >
//               <div className="relative bg-gray-100 flex justify-center items-center h-40 sm:h-48">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-full object-cover"
//                 />
//                 {product.tag && (
//                   <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
//                     {product.tag}
//                   </span>
//                 )}
//               </div>

//               <div className="p-3 sm:p-4">
//                 <h3 className="text-sm sm:text-base font-medium">{product.name}</h3>
//                 <p className="text-xs sm:text-sm text-gray-500 mt-1">{product.desc}</p>

//                 <div className="flex items-center justify-between mt-2 sm:mt-3">
//                   <span className="text-green-600 font-semibold text-sm sm:text-base">
//                     ₹{product.price}.00
//                   </span>

//                   <button className="px-3 py-1.5 bg-green-500 text-white text-xs sm:text-sm font-medium rounded hover:bg-green-600 transition">
//                     View
//                   </button>
//                 </div>

//                 <div className="flex items-center mt-1 sm:mt-2">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <FaStar
//                       key={i}
//                       size={12}
//                       className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex flex-wrap justify-center items-center mt-6 sm:mt-8 gap-2 sm:gap-3">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className={`p-2 rounded-full border ${
//               currentPage === 1
//                 ? "text-gray-400 cursor-not-allowed"
//                 : "hover:bg-gray-100"
//             }`}
//           >
//             <FaChevronLeft />
//           </button>

//           {[...Array(totalPages)].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handlePageChange(index + 1)}
//               className={`px-3 py-1 border rounded-md text-xs sm:text-sm ${
//                 currentPage === index + 1
//                   ? "bg-green-600 text-white"
//                   : "hover:bg-gray-100"
//               }`}
//             >
//               {index + 1}
//             </button>
//           ))}

//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className={`p-2 rounded-full border ${
//               currentPage === totalPages
//                 ? "text-gray-400 cursor-not-allowed"
//                 : "hover:bg-gray-100"
//             }`}
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductsPage;














































// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// // import Navbar from "./Navbar";

// const ProductsPage = () => {
//   const [productsData, setProductsData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const itemsPerPage = 12;

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       setLoading(true);

//       const response = await axios.get(
//         "http://localhost:5000/api/products"
//       );

//       // Your API returns array directly
//       setProductsData(response.data);

//       setError("");
//     } catch (err) {
//       console.error("Error fetching products:", err);
//       setError("Failed to load products");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const totalPages = Math.ceil(productsData.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const displayedProducts = productsData.slice(
//     startIndex,
//     startIndex + itemsPerPage
//   );

//   const handlePageChange = (page) => {
//     if (page > 0 && page <= totalPages) setCurrentPage(page);
//   };

//   return (
//     <>
//       <div className="max-w-7xl mx-auto px-2 sm:px-4 pt-4 pb-8">

//         {/* Heading */}
//         <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10 px-1">
//           Products Near You
//         </h2>

//         {/* Loading */}
//         {loading && (
//             <div className="flex items-center justify-center py-6">
//       <div
//         className="animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"
//         style={{ width: 40, height: 40 }}
//       ></div>
//     </div>
//         )}

//         {/* Error */}
//         {error && (
//           <div className="text-center text-red-500">
//             {error}
//           </div>
//         )}

//         {/* Products Grid */}
//         {!loading && !error && (
//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
//             {displayedProducts.map((product) => (
//               <div
//                 key={product._id}
//                 className="relative bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition rounded-lg"
//               >
//                 <div className="relative bg-gray-100 flex justify-center items-center h-40 sm:h-48">
//                   <img
//                     src="https://picsum.photos/300/300"
//                     alt={product.name}
//                     className="h-full object-cover"
//                   />
//                 </div>

//                 <div className="p-3 sm:p-4">
//                   <h3 className="text-sm sm:text-base font-medium">
//                     {product.name}
//                   </h3>
//                   <p className="text-xs sm:text-sm text-gray-500 mt-1">
//                     {product.desc}
//                   </p>

//                   <div className="flex items-center justify-between mt-2 sm:mt-3">
//                     <span className="text-green-600 font-semibold text-sm sm:text-base">
//                       ₹{product.price}.00
//                     </span>

//                     <button className="px-3 py-1.5 bg-green-500 text-white text-xs sm:text-sm font-medium rounded hover:bg-green-600 transition">
//                       View
//                     </button>
//                   </div>

//                   {/* Static Rating UI */}
//                   <div className="flex items-center mt-1 sm:mt-2">
//                     {Array.from({ length: 5 }).map((_, i) => (
//                       <FaStar
//                         key={i}
//                         size={12}
//                         className="text-yellow-400"
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Pagination */}
//         {!loading && totalPages > 1 && (
//           <div className="flex flex-wrap justify-center items-center mt-6 sm:mt-8 gap-2 sm:gap-3">
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className={`p-2 rounded-full border ${
//                 currentPage === 1
//                   ? "text-gray-400 cursor-not-allowed"
//                   : "hover:bg-gray-100"
//               }`}
//             >
//               <FaChevronLeft />
//             </button>

//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={`px-3 py-1 border rounded-md text-xs sm:text-sm ${
//                   currentPage === index + 1
//                     ? "bg-green-600 text-white"
//                     : "hover:bg-gray-100"
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}

//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className={`p-2 rounded-full border ${
//                 currentPage === totalPages
//                   ? "text-gray-400 cursor-not-allowed"
//                   : "hover:bg-gray-100"
//               }`}
//             >
//               <FaChevronRight />
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProductsPage;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../Api/ProductApi"; // ✅ import from api file

const ProductsPage = ({ heading = "Products Near You" }) => {
  const [productsData, setProductsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const itemsPerPage = 12;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getAllProducts(); // ✅ call api function
      setProductsData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(productsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = productsData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">{heading}</h2>

      {loading && (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full border-4 border-gray-300 border-t-green-600 w-10 h-10"></div>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {!loading &&
          displayedProducts.map((product) => (
            <div
              key={product._id}
              onClick={() => navigate(`/product/${product._id}`)}
              className="bg-white border border-gray-200 overflow-hidden shadow hover:shadow-lg transition cursor-pointer flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <img
                  src={product.imageUrls?.[0] || "/default-product-image.png"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.featured && (
                  <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded">
                    Featured
                  </span>
                )}
                {product.deliveryAvailable && (
                  <span className="absolute bottom-2 right-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    Free Delivery Available
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-gray-800 truncate">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                  {product.desc}
                </p>

                <div className="flex items-center gap-2 mt-3">
                  <span className="text-green-600 font-bold text-lg">
                    ₹{product.discountPrice || product.totalPrice}
                  </span>
                  {product.discountPrice && (
                    <span className="line-through text-gray-400">
                      ₹{product.totalPrice}
                    </span>
                  )}
                </div>

                {product.sellerId && (
                  <div className="flex items-center gap-2 mt-4">
                    <img
                      src={product.sellerId.logo || "/default-shop-logo.png"}
                      alt={product.sellerId.shopName}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-gray-700 font-medium text-sm">
                      {product.sellerId.shopName}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;