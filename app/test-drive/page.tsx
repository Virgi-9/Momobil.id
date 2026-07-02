"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import WaChat from "../components/WaChat";
import TestDriveFilter from "../components/TestDriveFilter";
import { testDriveCars } from "../data/testDriveCars";

const sortOptions = ["Harga terendah", "Harga tertinggi", "Terbaru", "Terpopuler"];

function TestDriveCard({ car }: { car: typeof testDriveCars[0] }) {
  const [liked, setLiked] = useState(false);
  return (
    <Link
      href={`/test-drive/${car.id}`}
      className="flex flex-col bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200 group"
    >
      {/* Image */}
      <div className="relative w-full bg-gray-50 overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <Image
          src={car.image}
          alt={car.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 1280px) 33vw, 280px"
        />
        {/* Test Drive badge */}
        <span className="absolute top-2 left-2 bg-blue-500 text-white text-[9px] font-bold px-2 py-0.5 rounded z-10">
          Test Drive
        </span>
        {/* Heart */}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLiked(!liked); }}
          aria-label="Simpan"
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 shadow-sm flex items-center justify-center hover:scale-110 transition-transform z-10"
        >
          <svg width="13" height="13" viewBox="0 0 24 24"
            fill={liked ? "#eab308" : "none"} stroke={liked ? "#eab308" : "#6b7280"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Info */}
      <div className="px-2.5 pt-2 pb-2.5 flex flex-col gap-0.5">
        {/* Mobil Baru label + info icon */}
        <div className="flex items-center gap-1">
          <span className="text-[9px] text-gray-400 uppercase font-medium">Mobil Baru</span>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        {/* Price */}
        <p className="text-yellow-500 font-bold text-[13px] leading-tight">{car.price}</p>
        {/* Info icon row */}
        <div className="flex items-center gap-1">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        {/* Brand */}
        <h3 className="text-gray-800 font-bold text-[11px] uppercase leading-none">{car.brand}</h3>
        {/* Model */}
        <p className="text-gray-500 text-[11px] uppercase leading-snug line-clamp-1">{car.model}</p>
      </div>
    </Link>
  );
}

export default function TestDrivePage() {
  const [sort, setSort] = useState("Harga terendah");
  const [visibleCount, setVisibleCount] = useState(12);

  const visible = testDriveCars.slice(0, visibleCount);

  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0 bg-gray-50 min-h-screen">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-4">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-1">
            <Link href="/" className="hover:text-yellow-500 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-gray-600 font-medium">Jual Mobil Baru - Beli di Momobil</span>
          </nav>

          {/* Page title */}
          <h1 className="text-[14px] font-bold text-gray-900 mb-3">
            Jual Mobil Baru - Beli di Momobil
          </h1>

          <div className="flex gap-4 items-start">

            {/* ── SIDEBAR ── */}
            <TestDriveFilter />

            {/* ── MAIN ── */}
            <div className="flex-1 min-w-0">

              {/* Sort bar */}
              <div className="flex items-center justify-between mb-3 gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-gray-500">Urutkan:</span>
                  <span className="text-[11px] font-semibold text-gray-500">Asal Siling</span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-[11px] text-gray-500">Wilayah:</span>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border border-gray-200 rounded-lg px-2.5 py-1.5 text-[11px] bg-white focus:outline-none focus:ring-1 focus:ring-yellow-400 cursor-pointer"
                  >
                    {sortOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              {/* Grid 3 cols */}
              <div className="grid grid-cols-3 gap-3">
                {visible.map((car) => (
                  <TestDriveCard key={car.id} car={car} />
                ))}
              </div>

              {/* XtraOrder banner */}
              <div className="mt-5">
                <div
                  className="flex items-center justify-between rounded-xl px-5 py-4"
                  style={{ backgroundColor: "#fffbe6", border: "1px solid #ffe58f" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <svg width="52" height="40" viewBox="0 0 64 48" fill="none">
                        <text x="0" y="14" fontSize="13">✨</text>
                        <text x="44" y="12" fontSize="11">✨</text>
                        <rect x="6" y="24" width="50" height="16" rx="4" fill="#facc15"/>
                        <path d="M16 24 L22 14 L44 14 L50 24Z" fill="#fde047"/>
                        <rect x="23" y="15" width="9" height="8" rx="1" fill="#bae6fd"/>
                        <rect x="34" y="15" width="9" height="8" rx="1" fill="#bae6fd"/>
                        <circle cx="18" cy="40" r="6" fill="#1f2937"/>
                        <circle cx="18" cy="40" r="3" fill="#9ca3af"/>
                        <circle cx="46" cy="40" r="6" fill="#1f2937"/>
                        <circle cx="46" cy="40" r="3" fill="#9ca3af"/>
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

              {/* Muat Lainnya */}
              {visibleCount < testDriveCars.length ? (
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
