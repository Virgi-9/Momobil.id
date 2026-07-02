"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AuthModal from "./AuthModal";

const subNavLinks = [
  {
    label: "Mobil Baru",
    href: "/mobil-baru",
    icon: "/navbar/mbaru.svg",
  },
  {
    label: "Mobil Bekas",
    href: "/mobil-bekas",
    icon: "/navbar/mbekas.svg",
  },
  {
    label: "Tukar Tambah",
    href: "/tukar-tambah",
    icon: "/navbar/ttambah.svg",
  },
  {
    label: "Test Drive",
    href: "/test-drive",
    icon: "/navbar/tdrive.svg",
  },
  {
    label: "Simulasi Kredit",
    href: "/simulasi-kredit",
    icon: "/navbar/skredit.svg",
  },
];

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Kalimantan Barat");
  const [menuOpen, setMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState<null | "masuk" | "daftar">(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header className={`sticky top-0 z-50 bg-white border-b border-gray-200 transition-shadow duration-300 ${isScrolled ? "shadow-lg" : ""} ${pathname !== "/" ? "hidden md:block" : ""}`}>
      {/* ── MOBILE NAVBAR ── */}
      <div className="md:hidden px-4 pt-3 pb-2">
        {/* Row 1: Logo (homepage only) + Lokasi */}
        {pathname === "/" && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <Link href="/">
                <img src="/logoweb/momobilIcon_hd.bf14c0ed.svg" alt="momobil.id" className="h-7 w-auto" />
              </Link>
              <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Indonesia</span>
              </div>
            </div>
            {/* Search bar */}
            <div className="flex items-center h-[42px] border border-gray-200 rounded-full bg-white px-4 gap-2">
              <input
                type="text"
                placeholder="Cari mobil bekas ?"
                className="flex-1 text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-white"
              />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* ── DESKTOP NAVBAR ── */}
      <div className="hidden md:block">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        <div className="flex items-center h-[73px] gap-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 mr-1">
            <div className="flex items-center">
              <img
                src="/logoweb/momobilIcon_hd.bf14c0ed.svg"
                alt="momobil.id"
                className="h-8 w-auto"
              />
            </div>
          </Link>

          {/* Location + Search — separated with gap */}
          <div className="hidden md:flex flex-1 items-center gap-4 max-w-3xl">
            {/* Location dropdown — standalone bordered box */}
            <div className="flex items-center gap-3 px-10 h-[44px] border border-gray-300 rounded-xl bg-white flex-shrink-0">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="text-sm text-gray-700 bg-transparent focus:outline-none cursor-pointer appearance-none font-medium pr-5"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right -3px center" }}
              >
                <option>Indonesia</option>
                <option>Kalimantan Barat</option>
                <option>Jakarta</option>
                <option>Bandung</option>
                <option>Surabaya</option>
                <option>Medan</option>
                <option>Bali</option>
                <option>Yogyakarta</option>
              </select>
            </div>

            {/* Search bar — standalone bordered box */}
            <div className="flex flex-1 items-center h-[44px] border border-gray-300 rounded-xl overflow-hidden bg-white">
              <input
                type="text"
                placeholder="Cari kendaraan impianmu disini..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-full px-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none bg-white"
              />
              <button
                className="h-full px-4 bg-yellow-400 hover:bg-yellow-500 transition-colors flex items-center justify-center flex-shrink-0"
                aria-label="Cari"
              >
                <Image src="/navbar/serach.svg" alt="" width={16} height={16} />
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-14 ml-auto">
            <button
              onClick={() => setAuthModal("masuk")}
              className="text-sm font-medium text-gray-700 hover:text-yellow-500 transition-colors whitespace-nowrap"
            >
              Masuk/Daftar
            </button>
            <button
              onClick={() => setAuthModal("daftar")}
              className="flex items-center gap-1.5 border border-gray-800 text-gray-800 text-base font-semibold px-7 h-[45px] rounded-xl hover:bg-gray-50 transition-colors"
            >
              <Image src="/navbar/jual.svg" alt="" width={25} height={25} />
              Jual
            </button>
          </div>

          {/* Mobile hamburger — hidden, mobile uses dedicated navbar above */}
        </div>
      </div>
      </div> {/* end hidden md:block desktop wrapper */}

      {/* Sub-nav */}
      <div className="hidden md:block bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-[37px]">
            {/* Left links */}
            <div className="flex items-center gap-1">
              {subNavLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-yellow-500 rounded transition-colors whitespace-nowrap"
                >
                  <Image src={item.icon} alt="" width={16} height={16} />
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right — Download Adiraku */}
            <Link
              href="#"
              className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Image src="/navbar/phone.svg" alt="" width={20} height={20} />
              Download Adiraku
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4">
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden h-10">
            <div className="flex items-center gap-1 px-3 border-r border-gray-200 h-full">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-xs text-gray-600">Lokasi</span>
            </div>
            <input
              type="text"
              placeholder="Cari kendaraan impianmu..."
              className="flex-1 h-full px-3 text-sm focus:outline-none"
            />
            <button className="h-full px-3 bg-yellow-400 flex items-center" aria-label="Cari">
              <Image src="/navbar/serach.svg" alt="" width={14} height={14} />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {subNavLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 px-2 py-2.5 text-sm text-gray-700 hover:text-yellow-500 border-b border-gray-50"
              >
                <Image src={item.icon} alt="" width={16} height={16} />
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-3 pt-1">
            <button
              onClick={() => { setMenuOpen(false); setAuthModal("masuk"); }}
              className="flex-1 text-sm font-medium text-gray-700 border border-gray-300 py-2 rounded hover:bg-gray-50"
            >
              Masuk/Daftar
            </button>
            <button
              onClick={() => { setMenuOpen(false); setAuthModal("daftar"); }}
              className="flex-1 text-base font-semibold text-gray-800 border border-gray-800 py-2 rounded-xl hover:bg-gray-50 flex items-center justify-center gap-1"
            >
              <Image src="/navbar/jual.svg" alt="" width={13} height={13} />
              Jual
            </button>
          </div>
        </div>
      )}
    </header>

      {/* Auth Modal — rendered outside header so it overlays full screen */}
      {authModal && (
        <AuthModal
          initialMode={authModal}
          onClose={() => setAuthModal(null)}
        />
      )}
    </>
  );
}
