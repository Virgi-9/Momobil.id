"use client";

import { useRef } from "react";
import Link from "next/link";
import CarCard from "./CarCard";
import type { Car } from "../data/cars";

type Props = {
  title: string;
  subtitle?: string;
  cars: Car[];
  viewAllHref: string;
};

export default function CarSection({ title, subtitle, cars, viewAllHref }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 460, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -460, behavior: "smooth" });
    }
  };

  return (
    <section className="py-5 bg-white border-b border-gray-100">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-4 lg:px-6 mb-3">
          <div>
            <h2 className="text-[15px] font-bold text-gray-900">{title}</h2>
            {subtitle && (
              <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
            )}
          </div>
          <Link
            href={viewAllHref}
            className="text-xs font-semibold text-gray-500 hover:text-yellow-500 transition-colors flex-shrink-0"
          >
            Lihat Semua
          </Link>
        </div>

        {/* Scrollable row + floating arrow */}
        <div className="relative">
          {/* Cards row */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide px-4 lg:px-6 pb-1"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {cars.map((car) => (
              <div
                key={car.id}
                className="flex-shrink-0"
                style={{ width: "280px", scrollSnapAlign: "start" }}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>

          {/* Floating left arrow */}
          <button
            onClick={scrollLeft}
            aria-label="Scroll kiri"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:border-gray-300 transition-all z-10 ml-1"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Floating right arrow — matches the screenshot */}
          <button
            onClick={scrollRight}
            aria-label="Scroll kanan"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:border-gray-300 transition-all z-10 mr-1"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#374151"
              strokeWidth="2.5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
