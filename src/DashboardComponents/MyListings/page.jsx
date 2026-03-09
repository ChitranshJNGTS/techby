import React, { useEffect, useState } from "react";
import {
  Edit,
  Trash2,
  Package,
  Laptop,
  Headphones,
  Smartphone,
  PlusCircle,
} from "lucide-react";
import { getSellerProducts, deleteProduct } from "../../Api/ProductApi"; // centralized API

const MyListings = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ---------------- FETCH SELLER PRODUCTS ----------------
  const fetchProducts = async () => {
    try {
      const res = await getSellerProducts();
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ---------------- DELETE PRODUCT ----------------
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  // ---------------- CATEGORY ICON ----------------
  const getIcon = (category) => {
    if (category.toLowerCase().includes("mobile"))
      return <Smartphone className="w-4 h-4 text-green-600" />;
    if (category.toLowerCase().includes("laptop"))
      return <Laptop className="w-4 h-4 text-green-600" />;
    if (category.toLowerCase().includes("accessories"))
      return <Headphones className="w-4 h-4 text-green-600" />;
    return <Package className="w-4 h-4 text-green-600" />;
  };

  return (
    <div className="min-h-screen bg-white shadow rounded-2xl py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-green-700">
            My Product Listings
          </h1>
        </div>

        {/* Loading */}
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : products.length === 0 ? (
          /* No Product */
          <div className="text-center bg-white p-10 rounded-2xl shadow-sm border border-green-100">
            <Package className="w-12 h-12 mx-auto text-green-400 mb-3" />
            <p className="text-xl font-semibold text-gray-700">
              No Products Yet
            </p>
            <p className="text-sm mt-1 text-gray-500">
              Start listing your products today to reach more customers.
            </p>
          </div>
        ) : (
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {products.map((product) => (
              <div
                key={product._id}
                className="group bg-white border border-green-100  overflow-hidden shadow-sm hover:shadow-md transition relative"
              >
                {/* Featured Badge */}
                {product.featured && (
                  <span className="absolute top-3 left-3 bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                    Featured
                  </span>
                )}

                {/* Image */}
                <div className="relative">
                  <img
                    src={product.imageUrls?.[0] || "/default-product-image.png"}
                    alt={product.name}
                    className="w-full h-52 object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.attributes?.year || "N/A"}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="font-semibold text-lg text-gray-800 mb-1 truncate">
                    {product.name}
                  </h2>

                  {/* Category & Icon */}
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                    {getIcon(product.category)}
                    <span>{product.category.replace("-", " ")}</span>
                  </div>

                  {/* Seller Name */}
                  <p className="text-sm text-gray-500 mb-3">
                    Sold by: <span className="font-medium">{product.sellerId?.shopName}</span>
                  </p>

                  {/* Price and Actions */}
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-bold text-green-700">
                      ₹{product.discountPrice || product.totalPrice}
                    </p>

                    <div className="flex gap-2">
                      <button
                        className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 p-2 rounded-lg transition"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-lg transition"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Floating Button */}
      <button className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg md:hidden transition">
        <PlusCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default MyListings;