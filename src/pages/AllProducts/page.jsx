import React, { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import MobileBottomNavbar from "../../components/MobileBottomNavbar";
import Footer from "../../components/Footer";
import { getAllProducts } from "../../Api/ProductApi";

const ProductsPage = () => {
  const navigate = useNavigate();

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
      const response = await getAllProducts();
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

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  const getDiscountPercent = (total, discount) =>
    Math.round(((total - discount) / total) * 100);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-2 sm:px-4 pt-4 pb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10 px-1">
          Browse All Products
        </h2>

        {loading && (
          <div className="flex items-center justify-center py-6">
            <div
              className="animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"
              style={{ width: 40, height: 40 }}
            ></div>
          </div>
        )}

        {error && <div className="text-center text-red-500">{error}</div>}

        {!loading && !error && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {displayedProducts.map((product) => (
              <div
                key={product._id}
                onClick={() => navigate(`/product/${product._id}`)}
                className="bg-white border border-gray-200 overflow-hidden shadow hover:shadow-lg transition cursor-pointer flex flex-col"
              >
                <div className="relative w-full h-48">
                  <img
                    src={product.imageUrls?.[0] || "/default-product-image.png"}
                    alt={product.name || "Product Image"}
                    className="w-full h-full object-cover"
                  />
                  {product.featured && (
                    <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                  {product.deliveryAvailable && (
                    <span className="absolute bottom-2 right-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      Free Delivery
                    </span>
                  )}
                </div>

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
                      <>
                        <span className="line-through text-gray-400">
                          ₹{product.totalPrice}
                        </span>
                        <span className="text-red-500 text-xs font-semibold ml-1">
                          {getDiscountPercent(
                            product.totalPrice,
                            product.discountPrice
                          )}
                          % OFF
                        </span>
                      </>
                    )}
                  </div>

                  {product.sellerId && (
                    <div className="flex items-center gap-2 mt-4">
                      <img
                        src={product.sellerId.logo || "/default-shop-logo.png"}
                        alt={product.sellerId.shopName || "Shop Logo"}
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
        )}

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
      <Footer />
      <MobileBottomNavbar />
    </>
  );
};

export default ProductsPage;