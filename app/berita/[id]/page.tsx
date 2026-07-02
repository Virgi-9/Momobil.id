"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BottomNav from "../../components/BottomNav";
import WaChat from "../../components/WaChat";
import { articlesDetail } from "../../data/articles";
import { articles, recommendedCars } from "../../data/cars";

export default function BeritaDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const article = articlesDetail.find((a) => a.id === id);
  const related = articles.filter((a) => a.id !== id).slice(0, 4);

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Artikel tidak ditemukan.</p>
        </main>
        <Footer />
      </>
    );
  }

  const tags = ["cara merawat mobil", "Mobil Rusak", "perawatan mobil", "service mobil", "tips otomotif"];

  return (
    <>
      <div className="hidden md:block"><Navbar /></div>

      {/* ── MOBILE HEADER ── */}
      <div className="md:hidden bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
          <span className="font-bold text-gray-900 text-sm">News &amp; Artikel</span>
        </div>
      </div>

      <main className="bg-white min-h-screen pb-20 md:pb-0">

        {/* ══════════════ MOBILE ══════════════ */}
        <div className="md:hidden px-4 pt-4">

          {/* Judul */}
          <h1 className="text-lg font-black text-gray-900 leading-snug mb-2">{article.title}</h1>

          {/* Tanggal + author + share */}
          <p className="text-xs text-gray-500 mb-1">{article.date}</p>
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs text-gray-500">Ditulis oleh <span className="font-bold text-gray-800">{article.author.split(" ")[2] ?? "Dewi"}</span></p>
            <div className="flex items-center gap-2">
              {/* WhatsApp */}
              <button className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </button>
              {/* Facebook */}
              <button className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </button>
              {/* X (Twitter) */}
              <button className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </button>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative w-full rounded-xl overflow-hidden mb-5" style={{ aspectRatio: "4/3" }}>
            <Image src={article.image} alt={article.title} fill className="object-cover" sizes="100vw" priority />
          </div>

          {/* Konten artikel */}
          <div className="space-y-4 mb-6">
            {article.content.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <h2 className="text-sm font-bold text-gray-900 mb-1.5">{block.heading}</h2>
                )}
                <p className="text-sm text-gray-700 leading-relaxed">
                  {i === 0 && <span className="font-black text-gray-900">momobil.id </span>}
                  {i === 0 && <span className="font-black text-gray-900">– </span>}
                  {block.body}
                </p>
              </div>
            ))}
          </div>

          {/* Simulasi Kredit card */}
          <div className="border border-gray-200 rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <img src="/logoweb/xtraOrderCarIcon.d22fb37c.svg" alt="" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Simulasi kredit</p>
                <p className="text-xs text-blue-500">Sudah ketemu mobil impianmu? Cek simulasi cicilannya disini</p>
              </div>
            </div>
            <Link href="/simulasi-kredit" className="block w-full text-center bg-yellow-400 text-gray-900 font-bold text-sm py-3 rounded-xl">
              Simulasi Kredit
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span key={tag} className="border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Berita Terkait — horizontal scroll */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-gray-900 mb-3">Berita Terkait</h3>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1 -mx-4 px-4">
              {related.map((r) => (
                <Link key={r.id} href={`/berita/${r.id}`} className="flex-shrink-0 w-44 group">
                  <div className="relative w-full rounded-xl overflow-hidden mb-2" style={{ aspectRatio: "4/3" }}>
                    <Image src={r.image} alt={r.title} fill className="object-cover" sizes="176px" />
                  </div>
                  <span className="inline-block bg-yellow-400 text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded-full mb-1">
                    {r.category}
                  </span>
                  <p className="text-xs font-bold text-gray-900 line-clamp-3 leading-snug group-hover:text-yellow-600">{r.title}</p>
                  <p className="text-[10px] text-gray-400 mt-1">{r.date}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-2">momobil.id – {r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Rekomendasi Mobil */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-gray-900 mb-3">Rekomendasi Mobil</h3>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1 -mx-4 px-4">
              {recommendedCars.map((car) => (
                <Link key={car.id} href="/mobil-bekas/219" className="flex-shrink-0 w-40 bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                    <Image src={car.image} alt={car.title} fill className="object-cover" sizes="160px" />
                    <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    </button>
                  </div>
                  <div className="p-2">
                    <p className="text-yellow-500 font-bold text-xs">{car.price}</p>
                    <p className="text-gray-400 text-[10px] mt-0.5">{car.year}</p>
                    <p className="text-gray-800 text-xs font-semibold line-clamp-2 mt-0.5">{car.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════ DESKTOP ══════════════ */}
        <div className="hidden md:block">
          <div className="max-w-screen-lg mx-auto px-4 lg:px-6 py-6">
            <div className="flex flex-col md:flex-row gap-8">

              {/* Article */}
              <article className="flex-1 min-w-0">
                <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
                  <Link href="/" className="hover:text-yellow-500">Beranda</Link>
                  <span>/</span>
                  <Link href="/" className="hover:text-yellow-500">Berita</Link>
                  <span>/</span>
                  <span className="text-gray-600 truncate max-w-xs">{article.title}</span>
                </nav>

                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">{article.category}</span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>

                <h1 className="text-xl md:text-2xl font-black text-gray-900 leading-snug mb-4">{article.title}</h1>

                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-gray-900 font-bold text-xs flex-shrink-0">M</div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">{article.author}</p>
                    <p className="text-[10px] text-gray-400">momobil.id</p>
                  </div>
                </div>

                <div className="relative w-full rounded-xl overflow-hidden mb-6" style={{ aspectRatio: "16/9" }}>
                  <Image src={article.image} alt={article.title} fill className="object-cover" sizes="700px" priority />
                </div>

                <div className="space-y-5 mb-8">
                  {article.content.map((block, i) => (
                    <div key={i}>
                      {block.heading && <h2 className="text-base md:text-lg font-bold text-gray-900 mb-2">{block.heading}</h2>}
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        {i === 0 && <span className="font-black text-gray-900">momobil.id – </span>}
                        {block.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Share desktop */}
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100 mb-8">
                  <span className="text-sm font-semibold text-gray-700">Bagikan:</span>
                  <button className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></button>
                  <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></button>
                  <button className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {tags.map((tag) => (
                    <span key={tag} className="border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded-full hover:bg-gray-50 cursor-pointer">{tag}</span>
                  ))}
                </div>

                {/* Berita Terkait grid */}
                <h3 className="text-base font-bold text-gray-900 mb-4">Berita Terkait</h3>
                <div className="grid grid-cols-3 gap-4 mb-10">
                  {related.slice(0, 3).map((r) => (
                    <Link key={r.id} href={`/berita/${r.id}`} className="group flex flex-col">
                      <div className="relative w-full rounded-xl overflow-hidden mb-2" style={{ aspectRatio: "16/10" }}>
                        <Image src={r.image} alt={r.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="33vw" />
                        <span className="absolute bottom-2 left-2 bg-yellow-400 text-gray-800 text-[10px] font-bold px-2 py-0.5 rounded-full">{r.category}</span>
                      </div>
                      <p className="text-xs font-bold text-gray-900 line-clamp-2 group-hover:text-yellow-600 leading-snug">{r.title}</p>
                      <p className="text-[10px] text-gray-400 mt-1">{r.date}</p>
                      <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">momobil.id – {r.excerpt}</p>
                    </Link>
                  ))}
                </div>

                {/* Rekomendasi Mobil */}
                <h3 className="text-base font-bold text-gray-900 mb-4">Rekomendasi Mobil</h3>
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                  {recommendedCars.map((car) => (
                    <Link key={car.id} href="/mobil-bekas/219"
                      className="flex-shrink-0 w-44 bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
                      <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                        <Image src={car.image} alt={car.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="176px" />
                      </div>
                      <div className="p-2.5">
                        <p className="text-yellow-500 font-bold text-xs">{car.price}</p>
                        <p className="text-gray-400 text-[10px] mt-0.5">{car.year}</p>
                        <p className="text-gray-800 text-xs font-semibold line-clamp-2 mt-0.5">{car.title}</p>
                        <p className="text-gray-400 text-[9px] uppercase mt-1">{car.location}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </article>

              {/* Sidebar */}
              <aside className="w-full md:w-72 flex-shrink-0">
                <div className="md:sticky md:top-24">
                  <h3 className="text-sm font-bold text-gray-900 mb-4">Berita Terkait</h3>
                  <div className="flex flex-col gap-4">
                    {related.map((r) => (
                      <Link key={r.id} href={`/berita/${r.id}`} className="flex gap-3 group">
                        <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image src={r.image} alt={r.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="96px" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] text-yellow-600 font-semibold">{r.category}</span>
                          <p className="text-xs font-semibold text-gray-800 line-clamp-3 mt-0.5 group-hover:text-yellow-600 transition-colors">{r.title}</p>
                          <p className="text-[10px] text-gray-400 mt-1">{r.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
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