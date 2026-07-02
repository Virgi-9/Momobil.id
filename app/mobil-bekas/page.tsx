"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import WaChat from "../components/WaChat";
import UsedCarFilter from "../components/UsedCarFilter";
import CarCard from "../components/CarCard";
import { usedCarsData } from "../data/usedCars";

const sortOptions = ["Terbaru", "Termurah", "Termahal", "Terpopuler"];

// Insert promo banner every 6 cards
function PromoBanner() {
  return (
    <div className="rounded-xl overflow-hidden border border-yellow-200 bg-yellow-50 flex flex-col">
      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
        <Image
          src="/banner/imwsfqrpe5dy2halww7v.webp"
          alt="Promo Momobil"
          fill
          className="object-cover"
          sizes="220px"
        />
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        <p className="text-[11px] font-bold text-gray-800 leading-tight">
          momobil.id punya solusi untukmu!
        </p>
        <p className="text-[10px] text-gray-500 leading-snug">
          Jual mobilmu dengan mudah, cepat dan harga terbaik
        </p>
        <button className="mt-1 bg-yellow-400 hover:bg-yellow-500 text-black text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors self-start">
          Iklankan sekarang
        </button>
      </div>
    </div>
  );
}

export default function MobilBekasPage() {
  const [sort, setSort] = useState("Terbaru");
  const [visibleCount, setVisibleCount] = useState(12);

  // Build grid items — insert promo banner at position 3 and 9
  const gridItems: Array<{ type: "car"; data: typeof usedCarsData[0] } | { type: "promo" }> = [];
  usedCarsData.slice(0, visibleCount).forEach((car, i) => {
    if (i === 3 || i === 9) {
      gridItems.push({ type: "promo" });
    }
    gridItems.push({ type: "car", data: car });
  });

  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0 bg-gray-50 min-h-screen">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-4">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-4">
            <Link href="/" className="hover:text-yellow-500 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-gray-600 font-medium">Katalog Jual Beli Mobil Bekas di Kalimantan Barat</span>
          </nav>

          <div className="flex gap-5 items-start">

            {/* ─── LEFT SIDEBAR ─── */}
            <UsedCarFilter />

            {/* ─── MAIN CONTENT ─── */}
            <div className="flex-1 min-w-0">

              {/* Title + sort */}
              <div className="flex items-center justify-between mb-3 gap-3">
                <div>
                  <h1 className="text-[14px] font-bold text-gray-900">
                    Pilihan Jual Beli Mobil Bekas Berkualitas di Kalimantan Barat
                  </h1>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {usedCarsData.length} mobil ditemukan
                  </p>
                </div>
                {/* Sort dropdown */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-[11px] text-gray-500">Urutkan:</span>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border border-gray-200 rounded-lg px-2.5 py-1.5 text-[11px] bg-white focus:outline-none focus:ring-1 focus:ring-yellow-400 cursor-pointer"
                  >
                    {sortOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Grid — 3 columns */}
              <div className="grid grid-cols-3 gap-3">
                {gridItems.map((item, idx) =>
                  item.type === "promo" ? (
                    <PromoBanner key={`promo-${idx}`} />
                  ) : (
                    <CarCard key={item.data.id} car={item.data} />
                  )
                )}
              </div>

              {/* XtraOrder banner */}
              <div className="mt-4">
                <div
                  className="flex items-center justify-between rounded-xl px-5 py-4"
                  style={{ backgroundColor: "#fffbe6", border: "1px solid #ffe58f" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 relative">
                      <svg width="52" height="40" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="0" y="14" fontSize="13">✨</text>
                        <text x="44" y="12" fontSize="11">✨</text>
                        <rect x="6" y="24" width="50" height="16" rx="4" fill="#facc15" />
                        <path d="M16 24 L22 14 L44 14 L50 24Z" fill="#fde047" />
                        <rect x="23" y="15" width="9" height="8" rx="1" fill="#bae6fd" />
                        <rect x="34" y="15" width="9" height="8" rx="1" fill="#bae6fd" />
                        <circle cx="18" cy="40" r="6" fill="#1f2937" />
                        <circle cx="18" cy="40" r="3" fill="#9ca3af" />
                        <circle cx="46" cy="40" r="6" fill="#1f2937" />
                        <circle cx="46" cy="40" r="3" fill="#9ca3af" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">Belum menemukan mobil pilihanmu?</p>
                      <p className="text-gray-500 text-xs mt-0.5">Yuk ajukan lewat form pengajuan</p>
                    </div>
                  </div>
                  <button className="flex-shrink-0 bg-yellow-400 hover:bg-yellow-500 transition-colors text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-lg">
                    Form Pengajuan
                  </button>
                </div>
              </div>

              {/* Load more */}
              {visibleCount < usedCarsData.length ? (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setVisibleCount((v) => v + 9)}
                    className="border border-gray-800 text-gray-800 text-sm font-semibold px-8 py-2.5 rounded-full hover:bg-gray-50 transition-colors"
                  >
                    Muat Lainnya
                  </button>
                </div>
              ) : (
                <p className="text-center text-[11px] text-gray-400 mt-6">
                  Semua mobil sudah ditampilkan
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNav />
      <WaChat />
    </>
  );
}
