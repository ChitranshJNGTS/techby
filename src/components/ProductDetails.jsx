import React, { useEffect, useState } from "react";
import { FaCheck, FaTruck, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getProductById } from "../Api/ProductApi"; // ✅ centralized API
import Navbar from "./Navbar";
import CategoryMenu from "./CategoryMenu";
import ProductsPage from "./ProductPage";
import Footer from "./Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchProduct = async () => {
      try {
        const res = await getProductById(id); // ✅ using API
        setProduct(res.data);
        setSelectedImage(res.data.imageUrls?.[0] || "");
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center py-20 text-lg font-medium">
        Loading Product...
      </div>
    );
  }

  const discountPercent =
    product.totalPrice && product.discountPrice
      ? Math.round(((product.totalPrice - product.discountPrice) / product.totalPrice) * 100)
      : 0;

  const handleWhatsAppChat = () => {
  const sellerPhone = product.sellerPhone || "917879746796";

  // Construct product URL dynamically
  const productUrl = window.location.href;

  // Prepare message with product details
  const message = `
Hello! I am interested in this product:

Name: ${product.name}
Price: ₹${product.discountPrice || product.totalPrice}
Category: ${product.category}
Condition: ${product.attributes?.condition || "N/A"}
Description: ${product.desc}

You can view it here: ${productUrl}
`;

  // Encode message for WhatsApp URL
  const url = `https://wa.me/${sellerPhone}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp chat
  window.open(url, "_blank");
};

  return (
    <>
      <Navbar />
      <CategoryMenu />

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-10">

        {/* LEFT: Sticky Images */}
        <div className="w-full md:w-1/2">
          <div className="sticky top-30 flex flex-col gap-4 md:max-h-[calc(100vh-5rem)] overflow-auto">
            <div className="relative rounded-lg overflow-hidden h-96">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.featured && (
                <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-lg shadow">
                  Featured
                </span>
              )}
              {product.deliveryAvailable && (
                <span className="absolute bottom-3 right-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-lg shadow">
                  Free Delivery
                </span>
              )}
            </div>

            {product.imageUrls && product.imageUrls.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.imageUrls.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className={`w-20 h-20 object-cover rounded-lg border cursor-pointer transition ${
                      img === selectedImage ? "border-green-600" : "border-gray-300"
                    }`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Scrollable Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h1>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-3xl md:text-4xl text-green-600 font-bold">
                ₹{product.discountPrice || product.totalPrice}
              </span>
              {discountPercent > 0 && (
                <>
                  <span className="line-through text-gray-400">₹{product.totalPrice}</span>
                  <span className="text-green-600 font-semibold">{discountPercent}% OFF</span>
                </>
              )}
            </div>
            <p className="text-gray-700 mt-3">{product.desc}</p>
          </div>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppChat}
            className="w-full md:w-3/5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-full flex items-center justify-center gap-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
          >
            <FaWhatsapp className="text-white text-lg md:text-xl animate-bounce-slow" /> 
            Chat on WhatsApp
          </button>

          {/* Product Attributes & Seller */}
          <div className="flex flex-col gap-6 mt-6">
            <div className="flex-1 p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="font-bold text-xl mb-4 text-gray-800 border-b pb-2">Product Details</h2>
              <div className="grid grid-cols-2 gap-y-3 text-sm md:text-base">
                {product.attributes &&
                  Object.entries(product.attributes).map(([key, value]) => (
                    <React.Fragment key={key}>
                      <span className="text-gray-500 font-medium capitalize">{key}</span>
                      <span className="text-gray-700 font-semibold">{value}</span>
                    </React.Fragment>
                  ))}
                <span className="text-gray-500 font-medium">Category</span>
                <span className="text-gray-700 font-semibold">{product.category}</span>
              </div>
            </div>

            {product.sellerId && (
              <div className="flex-1 p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="font-bold text-xl mb-4 text-gray-800 border-b pb-2">Seller Details</h2>
                <div className="flex items-center gap-5">
                  <img
                    src={product.sellerId.logo || "/default-shop-logo.png"}
                    alt={product.sellerId.shopName}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-900 font-semibold text-lg">{product.sellerId.shopName}</span>
                    {product.sellerPhone && (
                      <span className="flex items-center gap-2 text-gray-600 text-sm hover:text-blue-600 transition-colors">
                        <FaPhoneAlt className="text-gray-500" /> {product.sellerPhone}
                      </span>
                    )}
                    {product.sellerEmail && (
                      <span className="flex items-center gap-2 text-gray-600 text-sm hover:text-blue-600 transition-colors">
                        <FaEnvelope className="text-gray-500" /> {product.sellerEmail}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <ProductsPage heading="You May Also Like" />
      <Footer />
    </>
  );
};

export default ProductDetails;