import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const saleBanners = [
  {
    id: 1,
    image: "src/assets/add banners/mobile sale.png",
  },
  {
    id: 2,
    image: "src/assets/add banners/buymore.png",
  },
  {
    id: 3,
    image: "src/assets/add banners/gaming consoles.png",
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
    <section
      className="relative max-w-7xl mx-auto px-4 py-8"

    >
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
                className="w-full h-[220px] sm:h-[320px] md:h-[420px] object-fit"
              />

              {/* Gradient overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" /> */}

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 text-white max-w-xl">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                  {banner.title}
                </h2>

                <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-gray-200">
                  {banner.subtitle}
                </p>

                {/* <button
                  onClick={() => navigate("/search")}
                  className="mt-4 sm:mt-6 w-fit px-6 py-2 bg-green-500 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  Shop Now
                </button> */}
              </div>
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
              currentSlide === index
                ? "bg-green-500 w-6"
                : "bg-gray-300 w-2.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default SaleBannerCarousel;