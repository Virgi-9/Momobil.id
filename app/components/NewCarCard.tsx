"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { NewCar } from "../data/newCars";

export default function NewCarCard({ car }: { car: NewCar }) {
  const [liked, setLiked] = useState(false);

  return (
    <Link
      href={`/mobil-baru/${car.id}`}
      className="group block bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-200"
    >
      {/* Image */}
      <div className="relative w-full bg-gray-50 overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <Image
          src={car.image}
          alt={car.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 280px"
        />
        {/* Heart */}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLiked(!liked); }}
          aria-label="Simpan ke favorit"
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 shadow-sm flex items-center justify-center hover:scale-110 transition-transform z-10"
        >
          <svg width="13" height="13" viewBox="0 0 24 24"
            fill={liked ? "#eab308" : "none"}
            stroke={liked ? "#eab308" : "#6b7280"}
            strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Info */}
      <div className="px-3 pt-2.5 pb-3 flex flex-col gap-1">
        {/* Badge pill */}
        <span className={`self-start text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${
          car.badge === "Test Drive"
            ? "border-blue-300 text-blue-600 bg-blue-50"
            : "border-gray-300 text-gray-600 bg-white"
        }`}>
          {car.badge ?? "Mobil Baru"}
        </span>

        {/* Price */}
        <p className="text-gray-900 font-bold text-[13px] leading-tight mt-0.5">{car.price}</p>

        {/* Brand — blue */}
        <p className="text-blue-500 text-[11px] font-semibold uppercase">{car.brand.toUpperCase()}</p>

        {/* Model */}
        <p className="text-gray-900 font-bold text-[12px] uppercase line-clamp-1">{car.title.toUpperCase()}</p>
      </div>
    </Link>
  );
}
