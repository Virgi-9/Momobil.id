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
      className="group block bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
    >
      {/* ── MOBILE: horizontal list row ── */}
      <div className="flex md:hidden items-center gap-3 p-3 border-b border-gray-100">
        <div className="relative flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden bg-gray-100">
          <Image src={car.image} alt={car.title} fill className="object-cover" sizes="112px" />
          <span className="absolute top-1 left-1 bg-blue-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">
            Test Drive
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-gray-900 font-bold text-sm leading-tight">{car.price}</p>
          <p className="text-gray-400 text-[10px] uppercase mt-0.5">Mobil Baru</p>
          <h3 className="text-gray-800 font-bold text-xs uppercase leading-snug mt-0.5">{car.brand}</h3>
          <p className="text-gray-500 text-[11px] uppercase line-clamp-1">{car.model}</p>
        </div>
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLiked(!liked); }}
          aria-label="Simpan"
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center"
        >
          <svg width="18" height="18" viewBox="0 0 24 24"
            fill={liked ? "#eab308" : "none"}
            stroke={liked ? "#eab308" : "#d1d5db"}
            strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* ── DESKTOP: vertical card ── */}
      <div className="hidden md:flex flex-col">
        <div className="relative w-full bg-gray-50 overflow-hidden" style={{ aspectRatio: "16/10" }}>
          <Image src={car.image} alt={car.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 1280px) 33vw, 280px" />
          <span className="absolute top-2 left-2 bg-blue-500 text-white text-[9px] font-bold px-2 py-0.5 rounded z-10">Test Drive</span>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLiked(!liked); }}
            aria-label="Simpan"
            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 shadow-sm flex items-center justify-center hover:scale-110 transition-transform z-10"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill={liked ? "#eab308" : "none"} stroke={liked ? "#eab308" : "#6b7280"} strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
        <div className="px-2.5 pt-2 pb-2.5 flex flex-col gap-0.5">
          <div className="flex items-center gap-1">
            <span className="text-[9px] text-gray-400 uppercase font-medium">Mobil Baru</span>
          </div>
          <p className="text-yellow-500 font-bold text-[13px] leading-tight">{car.price}</p>
          <h3 className="text-gray-800 font-bold text-[11px] uppercase leading-none">{car.brand}</h3>
          <p className="text-gray-500 text-[11px] uppercase leading-snug line-clamp-1">{car.model}</p>
        </div>
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

        {/* ── MOBILE HEADER ── */}
        <div className="md:hidden bg-white">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Link href="/">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </Link>
              <span className="font-bold text-gray-900 text-base">Test Drive</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Indonesia</span>
            </div>
          </div>
          <div className="px-4 py-2 border-b border-gray-100">
            <div className="flex items-center h-[42px] border border-gray-300 rounded-full px-4 gap-2 bg-white">
              <input type="text" placeholder="Cari mobil test drive ?" className="flex-1 text-sm text-gray-700 placeholder-gray-400 focus:outline-none" />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-100 overflow-x-auto scrollbar-hide">
            {["Harga", "Merek"].map((f) => (
              <button key={f} className="flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1.5 text-sm text-gray-700 whitespace-nowrap flex-shrink-0">
                {f} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </button>
            ))}
            <button className="flex items-center gap-1 text-sm text-gray-500 whitespace-nowrap flex-shrink-0 ml-auto">
              +Lainnya <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
            </button>
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <div>
              <h1 className="font-bold text-gray-900 text-sm">Katalog Test Drive Mobil Baru</h1>
              <p className="text-gray-400 text-xs mt-0.5">Menampilkan {testDriveCars.length} unit test drive</p>
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
          <div className="flex flex-col gap-px bg-gray-100">
            {visible.map((car) => (
              <TestDriveCard key={car.id} car={car} />
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

          {visibleCount < testDriveCars.length && (
            <div className="flex justify-center py-5 px-4">
              <button onClick={() => setVisibleCount((v) => v + 9)} className="w-full border border-gray-300 text-gray-800 text-sm font-semibold py-3 rounded-xl">
                Muat Lainnya
              </button>
            </div>
          )}
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden md:block">
          <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-4">
            <nav className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-1">
              <Link href="/" className="hover:text-yellow-500 transition-colors">Beranda</Link>
              <span>/</span>
              <span className="text-gray-600 font-medium">Jual Mobil Baru - Beli di Momobil</span>
            </nav>
            <h1 className="text-[14px] font-bold text-gray-900 mb-3">Jual Mobil Baru - Beli di Momobil</h1>
            <div className="flex gap-4 items-start">
              <TestDriveFilter />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-3 gap-3">
                  <span className="text-[11px] text-gray-500">Urutkan:</span>
                  <select value={sort} onChange={(e) => setSort(e.target.value)} className="border border-gray-200 rounded-lg px-2.5 py-1.5 text-[11px] bg-white focus:outline-none focus:ring-1 focus:ring-yellow-400 cursor-pointer">
                    {sortOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {visible.map((car) => <TestDriveCard key={car.id} car={car} />)}
                </div>
                {visibleCount < testDriveCars.length ? (
                  <div className="flex justify-center mt-6">
                    <button onClick={() => setVisibleCount((v) => v + 9)} className="border border-gray-800 text-gray-800 text-sm font-semibold px-8 py-2.5 rounded-full hover:bg-gray-50 transition-colors">
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
