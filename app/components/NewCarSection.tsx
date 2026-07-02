"use client";

import { useRef } from "react";
import Link from "next/link";
import NewCarCard from "./NewCarCard";
import type { NewCar } from "../data/newCars";

type Props = {
  title: string;
  cars: NewCar[];
  viewAllHref: string;
};

export default function NewCarSection({ title, cars, viewAllHref }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => scrollRef.current?.scrollBy({ left: 460, behavior: "smooth" });
  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -460, behavior: "smooth" });

  return (
    <section className="py-4 bg-white border-b border-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between px-4 lg:px-6 mb-3">
          <h2 className="text-[14px] font-bold text-gray-900">{title}</h2>
          <Link href={viewAllHref} className="text-xs font-semibold text-gray-500 hover:text-yellow-500 transition-colors">
            Lihat Semua
          </Link>
        </div>

        {/* ── MOBILE: 2 kolom grid ── */}
        <div className="md:hidden px-4 grid grid-cols-2 gap-3">
          {cars.map((car) => (
            <NewCarCard key={car.id} car={car} />
          ))}
        </div>

        {/* ── DESKTOP: horizontal scroll ── */}
        <div className="hidden md:block relative">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide px-4 lg:px-6 pb-1"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {cars.map((car) => (
              <div key={car.id} className="flex-shrink-0" style={{ width: "280px", scrollSnapAlign: "start" }}>
                <NewCarCard car={car} />
              </div>
            ))}
          </div>

          <button onClick={scrollLeft} aria-label="Scroll kiri" className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all z-10 ml-1">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button onClick={scrollRight} aria-label="Scroll kanan" className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all z-10 mr-1">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
