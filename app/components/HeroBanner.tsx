"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const banners = [
  { id: 1, src: "/banner/re30oziuix6etcra5fvp.webp", alt: "Banner 1" },
  { id: 2, src: "/banner/imwsfqrpe5dy2halww7v.webp", alt: "Banner 2" },
  { id: 3, src: "/banner/ev5rbkg2cvv8ebfolw6t.webp", alt: "Banner 3" },
];

export default function HeroBanner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive((p) => (p - 1 + banners.length) % banners.length);
  const next = () => setActive((p) => (p + 1) % banners.length);

  return (
    <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-3">
      {/* Aspect ratio matches actual image dimensions 1921x487 ≈ 16/4.05 */}
      <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "1921/487" }}>
        {/* Track — semua slide berjejer horizontal, digeser pakai translateX */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {banners.map((banner, i) => (
            <div key={banner.id} className="relative w-full h-full flex-shrink-0">
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          ))}
        </div>

        {/* Left arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow rounded-full w-8 h-8 flex items-center justify-center transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow rounded-full w-8 h-8 flex items-center justify-center transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Dots — bottom center */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active ? "bg-yellow-400 w-5 h-2" : "bg-white/70 w-2 h-2 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
