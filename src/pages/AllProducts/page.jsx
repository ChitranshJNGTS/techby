



import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import MobileBottomNavbar from "../../components/MobileBottomNavbar";
import Footer from "../../components/Footer";
// import Navbar from "./Navbar";

const ProductsPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const itemsPerPage = 12;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:5000/api/products"
      );

      // Your API returns array directly
      setProductsData(response.data);

      setError("");
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products");
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

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <>
    <Navbar/>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 pt-4 pb-8">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10 px-1">
          Products Near You
        </h2>

        {/* Loading */}
        {loading && (
            <div className="flex items-center justify-center py-6">
      <div
        className="animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"
        style={{ width: 40, height: 40 }}
      ></div>
    </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center text-red-500">
            {error}
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {displayedProducts.map((product) => (
              <div
                key={product._id}
                className="relative bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition rounded-lg"
              >
                <div className="relative bg-gray-100 flex justify-center items-center h-40 sm:h-48">
                  <img
                    src="https://picsum.photos/300/300"
                    alt={product.name}
                    className="h-full object-cover"
                  />
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-medium">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {product.desc}
                  </p>

                  <div className="flex items-center justify-between mt-2 sm:mt-3">
                    <span className="text-green-600 font-semibold text-sm sm:text-base">
                      ₹{product.price}.00
                    </span>

                    <button className="px-3 py-1.5 bg-green-500 text-white text-xs sm:text-sm font-medium rounded hover:bg-green-600 transition">
                      View
                    </button>
                  </div>

                  {/* Static Rating UI */}
                  <div className="flex items-center mt-1 sm:mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        size={12}
                        className="text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center mt-6 sm:mt-8 gap-2 sm:gap-3">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-full border ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              <FaChevronLeft />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 border rounded-md text-xs sm:text-sm ${
                  currentPage === index + 1
                    ? "bg-green-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full border ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
      <Footer/>
      <MobileBottomNavbar/>
    </>
  );
};

export default ProductsPage;


