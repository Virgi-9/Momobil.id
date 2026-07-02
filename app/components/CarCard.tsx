"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Car } from "../data/cars";

type Props = {
  car: Car;
};

export default function CarCard({ car }: Props) {
  const [liked, setLiked] = useState(false);

  return (
    <Link
      href={`/mobil-bekas/${car.id}`}
      className="flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-200 group"
    >
      {/* Image — 16:10 ratio like the screenshot */}
      <div className="relative w-full overflow-hidden bg-gray-100" style={{ aspectRatio: "16/10" }}>
        <Image
          src={car.image}
          alt={car.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 220px"
        />

        {/* Heart button — top right */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setLiked(!liked);
          }}
          aria-label="Simpan ke favorit"
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 shadow-sm flex items-center justify-center hover:scale-110 transition-transform"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill={liked ? "#eab308" : "none"}
            stroke={liked ? "#eab308" : "#6b7280"}
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Info block */}
      <div className="px-2.5 pt-2 pb-2.5 flex flex-col gap-0.5">
        {/* Price */}
        <p className="text-yellow-500 font-bold text-[13px] leading-tight">
          {car.price}
        </p>

        {/* Year */}
        <p className="text-gray-400 text-[11px] leading-none">{car.year}</p>

        {/* Title — uppercase, truncated, dark */}
        <h3 className="text-gray-800 font-semibold text-[11px] leading-snug uppercase line-clamp-2 mt-0.5">
          {car.title}
        </h3>

        {/* Location + Date row */}
        <div className="flex items-center justify-between mt-1 gap-1">
          <span className="text-gray-400 text-[10px] uppercase truncate leading-none">
            {car.location}
          </span>
          {car.dateLabel && (
            <span className="text-gray-400 text-[10px] uppercase whitespace-nowrap leading-none flex-shrink-0">
              {car.dateLabel}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
