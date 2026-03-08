// import React from "react";
// import { Star } from "lucide-react";

// const products = [
//   {
//     id: 1,
//     title: "Smartphone 11 Pro",
//     desc: "64GB, A13 Bionic",
//     price: 259,
//     rating: 5,
//     image: "https://picsum.photos/400/400?random=3",
//     featured: true,
//   },
//   {
//     id: 2,
//     title: "Smartphone A30",
//     desc: "4000mAh, 6.2in Display",
//     price: 199,
//     rating: 4,
//     featured: false,
//     image: "https://picsum.photos/400/400?random=4",
//   },
//   {
//     id: 3,
//     title: "Metal Case Notebook",
//     desc: "Intel i7, 512GB SSD",
//     price: 189,
//     rating: 5,
//     featured: true,
//     image: "https://picsum.photos/400/400?random=5",
//   },
//   {
//     id: 4,
//     title: "Smart Band Carbon",
//     desc: "Steps, Heart Rate",
//     price: 119,
//     rating: 4,
//     featured: false,
//     image: "https://picsum.photos/400/400?random=6",
//   },
//   {
//     id: 5,
//     title: "Photo Omega D3R II",
//     desc: "E-mount, 500 shots",
//     price: 159,
//     rating: 5,
//     featured: true,
//     image: "https://picsum.photos/400/400?random=7",
//   },
//   {
//     id: 6,
//     title: "Photo 55mm f/1.8",
//     desc: "E 16-55mm, 0.33m",
//     price: 205,
//     rating: 4,
//     featured: false,
//     image: "https://picsum.photos/400/400?random=8",
//   },
//   {
//     id: 7,
//     title: "Wireless Earbuds X",
//     desc: "Noise Cancelling",
//     price: 99,
//     rating: 4,
//     featured: true,
//     image: "https://picsum.photos/400/400?random=9",
//   },
//   {
//     id: 8,
//     title: "Extra Product Hidden",
//     desc: "This will appear in View More",
//     price: 149,
//     rating: 5,
//     featured: false,
//     image: "https://picsum.photos/400/400?random=10",
//   },
// ];

// const FeaturedProducts = () => {
//   const maxItemsToShow = 7;
//   const displayedProducts = products.slice(0, maxItemsToShow);

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12">
//       <h2 className="text-2xl font-bold mb-8">Featured Products</h2>

//       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {displayedProducts.map((product) => (
//           <div
//             key={product.id}
//             className="border border-gray-300 overflow-hidden bg-white hover:shadow-lg transition relative"
//           >
//             {/* Feature Badge */}
//             {product.featured && (
//               <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg">
//                 Featured
//               </span>
//             )}

//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="font-medium text-gray-800">{product.title}</h3>
//               <p className="text-sm text-gray-500">{product.desc}</p>
//               <div className="flex items-center space-x-1 my-1">
//                 {Array.from({ length: product.rating }).map((_, i) => (
//                   <Star
//                     key={i}
//                     className="w-4 h-4 fill-yellow-400 text-yellow-400"
//                   />
//                 ))}
//               </div>
//               <div className="flex items-center justify-between mt-2">
//                 <span className="text-lg font-semibold text-gray-900">
//                   £{product.price}.00
//                 </span>
//                 <button className="px-4 py-1.5 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition">
//                   View
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* View More Box */}
//         {products.length > maxItemsToShow && (
//           <div className="flex flex-col items-center justify-center border border-gray-300 rounded-2xl p-6 cursor-pointer hover:bg-gray-100 transition">
//             <h3 className="font-semibold text-gray-900 text-lg">View More</h3>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;















import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../Api/ProductApi"; // ✅ import API

const FeaturedProducts = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const maxItemsToShow = 7;

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await getAllProducts(); // ✅ use API file
      const featuredProduct = response.data.find((p) => p.featured === true);
      if (featuredProduct) setProduct(featuredProduct);
      else setError("No featured product found");
    } catch (err) {
      console.error(err);
      setError("Failed to load featured product");
    } finally {
      setLoading(false);
    }
  };

  const handleViewMore = () => {
    navigate(`/search?featured=true`);
  };

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500 animate-pulse">
        Loading featured products...
      </div>
    );
  }

  if (error || !product) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  // Duplicate product for display
  const displayedProducts = Array.from({ length: maxItemsToShow }, () => product);

  return (
    <div className="max-w-7xl mx-auto p-4 border-4 border-green-500 rounded-3xl bg-green-50 shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-green-800 text-center">
        Featured Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-3 md:gap-4 lg:gap-8">
        {displayedProducts.map((p, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/product/${p._id}`);
              window.scrollTo(0, 0);
            }}
            className="group relative bg-white shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1 overflow-hidden border border-green-200 cursor-pointer"
          >
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow z-10">
              Featured
            </span>

            <img
              src={p.imageUrls?.[0] || "/default-product-image.png"}
              alt={p.name}
              className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="p-3 sm:p-4 md:p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">
                  {p.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">
                  {p.desc}
                </p>
              </div>

              <div className="mt-2 sm:mt-3">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-green-600 font-bold text-sm sm:text-base">
                    ₹{p.discountPrice || p.totalPrice}
                  </span>
                  {p.discountPrice && (
                    <span className="line-through text-gray-400 text-xs sm:text-sm">
                      ₹{p.totalPrice}
                    </span>
                  )}
                </div>

                {p.sellerId && (
                  <div className="flex items-center gap-2 mt-2 sm:mt-3">
                    <img
                      src={p.sellerId.logo || "/default-shop-logo.png"}
                      alt={p.sellerId.shopName}
                      className="w-8 h-8 rounded-full object-cover border border-green-200"
                    />
                    <span className="text-gray-700 font-medium text-xs sm:text-sm truncate">
                      {p.sellerId.shopName}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <div
          onClick={handleViewMore}
          className="flex flex-col items-center justify-center border-2 border-dashed border-green-400 rounded-2xl p-4 sm:p-5 cursor-pointer hover:bg-green-100 transition-all duration-300"
        >
          <h3 className="font-semibold text-green-800 text-sm sm:text-base mb-1 sm:mb-2">
            View More
          </h3>
          <p className="text-xs sm:text-sm text-green-700 text-center">
            See all featured products
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;