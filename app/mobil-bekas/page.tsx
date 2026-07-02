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
    <div className="mx-4 mb-3 rounded-2xl overflow-hidden bg-yellow-400 relative">
      {/* Watermark background */}
      <div className="absolute left-0 top-0 h-full w-1/2 opacity-10 pointer-events-none">
        <Image src="/iklan/mmbDealerIllustration.efc20ef9.svg" alt="" fill className="object-contain object-left" />
      </div>

      <div className="relative px-4 pt-4 pb-0">
        {/* Top row: logo + car */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-gray-900 font-black text-lg leading-none">momobil.id</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[9px] text-gray-800">member of</span>
              <img src="/logoweb/LogoAdira.c97902f8.svg" alt="Adira Finance" className="h-3 object-contain" />
            </div>
          </div>
          <div className="relative w-32 h-16 -mt-1 -mr-2 flex-shrink-0">
            <Image src="/iklan/sampleCarAsset.515167ac.svg" alt="Cars" fill className="object-contain object-right" sizes="128px" />
          </div>
        </div>

        {/* Text */}
        <div className="mt-2 mb-3">
          <p className="text-gray-900 font-black text-sm leading-snug">Iklankan mobilmu, gratis!</p>
          <p className="text-gray-800 text-sm leading-snug mt-0.5">
            Iklankan mobilmu di momobil. Makin banyak yang liat, makin cepet laku!
          </p>
        </div>

        {/* Button */}
        <div className="pb-4">
          <button className="w-full bg-yellow-300 border border-yellow-600/20 text-gray-900 font-bold text-sm py-3 rounded-xl">
            Iklankan sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

function DesktopPromoBanner() {
  return (
    <div className="rounded-2xl overflow-hidden bg-yellow-400 relative">
      {/* Watermark */}
      <div className="absolute left-0 top-0 h-full w-1/2 opacity-10 pointer-events-none">
        <Image src="/iklan/mmbDealerIllustration.efc20ef9.svg" alt="" fill className="object-contain object-left" />
      </div>

      <div className="relative px-4 pt-4 pb-0">
        {/* Top row: logo + car */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-gray-900 font-black text-base leading-none">momobil.id</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[9px] text-gray-800">member of</span>
              <img src="/logoweb/LogoAdira.c97902f8.svg" alt="Adira" className="h-3 object-contain" />
            </div>
          </div>
          <div className="relative w-28 h-16 -mt-1 -mr-2 flex-shrink-0">
            <Image src="/iklan/sampleCarAsset.515167ac.svg" alt="Cars" fill className="object-contain object-right" sizes="112px" />
          </div>
        </div>

        <div className="mt-2 mb-3">
          <p className="text-gray-900 font-black text-sm leading-snug">Iklankan mobilmu, gratis!</p>
          <p className="text-gray-800 text-xs leading-snug mt-1">
            Iklankan mobilmu di momobil. Makin banyak yang liat, makin cepet laku!
          </p>
        </div>

        <div className="pb-4">
          <button className="w-full bg-yellow-300 border border-yellow-600/20 text-gray-900 font-bold text-sm py-2.5 rounded-xl">
            Iklankan sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MobilBekasPage() {
  const [sort, setSort] = useState("Terbaru");
  const [visibleCount, setVisibleCount] = useState(12);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilterSection, setActiveFilterSection] = useState("Harga");
  const [selectedHarga, setSelectedHarga] = useState("");
  const [minHarga, setMinHarga] = useState("Rp 10.000.000");
  const [maxHarga, setMaxHarga] = useState("Rp 600.000.000");

  const filterSections = ["Harga", "Merek", "Tahun Produksi", "Kilometer", "Tipe Bahan Bakar", "Transmisi", "Kapasitas Mesin", "Tipe Body"];

  const hargaOptions = [
    "Di bawah 100 juta (451)",
    "100 - 200 juta (9.706)",
    "200 - 300 juta (4.473)",
    "300 - 400 juta (2.091)",
    "400 - 600 juta (988)",
    "Di atas 600 juta (102)",
  ];

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
        <div className="md:hidden bg-white sticky top-0 z-50 border-b border-gray-100">
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
              <button aria-label="Filter" onClick={() => setFilterOpen(true)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                  <line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="11" y1="18" x2="13" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Filter pills */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-100 overflow-x-auto scrollbar-hide">
            {["Harga", "Merek"].map((f) => (
              <button key={f} onClick={() => { setActiveFilterSection(f); setFilterOpen(true); }}
                className="flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1.5 text-sm text-gray-700 whitespace-nowrap flex-shrink-0">
                {f}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
            ))}
            <button onClick={() => setFilterOpen(true)} className="flex items-center gap-1 text-sm text-gray-500 whitespace-nowrap flex-shrink-0 ml-auto">
              +Lainnya
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
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
              <span className="text-5xl">🚗</span>
              <div>
                <p className="font-bold text-gray-900 text-sm leading-tight">Belum menemukan mobil pilihanmu?</p>
                <p className="text-gray-500 text-sm mt-0.5">Yuk ajukan lewat form pengajuan</p>
              </div>
            </div>
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-sm py-3.5 rounded-xl transition-colors">
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

      {/* ── FILTER MODAL (mobile) — bottom sheet ── */}
      {filterOpen && (
        <div className="md:hidden fixed inset-0 z-[999] flex flex-col justify-end">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setFilterOpen(false)} />

          {/* Sheet */}
          <div className="relative bg-white rounded-t-2xl flex flex-col" style={{ maxHeight: "85vh" }}>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 flex-shrink-0">
              <h2 className="text-base font-bold text-gray-900">Filter</h2>
              <button onClick={() => setFilterOpen(false)} aria-label="Tutup">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Body: sidebar kiri + konten kanan */}
            <div className="flex flex-1 overflow-hidden">

              {/* Sidebar kategori */}
              <div className="w-32 flex-shrink-0 bg-gray-50 border-r border-gray-100 overflow-y-auto">
                {filterSections.map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveFilterSection(section)}
                    className={`w-full text-left px-3 py-4 text-sm border-b border-gray-100 transition-colors leading-snug ${
                      activeFilterSection === section
                        ? "bg-white font-semibold text-gray-900"
                        : "text-gray-500 hover:bg-white"
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>

              {/* Konten filter */}
              <div className="flex-1 overflow-y-auto px-4 py-4">

                {activeFilterSection === "Harga" && (
                  <div className="space-y-3">
                    {hargaOptions.map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <div
                          onClick={() => setSelectedHarga(selectedHarga === opt ? "" : opt)}
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                            selectedHarga === opt ? "border-gray-800" : "border-gray-300"
                          }`}
                        >
                          {selectedHarga === opt && <div className="w-2.5 h-2.5 rounded-full bg-gray-800" />}
                        </div>
                        <span className="text-sm text-gray-700">{opt}</span>
                      </label>
                    ))}
                    <div className="mt-4 space-y-3">
                      <div className="relative border border-gray-300 rounded-xl px-3 pt-5 pb-2">
                        <span className="absolute top-1.5 left-3 text-[10px] text-gray-400">Min</span>
                        <input value={minHarga} onChange={(e) => setMinHarga(e.target.value)}
                          className="w-full text-sm text-gray-800 focus:outline-none bg-transparent" />
                      </div>
                      <div className="relative border border-gray-300 rounded-xl px-3 pt-5 pb-2">
                        <span className="absolute top-1.5 left-3 text-[10px] text-gray-400">Max</span>
                        <input value={maxHarga} onChange={(e) => setMaxHarga(e.target.value)}
                          className="w-full text-sm text-gray-800 focus:outline-none bg-transparent" />
                      </div>
                    </div>
                  </div>
                )}

                {activeFilterSection === "Merek" && (
                  <div className="space-y-3">
                    {[["TOYOTA", 354], ["DAIHATSU", 231], ["HONDA", 28], ["SUZUKI", 26], ["MITSUBISHI", 6],
                      ["WULING", 12], ["HYUNDAI", 8], ["BYD", 5]].map(([label, count]) => (
                      <label key={label as string} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-yellow-400 rounded cursor-pointer" />
                        <span className="text-sm text-gray-700 flex-1">{label as string}</span>
                        <span className="text-xs text-gray-400">({count})</span>
                      </label>
                    ))}
                  </div>
                )}

                {activeFilterSection === "Tahun Produksi" && (
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <p className="text-xs text-gray-400 mb-1">Dari</p>
                        <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-white">
                          {[2015,2016,2017,2018,2019,2020,2021].map(y => <option key={y}>{y}</option>)}
                        </select>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-400 mb-1">Sampai</p>
                        <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-white">
                          {[2025,2024,2023,2022,2021,2020].map(y => <option key={y}>{y}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {activeFilterSection === "Kilometer" && (
                  <div className="space-y-3">
                    {["0 - 10.000 km (31)","10.000 - 20.000 km (11)","20.000 - 30.000 km (24)","30.000 - 40.000 km (29)",
                      "40.000 - 50.000 km (38)","50.000 - 60.000 km (32)","60.000 - 80.000 km (55)","80.000 - 100.000 km (67)","Di atas 100.000 km (159)"]
                      .map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-yellow-400 rounded cursor-pointer" />
                        <span className="text-sm text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                )}

                {activeFilterSection === "Tipe Bahan Bakar" && (
                  <div className="space-y-3">
                    {["Bensin (1)","Solar (2)","Listrik (3)"].map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-yellow-400 rounded cursor-pointer" />
                        <span className="text-sm text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                )}

                {activeFilterSection === "Transmisi" && (
                  <div className="space-y-3">
                    {["Otomatis","Manual"].map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-yellow-400 rounded cursor-pointer" />
                        <span className="text-sm text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                )}

                {activeFilterSection === "Kapasitas Mesin" && (
                  <div className="space-y-3">
                    {["1.000 cc (12)","1.200 cc (87)","1.300 cc (102)","1.500 cc (134)","1.800 cc (29)","2.000 cc (38)","2.400 cc (14)","2.500 cc + (9)"]
                      .map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-yellow-400 rounded cursor-pointer" />
                        <span className="text-sm text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                )}

                {activeFilterSection === "Tipe Body" && (
                  <div className="space-y-3">
                    {["City Car (15)","Hatchback (28)","MPV (514)","Sedan (7)","SUV (49)","Pickup (12)","Van (8)"]
                      .map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-yellow-400 rounded cursor-pointer" />
                        <span className="text-sm text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="flex gap-3 px-4 py-4 border-t border-gray-100 flex-shrink-0">
              <button
                onClick={() => { setSelectedHarga(""); setMinHarga("Rp 10.000.000"); setMaxHarga("Rp 600.000.000"); }}
                className="flex-1 border border-gray-300 text-gray-800 font-bold text-sm py-3.5 rounded-xl hover:bg-gray-50"
              >
                Reset filter
              </button>
              <button
                onClick={() => setFilterOpen(false)}
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-sm py-3.5 rounded-xl transition-colors"
              >
                Terapkan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
