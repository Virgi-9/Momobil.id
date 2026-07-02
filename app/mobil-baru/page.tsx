import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";
import WaChat from "../components/WaChat";
import NewCarSection from "../components/NewCarSection";
import BrandGrid from "../components/BrandGrid";
import MobilBaruHero from "../components/MobilBaruHero";
import PriceFilter from "../components/PriceFilter";
import Link from "next/link";
import Image from "next/image";
import { newCarsByBrand } from "../data/newCars";

export default function MobilBaruPage() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0 bg-gray-50">

        {/* ── MOBILE HEADER ── */}
        <div className="md:hidden bg-white">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Link href="/">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </Link>
              <span className="font-bold text-gray-900 text-base">Mobil Baru</span>
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
              <input type="text" placeholder="Cari mobil baru ?" className="flex-1 text-sm text-gray-700 placeholder-gray-400 focus:outline-none" />
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
        </div>

        {/* Hero promo banner — full width on mobile, padded on desktop */}
        <div className="md:hidden w-full">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1921/487" }}>
            <Image
              src="/banner/imwsfqrpe5dy2halww7v.webp"
              alt="Pilihan Mobil Baru"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
        </div>
        <div className="hidden md:block">
          <MobilBaruHero />
        </div>

        {/* Brand grid */}
        <BrandGrid />

        {/* Price filter */}
        <PriceFilter />

        {/* Car sections */}
        <NewCarSection title="Mobil populer" cars={newCarsByBrand.all} viewAllHref="/mobil-baru/semua" />
        <NewCarSection title="Mobil populer dari Honda" cars={newCarsByBrand.honda} viewAllHref="/mobil-baru/honda" />
        <NewCarSection title="Mobil populer dari Mitsubishi" cars={newCarsByBrand.mitsubishi} viewAllHref="/mobil-baru/mitsubishi" />
        <NewCarSection title="Mobil populer dari Wuling" cars={newCarsByBrand.wuling} viewAllHref="/mobil-baru/wuling" />
        <NewCarSection title="Mobil populer dari Daihatsu" cars={newCarsByBrand.daihatsu} viewAllHref="/mobil-baru/daihatsu" />
        <NewCarSection title="Mobil populer dari Toyota" cars={newCarsByBrand.toyota} viewAllHref="/mobil-baru/toyota" />
      </main>
      <Footer />
      <BottomNav />
      <WaChat />
    </>
  );
}
