// import React from "react";
// import {
//   FaCheck,
//   FaTruck,
//   FaWhatsapp,
// } from "react-icons/fa";
// import Navbar from "./Navbar";
// import CategoryMenu from "./CategoryMenu";

// const similarProducts = Array.from({ length: 20 }, (_, i) => ({
//   id: i + 1,
//   name: `Similar Product ${i + 1}`,
//   price: 199 + i * 50,
//   image: `https://picsum.photos/400/400?random=${i + 50}`,
// }));

// const ProductDetails = () => {

//   const product = {
//     name: "Smartphone 11 Pro",
//     price: 259,
//     originalPrice: 299,
//     brand: "TechWorld",
//     category: "Smartphones",
//     stock: 12,
//     sku: "TW-IP11PRO-256",
//     warranty: "1 Year Manufacturer Warranty",
//     description:
//       "Premium quality smartphone with high performance, excellent camera, and long battery life.",
//   };

//   const shop = {
//     name: "TechWorld Store",
//     title: "Verified Premium Electronics Seller",
//     logo: "https://i.pravatar.cc/100?img=12",
//     whatsapp: "7879746796", // Country code + number (no +, no spaces)
//   };

//   const handleWhatsAppChat = () => {
//     const message = `Hello ${shop.name}, I am interested in ${product.name}. Please share more details.`;
//     const url = `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <>
//       <Navbar />
//       <CategoryMenu />

//       <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 grid md:grid-cols-2 gap-14">

//         {/* LEFT - IMAGE */}
//         <div className="space-y-4">
//           <div className="bg-gray-100 flex items-center justify-center aspect-square overflow-hidden shadow-sm">
//             <img
//               src="https://cdn.thewirecutter.com/wp-content/media/2022/09/iphone-14.jpg"
//               alt="Product"
//               className="w-full h-full object-contain hover:scale-105 transition duration-500"
//             />
//           </div>
//         </div>

//         {/* RIGHT - DETAILS */}
//         <div className="space-y-6 sticky top-24 h-fit">

//           <h2 className="text-3xl font-bold">{product.name}</h2>

//           <div className="flex items-center gap-4">
//             <span className="text-3xl font-bold text-green-600">
//               ₹{product.price}.00
//             </span>
//             <span className="text-gray-400 line-through">
//               ₹{product.originalPrice}.00
//             </span>
//             <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-md">
//               15% OFF
//             </span>
//           </div>

//           <p className="text-gray-600 leading-relaxed">
//             {product.description}
//           </p>

//           {/* WHATSAPP CONTACT BUTTON */}
//           <button
//             onClick={handleWhatsAppChat}
//             className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
//           >
//             <FaWhatsapp size={18} />
//             Chat on WhatsApp
//           </button>

//           {/* PRODUCT DETAILS CARD */}
//           <div className="border rounded-xl p-6 bg-gray-50 shadow-sm space-y-3">
//             <h4 className="font-semibold text-lg mb-2">
//               Product Details
//             </h4>

//             <div className="grid grid-cols-2 gap-y-3 text-sm">
//               <span className="text-gray-500">Brand:</span>
//               <span className="font-medium">{product.brand}</span>

//               <span className="text-gray-500">Category:</span>
//               <span className="font-medium">{product.category}</span>

//               <span className="text-gray-500">SKU:</span>
//               <span className="font-medium">{product.sku}</span>

//               <span className="text-gray-500">Stock:</span>
//               <span className={`font-medium ${
//                 product.stock > 0 ? "text-green-600" : "text-red-600"
//               }`}>
//                 {product.stock > 0 ? "In Stock" : "Out of Stock"}
//               </span>

//               <span className="text-gray-500">Warranty:</span>
//               <span className="font-medium">{product.warranty}</span>
//             </div>
//           </div>

//           {/* SHOP INFO BOX */}
//           <div className="border rounded-2xl p-5 bg-white shadow-md flex items-center gap-4 hover:shadow-lg transition">

//             <div className="w-16 h-16 rounded-full overflow-hidden border">
//               <img
//                 src={shop.logo}
//                 alt={shop.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="flex-1">
//               <h3 className="text-lg font-semibold">
//                 {shop.name}
//               </h3>
//               <p className="text-sm text-gray-500">
//                 {shop.title}
//               </p>

//               <button className="mt-2 text-sm text-green-600 font-medium hover:underline">
//                 Visit Shop
//               </button>
//             </div>
//           </div>

