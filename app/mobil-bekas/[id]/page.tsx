"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BottomNav from "../../components/BottomNav";
import WaChat from "../../components/WaChat";
import { usedCarsData } from "../../data/usedCars";

const xpanderPhotos = [
  "/detail-mobil/xpander sport.webp",
  "/detail-mobil/xpander2.webp",
  "/detail-mobil/xpander 3.webp",
  "/detail-mobil/xpander 4.webp",
  "/detail-mobil/xpander 5.webp",
  "/detail-mobil/xpander 6.webp",
  "/detail-mobil/xpander 7.webp",
  "/detail-mobil/xpander 8.webp",
  "/detail-mobil/xpander 9.webp",
  "/detail-mobil/xpander 10.webp",
  "/detail-mobil/xpander 11.webp",
  "/detail-mobil/xpander 12.webp",
  "/detail-mobil/xpander 13.webp",
  "/detail-mobil/xpander 14.webp",
];

export default function MobilBekasDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const car = usedCarsData.find((c) => c.id === id);
  const related = usedCarsData.filter((c) => c.id !== id && c.category === car?.category).slice(0, 4);
  const [liked, setLiked] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = id === 219 ? xpanderPhotos : [car?.image ?? ""];

  const prevPhoto = () => setPhotoIndex((i) => (i - 1 + photos.length) % photos.length);
  const nextPhoto = () => setPhotoIndex((i) => (i + 1) % photos.length);

  if (!car) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Mobil tidak ditemukan.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="hidden md:block"><Navbar /></div>

      {/* Mobile header */}
      <div className="md:hidden bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/mobil-bekas">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="flex items-center gap-3">
            <button aria-label="Share">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>
            <button onClick={() => setLiked(!liked)} aria-label="Favorit">
              <svg width="20" height="20" viewBox="0 0 24 24" fill={liked ? "#eab308" : "none"} stroke={liked ? "#eab308" : "#374151"} strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <main className="bg-white min-h-screen">

        {/* ══════════════════════════════════════
            MOBILE LAYOUT (md:hidden)
        ══════════════════════════════════════ */}
        <div className="md:hidden pb-24">

          {/* Foto full width — mobile, dengan sliding animation */}
          <div className="w-full bg-black relative overflow-hidden" style={{ height: "260px" }}>
            {/* Setiap foto absolute, di-offset dengan translateX per index */}
            {photos.map((src, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${(i - photoIndex) * 100}%)` }}
              >
                <div className="absolute inset-y-0 left-[8%] right-[8%]">
                  <div className="relative w-full h-full">
                    <Image src={src} alt={`${car.title} ${i + 1}`} fill className="object-contain" sizes="90vw" priority={i === 0} />
                  </div>
                </div>
              </div>
            ))}
            {/* Counter */}
            <div className="absolute bottom-3 right-3 z-10 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full">
              {photoIndex + 1}/{photos.length}
            </div>
            <button onClick={prevPhoto} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/80 rounded-full shadow flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={nextPhoto} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/80 rounded-full shadow flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>

          {/* Harga + nama + spek */}
          <div className="px-4 pt-4 pb-3 border-b border-gray-100">
            <div className="flex items-start justify-between mb-1">
              <p className="text-2xl font-black text-gray-900">{car.price}</p>
              <div className="flex gap-3 mt-1">
                <button aria-label="Share">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                  </svg>
                </button>
                <button onClick={() => setLiked(!liked)} aria-label="Favorit">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={liked ? "#eab308" : "none"} stroke={liked ? "#eab308" : "#374151"} strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-sm font-bold text-gray-900 leading-snug">{car.title} ({car.year})</p>
            <p className="text-xs text-gray-400 mt-0.5">Xpander 1.5 Sport</p>
            <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{car.location}</span>
            </div>
            {/* Spek grid 2 kolom */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4 pt-3 border-t border-gray-100">
              {[
                { icon: "/skredit/credSimSelectionIcon.6639f9a5.svg", label: "Bahan bakar", value: "Bensin" },
                { icon: "/skredit/credSimCalculatorIcon.5f688e09.svg", label: "Transmisi", value: "Matic" },
                { icon: "/skredit/credSimSelectionIcon.6639f9a5.svg", label: "Kapasitas mesin", value: "1500 cc" },
                { icon: "/skredit/credSimTenorIcon.58ebfbba.svg", label: "Penjual", value: "Dealer" },
                { icon: "/skredit/credSimTenorIcon.58ebfbba.svg", label: "Kilometer", value: "45.000 KM" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <img src={s.icon} alt="" className="w-5 h-5 object-contain opacity-60 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-gray-400">{s.label}</p>
                    <p className="text-xs font-bold text-gray-900">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tukar Tambah */}
          <div className="px-4 py-3 border-b border-gray-100">
            <Link href="/tukar-tambah" className="flex items-center justify-between bg-yellow-50 border border-yellow-200 rounded-xl px-3 py-3">
              <div className="flex items-center gap-2">
                <img src="/logoweb/tradeinIcon.10a1c128.svg" alt="Trade In" className="w-8 h-8 object-contain" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Tukar Tambah</p>
                  <p className="text-xs text-gray-500">Tukar tambah mobil ini dengan mobil kamu</p>
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </Link>
          </div>

          {/* Penjual */}
          <div className="px-4 py-4 border-b border-gray-100">
            <p className="text-sm font-bold text-gray-900 mb-3">Penjual</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">DA</div>
                <span className="text-sm font-semibold text-gray-800">Daryl Auto</span>
              </div>
              <button className="text-sm text-gray-700 font-semibold flex items-center gap-0.5">
                Kunjungi <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
            <button className="w-full bg-yellow-400 text-gray-900 text-sm font-bold py-3 rounded-xl mb-2 flex items-center justify-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Chat dengan penjual
            </button>
            <button className="w-full border border-gray-200 text-gray-800 text-sm font-semibold py-3 rounded-xl flex items-center justify-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.16h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Tampilkan nomor
            </button>
            {/* ID Iklan */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
              <span className="text-xs text-blue-500 font-medium">ID Iklan</span>
              <span className="text-xs text-gray-400">66b1adf2-cf9e-4974-aecb-ba4584d87589</span>
            </div>
          </div>

          {/* Adira Finance */}
          <div className="px-4 py-4 border-b border-gray-100 text-center">
            <img src="/logoweb/LogoAdira.c97902f8.svg" alt="Adira Finance" className="h-8 object-contain mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">Uang muka mulai dari</p>
            <p className="text-3xl font-black text-blue-500">15%</p>
            <p className="text-sm text-gray-500 mt-1">Atau cicilan mulai dari</p>
            <p className="text-sm font-bold text-gray-900 mb-3">Rp 4.586.000</p>
            <Link href="/simulasi-kredit" className="block w-full border border-gray-300 text-gray-800 text-sm font-semibold py-3 rounded-xl">
              Simulasi Kredit
            </Link>
          </div>

          {/* Deskripsi */}
          <div className="px-4 py-4 border-b border-gray-100">
            <h2 className="text-sm font-bold text-gray-900 mb-3">Deskripsi</h2>
            <div className="text-sm text-gray-700 leading-relaxed space-y-1.5">
              <p>2021 MITSUBISHI Xpander Sport 1.5 AT Tdp 45jt</p>
              <p className="mt-2 font-semibold">Spesifikasi :</p>
              <p>* Nik2021</p>
              <p>* Automatic Transmisi</p>
              <p>* 1.500 cc Sport</p>
              <p>* Mesin halus dan terawat</p>
              <p>* Body/exterior mulus</p>
              <p>* Interior bersih dan wangi</p>
              <p>* AC dingin</p>
              <p>* Kelistrikan berfungsi normal (Audio, lampu, Sensor-sensor dll)</p>
              <p>* Kaki-kaki senyap, suspensi nyaman</p>
              <p>* Ban tebal kondisi baik</p>
              <p>* Plat B Genap (bisa Req Ganjil/Genap)</p>
              <p className="mt-2">FREE WARRANTY MESIN &amp; TRANSMISI (Paket kredit included)</p>
              <p>Proses kredit dapat dibantu</p>
              <p>Cash harga Berbeda Silakan Hubungi</p>
              <p className="mt-3">📍 Daryls Auto Gedung WTC mangga dua lantai 3A No 37 No 50 No 75-79 No 102, lantai 6 no 630A Jakarta Utara</p>
              <p className="mt-1">📍 Daryls Auto Bintaro JAYA Bintaro sektor 7 No B09, Pd. Aren, Kota Tangerang Selatan, Banten</p>
              <p className="mt-3">Kami Siap Melayani Anda Sampai Harga Termurah &amp; Terbaik Untuk Info Paket DP &amp; Harga Sesuai Iklan Hub Bisa Call / WA Info Jual / Beli Mobil Second Anda, Silahkan Hub Kami, Mobil Berkualitas Dengan Harga Bersaing</p>
              <p className="mt-3">📱 IG &amp; TikTok: @darylsauto</p>
              <p>📞 WhatsApp/Call: 0812-9633-1523 (Rainie)</p>
            </div>
          </div>

          {/* Produk Serupa mobile — 2 kolom grid */}
          {related.length > 0 && (
            <div className="px-4 py-4 border-b border-gray-100">
              <h2 className="text-sm font-bold text-gray-900 mb-3">Produk Serupa</h2>
              <div className="grid grid-cols-2 gap-3">
                {related.map((r) => (
                  <Link key={r.id} href={`/mobil-bekas/219`} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                      <Image src={r.image} alt={r.title} fill className="object-cover" sizes="50vw" />
                      <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                      </button>
                    </div>
                    <div className="p-2.5">
                      <p className="text-gray-900 font-bold text-xs">{r.price}</p>
                      <p className="text-gray-400 text-[10px] mt-0.5">{r.year}</p>
                      <p className="text-gray-800 text-xs font-semibold line-clamp-1 mt-0.5">{r.title}</p>
                      <p className="text-gray-400 text-[9px] uppercase mt-1">{r.location}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Mini footer mobile */}
          <div className="px-4 py-4 bg-gray-50">
            <p className="text-xs text-gray-500 text-center mb-3">Adira Finance Berizin dan Diawasi oleh Otoritas Jasa Keuangan</p>
            <div className="flex items-center justify-between">
              <img src="/logoweb/momobilIcon_hd.bf14c0ed.svg" alt="momobil.id" className="h-5 object-contain" />
              <p className="text-xs text-gray-400">© 2026 momobil.id</p>
            </div>
          </div>
        </div>

        {/* Mobile sticky CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex gap-2 z-40">
          <button className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </button>
          <Link href="/simulasi-kredit" className="flex-1 bg-yellow-400 text-gray-900 text-sm font-bold py-3 rounded-xl flex items-center justify-center">
            Simulasi Kredit
          </Link>
        </div>

        {/* ══════════════════════════════════════
            DESKTOP LAYOUT (hidden md:block)
        ══════════════════════════════════════ */}
        <div className="hidden md:block pb-0">

        {/* ── FOTO SLIDESHOW desktop ── */}
        <div className="w-full bg-black relative overflow-hidden" style={{ height: "clamp(240px, 45vw, 520px)" }}>

          {/* Setiap foto absolute, di-offset dengan translateX per index */}
          {photos.map((src, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${(i - photoIndex) * 100}%)` }}
            >
              <div className="absolute inset-y-0 left-[12%] right-[12%]">
                <div className="relative w-full h-full">
                  <Image src={src} alt={`${car.title} ${i + 1}`} fill className="object-contain" sizes="70vw" priority={i === 0} />
                </div>
              </div>
            </div>
          ))}

          {/* Counter */}
          <div className="absolute top-4 left-4 z-10 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            {photoIndex + 1}/{photos.length}
          </div>

          {/* Share + Like */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>
            <button onClick={() => setLiked(!liked)} className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill={liked ? "#eab308" : "none"} stroke={liked ? "#eab308" : "#374151"} strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
          </div>

          {/* Prev — posisi di area hitam kiri */}
          <button onClick={prevPhoto} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Next — posisi di area hitam kanan */}
          <button onClick={nextPhoto} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        {/* ── CONTENT ── */}
        <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-5">

          {/* Breadcrumb */}
          <nav className="hidden md:flex items-center gap-1 text-[11px] text-gray-400 mb-4 flex-wrap">
            <Link href="/" className="hover:text-yellow-500">Beranda</Link><span>›</span>
            <Link href="/mobil-bekas" className="hover:text-yellow-500">Mobil Bekas</Link><span>›</span>
            <span className="hover:text-yellow-500 cursor-pointer">Mobil Bekas Dalam Kota Jakarta Utara</span><span>›</span>
            <span className="text-gray-600 font-medium truncate max-w-xs">{car.title}</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-6">

            {/* ── LEFT ── */}
            <div className="flex-1 overflow-hidden">

              {/* Box: judul + spek */}
              <div className="border border-gray-200 rounded-xl p-4 mb-4">
                <h1 className="text-base md:text-lg font-bold text-gray-900 leading-snug">
                  {car.title} ({car.year})
                </h1>
                <p className="text-xs text-gray-400 mt-0.5">Xpander 1.5 Sport</p>
                <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{car.location}</span>
                </div>

                {/* Specs */}
                <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4 pt-3 border-t border-gray-100">
                  {[
                    { icon: "/skredit/credSimSelectionIcon.6639f9a5.svg", label: "Bahan bakar", value: "Bensin" },
                    { icon: "/skredit/credSimTenorIcon.58ebfbba.svg", label: "Kilometer", value: "45.000 KM" },
                    { icon: "/skredit/credSimCalculatorIcon.5f688e09.svg", label: "Transmisi", value: "Matic" },
                    { icon: "/skredit/credSimSelectionIcon.6639f9a5.svg", label: "Kapasitas mesin", value: "1500 cc" },
                    { icon: "/skredit/credSimTenorIcon.58ebfbba.svg", label: "Penjual", value: "Dealer" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-2 min-w-[100px]">
                      <img src={s.icon} alt="" className="w-5 h-5 object-contain opacity-60" />
                      <div>
                        <p className="text-[10px] text-gray-400">{s.label}</p>
                        <p className="text-xs font-semibold text-gray-800">{s.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Box: Deskripsi */}
              <div className="border border-gray-200 rounded-xl p-4">
                <h2 className="text-sm font-bold text-gray-900 mb-2">Deskripsi</h2>
                <div className="text-xs text-gray-600 leading-relaxed space-y-1">
                  <p>2021 MITSUBISHI Xpander Sport 1.5 AT Tdp 45jt</p>
                  <p className="mt-1.5 font-semibold">Spesifikasi:</p>
                  <ul className="list-disc list-inside space-y-0.5 text-gray-500">
                    <li>Nk 2021 • Automatic Transmisi</li>
                    <li>1500 cc Sport</li>
                    <li>Mesin hidup dan terawat</li>
                    <li>Body/exterior mulus • Interior bersih dan wangi</li>
                    <li>AC dingin</li>
                    <li>Kelengkapan setinggi normal (Audio, lampu, Sensor-sensor dll)</li>
                    <li>Kaki-kaki sayang, suspensi nyaman</li>
                    <li>Ban tebal kondisi baik</li>
                    <li>Sangat terawat sekali • Surat dijamin</li>
                    <li>Kredit dibantu — Harga Spesial Khusus Kredit</li>
                    <li>TDP dengan Rp60jt bawa pulang mobil</li>
                  </ul>
                  <p className="mt-2 text-gray-500 italic text-[11px]">FREE WARRANTY MESIN &amp; TRANSMISI (Paket kredit included)</p>
                  <p className="text-gray-500 text-[11px]">Proses kredit cepat dan mudah.</p>
                  <p className="text-gray-500 text-[11px]">Cash harga berbeda, silakan hubungi</p>
                </div>
              </div>

              {/* Produk Serupa */}
              {related.length > 0 && (
                <div className="mt-6">
                  <h2 className="text-sm font-bold text-gray-900 mb-3">Produk Serupa</h2>
                  <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 md:mx-0 md:px-0">
                    {related.map((r) => (
                      <Link key={r.id} href={`/mobil-bekas/219`} className="flex-shrink-0 w-56 bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                          <Image src={r.image} alt={r.title} fill className="object-cover" sizes="224px" />
                        </div>
                        <div className="p-3">
                          <p className="text-gray-900 font-bold text-sm">{r.price}</p>
                          <p className="text-gray-400 text-xs mt-0.5">{r.year}</p>
                          <p className="text-gray-800 text-xs font-semibold line-clamp-2 mt-1">{r.title}</p>
                          <p className="text-gray-400 text-[10px] uppercase mt-1.5">{r.location}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── RIGHT ── */}
            <div className="w-full md:w-72 flex-shrink-0 flex flex-col gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="text-2xl font-black text-gray-900 mb-3">{car.price}</p>
                <Link href="/tukar-tambah" className="flex items-center justify-between bg-yellow-50 border border-yellow-200 rounded-xl px-3 py-2.5 hover:bg-yellow-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <img src="/logoweb/tradeinIcon.10a1c128.svg" alt="Trade In" className="w-8 h-8 object-contain" />
                    <div>
                      <p className="text-xs font-bold text-gray-900">Tukar Tambah</p>
                      <p className="text-[10px] text-gray-500">Tukar tambah mobil ini dengan mobil kamu</p>
                    </div>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="text-xs font-bold text-gray-900 mb-3">Penjual</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">DA</div>
                    <span className="text-sm font-semibold text-gray-800">Daryl Auto</span>
                  </div>
                  <button className="text-xs text-yellow-600 font-semibold flex items-center gap-0.5">
                    Kunjungi <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                </div>
                <button className="w-full border border-gray-200 text-gray-800 text-xs font-semibold py-2.5 rounded-xl mb-2 hover:bg-gray-50 flex items-center justify-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  Chat dengan penjual
                </button>
                <button className="w-full border border-gray-200 text-gray-800 text-xs font-semibold py-2.5 rounded-xl hover:bg-gray-50 flex items-center justify-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.16h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Tampilkan nomor
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/logoweb/LogoAdira.c97902f8.svg" alt="Adira Finance" className="h-7 object-contain" />
                </div>
                <p className="text-[10px] text-gray-500">Uang muka mulai dari</p>
                <p className="text-xl font-black text-gray-900">15%</p>
                <p className="text-[10px] text-gray-500 mt-0.5 mb-3">Atau cicilan mulai dari <span className="font-semibold text-gray-800">Rp 4.500.000</span></p>
                <Link href="/simulasi-kredit" className="block text-center border border-yellow-400 text-yellow-600 text-xs font-semibold py-2 rounded-xl hover:bg-yellow-50">
                  Simulasi Kredit
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile sticky CTA — sudah ada di mobile section atas */}
        </div>{/* end desktop hidden md:block */}
      </main>
      <Footer />
      <BottomNav />
      <WaChat />
    </>
  );
}
