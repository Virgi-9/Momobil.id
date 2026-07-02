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

function MobilePromoBanner() {
  return (
    <div className="mx-4 mb-3 rounded-2xl overflow-hidden bg-yellow-400 p-4 flex items-center justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-1 mb-1">
          <img src="/logoweb/momobilIcon_hd.bf14c0ed.svg" alt="momobil.id" className="h-5 w-auto brightness-0" />
        </div>
        <p className="text-gray-900 font-bold text-sm leading-tight">Iklankan mobilmu, gratis!</p>
        <p className="text-gray-800 text-xs mt-1 leading-snug">Iklankan mobilmu di momobil. Makin banyak yang liat, makin cepet laku!</p>
        <button className="mt-3 w-full bg-white text-gray-900 font-bold text-sm py-2.5 rounded-xl">
          Iklankan sekarang
        </button>
      </div>
      <div className="relative w-24 h-16 flex-shrink-0 ml-3">
        <Image src="/mobilbekas/innova g at.webp" alt="mobil" fill className="object-contain" sizes="96px" />
      </div>
    </div>
  );
}

function DesktopPromoBanner() {
  return (
    <div className="rounded-xl overflow-hidden border border-yellow-200 bg-yellow-50 flex flex-col">
      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
        <Image src="/banner/imwsfqrpe5dy2halww7v.webp" alt="Promo Momobil" fill className="object-cover" sizes="220px" />
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        <p className="text-[11px] font-bold text-gray-800 leading-tight">momobil.id punya solusi untukmu!</p>
        <p className="text-[10px] text-gray-500 leading-snug">Jual mobilmu dengan mudah, cepat dan harga terbaik</p>
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

  const gridItems: Array<{ type: "car"; data: typeof usedCarsData[0] } | { type: "promo" }> = [];
  usedCarsData.slice(0, visibleCount).forEach((car, i) => {
    if (i === 3 || i === 9) gridItems.push({ type: "promo" });
    gridItems.push({ type: "car", data: car });
  });

  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0 bg-gray-50 min-h-screen">

        {/* ── MOBILE HEADER ── */}
        <div className="md:hidden bg-white">
          {/* Top row: back + title + lokasi */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Link href="/">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </Link>
              <span className="font-bold text-gray-900 text-base">Mobil Bekas</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-sm">Indonesia</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="px-4 py-2 border-b border-gray-100">
            <div className="flex items-center h-[42px] border border-gray-300 rounded-full px-4 gap-2 bg-white">
              <input type="text" placeholder="Cari mobil bekas ?" className="flex-1 text-sm text-gray-700 placeholder-gray-400 focus:outline-none" />
              <button aria-label="Cari">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
              </button>
              <div className="w-px h-5 bg-gray-200" />
              <button aria-label="Filter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                  <line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="11" y1="18" x2="13" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Filter pills */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-100 overflow-x-auto scrollbar-hide">
            {["Harga", "Merek"].map((f) => (
              <button key={f} className="flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1.5 text-sm text-gray-700 whitespace-nowrap flex-shrink-0">
                {f}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            ))}
            <button className="flex items-center gap-1 text-sm text-gray-500 whitespace-nowrap flex-shrink-0 ml-auto">
              +Lainnya
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>

          {/* Title + sort icon */}
          <div className="flex items-center justify-between px-4 py-3">
            <div>
              <h1 className="font-bold text-gray-900 text-sm">Katalog Jual Beli Mobil Bekas</h1>
              <p className="text-gray-400 text-xs mt-0.5">Menampilkan semua unit mobil bekas - {usedCarsData.length}.000 pencarian</p>
            </div>
            <button aria-label="Sort">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                <path d="M3 6h18M7 12h10M11 18h2" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── MOBILE LIST ── */}
        <div className="md:hidden">
          <MobilePromoBanner />
          <div className="flex flex-col gap-px bg-gray-100">
            {usedCarsData.slice(0, visibleCount).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {/* XtraOrder banner mobile */}
          <div className="mx-4 mt-4 bg-yellow-50 rounded-2xl p-4 border border-yellow-100">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">🚗</span>
              <div>
                <p className="font-bold text-gray-900 text-sm leading-tight">Belum menemukan mobil pilihanmu?</p>
                <p className="text-gray-500 text-xs mt-0.5">Yuk ajukan lewat form pengajuan</p>
              </div>
            </div>
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-sm py-3 rounded-xl transition-colors">
              Form Pengajuan
            </button>
          </div>

          {visibleCount < usedCarsData.length && (
            <div className="flex justify-center py-5 px-4">
              <button
                onClick={() => setVisibleCount((v) => v + 9)}
                className="w-full border border-gray-300 text-gray-800 text-sm font-semibold py-3 rounded-xl"
              >
                Muat Lainnya
              </button>
            </div>
          )}
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden md:block">
          <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-4">
            <nav className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-4">
              <Link href="/" className="hover:text-yellow-500 transition-colors">Beranda</Link>
              <span>/</span>
              <span className="text-gray-600 font-medium">Katalog Jual Beli Mobil Bekas di Kalimantan Barat</span>
            </nav>

            <div className="flex gap-5 items-start">
              <UsedCarFilter />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-3 gap-3">
                  <div>
                    <h1 className="text-[14px] font-bold text-gray-900">Pilihan Jual Beli Mobil Bekas Berkualitas di Kalimantan Barat</h1>
                    <p className="text-[11px] text-gray-400 mt-0.5">{usedCarsData.length} mobil ditemukan</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[11px] text-gray-500">Urutkan:</span>
                    <select
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                      className="border border-gray-200 rounded-lg px-2.5 py-1.5 text-[11px] bg-white focus:outline-none focus:ring-1 focus:ring-yellow-400 cursor-pointer"
                    >
                      {sortOptions.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {gridItems.map((item, idx) =>
                    item.type === "promo" ? (
                      <DesktopPromoBanner key={`promo-${idx}`} />
                    ) : (
                      <CarCard key={item.data.id} car={item.data} />
                    )
                  )}
                </div>

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
                  <p className="text-center text-[11px] text-gray-400 mt-6">Semua mobil sudah ditampilkan</p>
                )}
              </div>
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
