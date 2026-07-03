"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import AuthModal from "./AuthModal";
import { useAuth } from "../hooks/useAuth";

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
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, login, logout } = useAuth();
  const jualButtonRef = useRef<HTMLButtonElement>(null);

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    if (!userMenuOpen) return;
    const handler = () => setUserMenuOpen(false);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [userMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleJualClick = () => {
    if (user) {
      router.push("/jual");
    } else {
      setAuthModal("masuk");
    }
  };

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
            {user ? (
              <div className="relative">
                <button
                  onClick={(e) => { e.stopPropagation(); setUserMenuOpen(!userMenuOpen); }}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>

                {userMenuOpen && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-0 top-12 bg-white border border-gray-200 rounded-2xl shadow-xl w-72 z-50 overflow-hidden"
                  >
                    {/* Avatar + nama */}
                    <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                      <div className="w-11 h-11 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <p className="text-base font-bold text-gray-900">{user.name}</p>
                    </div>

                    {/* Upgrade Dealer Adira */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center justify-between bg-yellow-50 border border-yellow-200 rounded-xl px-3 py-2.5">
                        <div className="flex items-center gap-2">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="#3b82f6"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                          <span className="text-xs font-medium text-gray-800">Upgrade jadi Dealer Adira</span>
                          <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">Baru</span>
                        </div>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                      </div>
                    </div>

                    {/* Menu items */}
                    {[
                      { tab: "profil", label: "Profil", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
                      { tab: "kata-sandi", label: "Ubah kata sandi", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
                      { tab: "iklan-saya", label: "Iklan Saya", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg> },
                      { tab: "pengajuan", label: "Pengajuan saya", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
                      { tab: "favorit", label: "Favorit", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
                      { tab: "input-order", label: "Input Order", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg> },
                    ].map((item) => (
                      <Link
                        key={item.tab}
                        href={`/profil?tab=${item.tab}`}
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-100 hover:bg-gray-50 transition-colors text-gray-800"
                      >
                        <span className="text-gray-600">{item.icon}</span>
                        <span className="text-sm font-medium">{item.label}</span>
                      </Link>
                    ))}

                    {/* Keluar */}
                    <button
                      onClick={() => { logout(); setUserMenuOpen(false); }}
                      className="w-full py-4 text-red-500 font-bold text-sm text-center hover:bg-red-50 transition-colors"
                    >
                      Keluar
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setAuthModal("masuk")}
                className="text-sm font-medium text-gray-700 hover:text-yellow-500 transition-colors whitespace-nowrap"
              >
                Masuk/Daftar
              </button>
            )}
            <button
              ref={jualButtonRef}
              onClick={handleJualClick}
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
              onClick={() => {
                setMenuOpen(false);
                handleJualClick();
              }}
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
          onLogin={login}
        />
      )}
    </>
  );
}
