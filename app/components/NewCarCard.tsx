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
      className="flex flex-col bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200 group"
    >
      {/* Image */}
      <div className="relative w-full bg-gray-50 overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <Image
          src={car.image}
          alt={car.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 220px"
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
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* Badge */}
        {car.badge && (
          <span className={`absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded z-10 ${
            car.badge === "Test Drive"
              ? "bg-blue-500 text-white"
              : "bg-yellow-400 text-gray-900"
          }`}>
            {car.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="px-2.5 pt-2 pb-2.5 flex flex-col gap-0.5">
        <p className="text-yellow-500 font-bold text-[13px] leading-tight">{car.price}</p>

        {/* Info row: brand + info icon */}
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-gray-400 text-[10px] uppercase">{car.badge ?? "Mobil Baru"}</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        {/* Brand + Title */}
        <h3 className="text-gray-800 font-semibold text-[12px] leading-snug uppercase line-clamp-1 mt-0.5">
          {car.brand.toUpperCase()}
        </h3>
        <p className="text-gray-600 text-[11px] uppercase line-clamp-1">{car.title}</p>
      </div>
    </Link>
  );
}