//           {/* FEATURES */}
//           <div className="space-y-2 text-sm text-gray-700">
//             <div className="flex items-center gap-2">
//               <FaCheck className="text-green-600" />
//               Free Shipping on orders over ₹2000
//             </div>
//             <div className="flex items-center gap-2">
//               <FaTruck className="text-green-600" />
//               15 Days Return Policy
//             </div>
//             <div className="flex items-center gap-2">
//               <FaCheck className="text-green-600" />
//               Express Delivery Available
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* SIMILAR PRODUCTS */}
//       <div className="max-w-7xl mx-auto px-6 md:px-20 pb-20">
//         <h2 className="text-4xl font-bold mb-8">
//           Products You May Also Like
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {similarProducts.map((product) => (
//             <div
//               key={product.id}
//               className="relative bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition group"
//             >
//               <div className="relative bg-gray-100 flex justify-center items-center h-60 overflow-hidden">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//                 />
//               </div>

//               <div className="p-4">
//                 <h3 className="text-sm font-medium">
//                   {product.name}
//                 </h3>

//                 <div className="flex items-center justify-between mt-3">
//                   <span className="text-green-600 font-semibold">
//                     ₹{product.price}.00
//                   </span>

//                   <button className="p-2 border rounded-full hover:bg-gray-100 transition">
//                     🛒
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetails;






import React, { useEffect, useState } from "react";
import { FaCheck, FaTruck, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import CategoryMenu from "./CategoryMenu";
import ProductsPage from "./ProductPage";
import Footer from "./Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");



  useEffect(() => {
  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Fetch the new product
  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/products/${id}`);
      setProduct(res.data);
      setSelectedImage(res.data.imageUrls?.[0] || "");
    } catch (error) {
      console.log(error);
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
      ? Math.round(
          ((product.totalPrice - product.discountPrice) / product.totalPrice) * 100
        )
      : 0;

  const handleWhatsAppChat = () => {
    const sellerPhone = product.sellerPhone || "91XXXXXXXXXX";
    const message = `Hello, I am interested in ${product.name}`;
    const url = `https://wa.me/${sellerPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <CategoryMenu />

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-10">
        
        {/* LEFT: Sticky Images */}
        <div className="w-full md:w-1/2 md:sticky md:top-20 h-auto flex flex-col gap-4">
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

        {/* RIGHT: Scrollable Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Title & Price */}
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
            className="w-full md:w-1/2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </button>

          {/* Product Attributes & Seller */}
          <div className="flex flex-col md:flex-row gap-6 mt-4">
            {/* Product Attributes */}
            <div className="flex-1 border rounded-xl p-4 bg-gray-50 shadow-sm">
              <h2 className="font-semibold text-lg mb-3">Product Details</h2>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                {product.attributes &&
                  Object.entries(product.attributes).map(([key, value]) => (
                    <React.Fragment key={key}>
                      <span className="text-gray-500 capitalize">{key}</span>
                      <span>{value}</span>
                    </React.Fragment>
                  ))}
                <span className="text-gray-500">Category</span>
                <span>{product.category}</span>
                <span className="text-gray-500">Delivery</span>
                <span>{product.deliveryAvailable ? "Yes" : "No"}</span>
                <span className="text-gray-500">Featured</span>
                <span>{product.featured ? "Yes" : "No"}</span>
              </div>
            </div>

            {/* Seller Info */}
            {product.sellerId && (
              <div className="flex-1 border rounded-xl p-4 bg-gray-50 shadow-sm">
                <h2 className="font-semibold text-lg mb-3">Seller Details</h2>
                <div className="flex items-center gap-4">
                  <img
                    src={product.sellerId.logo || "/default-shop-logo.png"}
                    alt={product.sellerId.shopName}
                    className="w-14 h-14 rounded-full object-cover border"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-800 font-medium">{product.sellerId.shopName}</span>
                    {product.sellerPhone && (
                      <span className="flex items-center gap-2 text-gray-600 text-sm">
                        <FaPhoneAlt /> {product.sellerPhone}
                      </span>
                    )}
                    {product.sellerEmail && (
                      <span className="flex items-center gap-2 text-gray-600 text-sm">
                        <FaEnvelope /> {product.sellerEmail}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Features Section */}
          <div className="flex flex-col gap-2 text-sm mt-4">
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-600" /> Verified Seller
            </div>
            <div className="flex items-center gap-2">
              <FaTruck className="text-green-600" /> Fast Delivery
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-600" /> Secure Transaction
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <ProductsPage heading="Best Deals Near You" />
      <Footer />
    </>
  );
};

export default ProductDetails;