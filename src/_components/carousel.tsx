"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const images = [
  "https://nqoiq4wi68.ufs.sh/f/2f9wccbRFAt9bWWgoYUN7c0KIQWEmbriUOZySJdXajpVRfC3",
  "https://nqoiq4wi68.ufs.sh/f/2f9wccbRFAt96psswTyKhasXBoDOQt36uzUJkIGePiCgq4x2",
  "https://nqoiq4wi68.ufs.sh/f/2f9wccbRFAt9u9YBFhnPe1wVsWNKD35cqpI9HLi7zYr2yjBl",
  "https://nqoiq4wi68.ufs.sh/f/2f9wccbRFAt98RZERG7xsSH9ZDQIudbEWTc54atfw1MvYeX2",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // Auto-play functionality
  useEffect(() => {
    if (isHovered) return; // Pause auto-play when hovered

    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 2 seconds (faster)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex, isHovered]);

  return (
    <div
      className="relative w-full max-w-md mx-auto mt-8 overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)} // Pause on hover
      onMouseLeave={() => setIsHovered(false)} // Resume on hover out
    >
      {/* Faster slide transition */}
      <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)`, marginRight: "-1px" }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>

      {/* Hidden buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition opacity-0 hover:opacity-100"
      >
        <FaChevronLeft className="text-lg" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition opacity-0 hover:opacity-100"
      >
        <FaChevronRight className="text-lg" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-500"}`}
          />
        ))}
      </div>
    </div>
  );
}     