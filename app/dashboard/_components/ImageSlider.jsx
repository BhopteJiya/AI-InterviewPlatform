"use client";

import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
  "https://www.ttnews.com/sites/default/files/styles/article_full_width_webp/public/2023-09/iTECH-Dysart-1200.jpg.webp",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12">

      {/* Image */}
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <img
          src={images[current]}
          alt="Interview practice"
          className="w-full h-[300px] md:h-[400px] object-cover transition duration-700"
        />
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}