import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// ✅ Import images directly
import mobileSale from "../assets/add banners/mobile sale.png";
import buyMore from "../assets/add banners/buymore.png";
import gamingConsoles from "../assets/add banners/gaming consoles.png";

const saleBanners = [
  {
    id: 1,
    image: mobileSale,
    title: "Mobile Sale",
  },
  {
    id: 2,
    image: buyMore,
    title: "Buy More Offer",
  },
  {
    id: 3,
    image: gamingConsoles,
    title: "Gaming Consoles",
  },
];

const SaleBannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = saleBanners.length;
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4 py-8">
      <div className="overflow-hidden rounded-2xl shadow-xl">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {saleBanners.map((banner) => (
            <div key={banner.id} className="min-w-full relative">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-[220px] sm:h-[320px] md:h-[420px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-5 gap-2">
        {saleBanners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-green-500 w-6" : "bg-gray-300 w-2.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default SaleBannerCarousel;