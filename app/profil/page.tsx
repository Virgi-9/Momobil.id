"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import WaChat from "../components/WaChat";
import Footer from "../components/Footer";

type Tab = "profil" | "kata-sandi" | "iklan-saya" | "pengajuan" | "favorit" | "input-order";

const sideMenuItems: { id: Tab; label: string; sub: string; icon: React.ReactNode }[] = [
  {
    id: "profil",
    label: "Profil",
    sub: "Ubah informasi profil dan kontak",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  },
  {
    id: "kata-sandi",
    label: "Ubah kata sandi",
    sub: "Atur ulang kata sandi akun",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  },
  {
    id: "iklan-saya",
    label: "Iklan saya",
    sub: "Lihat iklan & Ubah iklan",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  },
  {
    id: "pengajuan",
    label: "Pengajuan saya",
    sub: "Lihat status pengajuan",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  },
  {
    id: "favorit",
    label: "Iklan Favorit",
    sub: "Lihat iklan favorit",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  },
  {
    id: "input-order",
    label: "Input Order",
    sub: "Submit order anda disini",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>,
  },
];

/* ── Tab Content Components ── */

function TabProfil({ user }: { user: { name: string; email: string } | null }) {
  const [bio, setBio] = useState("");
  return (
    <div>
      <h2 className="text-base font-bold text-gray-900 mb-5">Profil</h2>
      <div className="border border-gray-200 rounded-xl p-5 mb-4">
        <p className="text-sm font-semibold text-gray-700 mb-3">Informasi Dasar</p>
        <div className="mb-4">
          <label className="text-xs text-gray-500">Nama</label>
          <input defaultValue={user?.name ?? ""} className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>
        <div>
          <label className="text-xs text-gray-500">Tentang saya (opsional)</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value.slice(0, 216))}
            rows={4}
            placeholder="Masukkan detail dari profilmu disini, contoh: alamat tokomu, deskripsi dirimu/tokomu"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
          />
          <p className="text-xs text-gray-400 text-right">{bio.length}/216</p>
        </div>
      </div>
      <div className="border border-gray-200 rounded-xl p-5 mb-4">
        <p className="text-sm font-semibold text-gray-700 mb-3">Informasi kontak</p>
        <div className="mb-4">
          <label className="text-xs text-gray-500">Nomor telepon</label>
          <input defaultValue="+62" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 mt-1 focus:outline-none" />
        </div>
        <div>
          <label className="text-xs text-gray-500">Email</label>
          <input defaultValue={user?.email ?? ""} className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 mt-1 focus:outline-none" />
        </div>
      </div>
      <div className="border border-gray-200 rounded-xl p-5 mb-4">
        <p className="text-sm font-semibold text-gray-700 mb-3">Tipe Penjual</p>
        <div className="flex gap-6">
          {["Individu", "Dealer"].map((t) => (
            <label key={t} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
              <input type="radio" name="tipe" value={t} defaultChecked={t === "Individu"} className="accent-blue-500" />
              {t}
            </label>
          ))}
        </div>
      </div>
      <div className="border border-gray-200 rounded-xl p-5 mb-5">
        <p className="text-sm font-semibold text-gray-700 mb-3">Informasi Opsional</p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Akun anda sudah terhubung dengan:</p>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2">
            <svg width="14" height="14" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
            <span className="text-xs text-gray-700">{user?.email ?? ""}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-sm px-6 py-2.5 rounded-xl transition-colors">
          Simpan perubahan
        </button>
      </div>
    </div>
  );
}

function TabKataSandi() {
  const [show, setShow] = useState<Record<string, boolean>>({});
  return (
    <div>
      <h2 className="text-base font-bold text-gray-900 mb-5">Ubah Kata Sandi</h2>
      <div className="border border-gray-200 rounded-xl p-5 space-y-4">
        {[
          { key: "curr", placeholder: "Kata sandi saat ini" },
          { key: "new", placeholder: "Kata sandi baru" },
          { key: "confirm", placeholder: "Konfirmasi kata sandi baru" },
        ].map((f) => (
          <div key={f.key} className="relative">
            <input
              type={show[f.key] ? "text" : "password"}
              placeholder={f.placeholder}
              className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 pr-10"
            />
            <button type="button" onClick={() => setShow((s) => ({ ...s, [f.key]: !s[f.key] }))}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {show[f.key] ? <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></> : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>}
              </svg>
            </button>
            {f.key === "new" && <p className="text-xs text-gray-400 mt-1">Gunakan minimal 8 karakter, dan setidaknya satu huruf kapital, satu huruf kecil, dan dua angka</p>}
          </div>
        ))}
        <div className="flex justify-end pt-2">
          <button className="bg-gray-200 text-gray-400 font-bold text-sm px-6 py-2.5 rounded-xl cursor-not-allowed">
            Ubah Kata Sandi
          </button>
        </div>
      </div>
    </div>
  );
}

function TabEmpty({ title, desc }: { title: string; desc: string }) {
  const [favTab, setFavTab] = useState<"bekas" | "baru">("bekas");

  return (
    <div>
      <h2 className="text-base font-bold text-gray-900 mb-5">{title}</h2>

      {/* Tab Mobil Bekas / Mobil Baru — hanya untuk Iklan favorit */}
      {title === "Iklan favorit" && (
        <div className="flex border-b border-gray-200 mb-5">
          {(["bekas", "baru"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFavTab(t)}
              className={`px-5 py-2.5 text-sm font-semibold border-b-2 transition-colors ${
                favTab === t
                  ? "border-yellow-400 text-gray-900"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              {t === "bekas" ? "Mobil Bekas" : "Mobil Baru"}
            </button>
          ))}
        </div>
      )}

      <div className="border border-gray-200 rounded-xl p-10 flex flex-col items-center justify-center">
        <div className="w-24 h-24 mb-4">
          <img src="/logoweb/xtraOrderCarIcon.d22fb37c.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <p className="font-bold text-gray-800 text-sm mb-1">{desc}</p>
        {title === "Iklan saya" && (
          <>
            <p className="text-gray-400 text-xs mb-4">jual mobil anda sekarang</p>
            <button className="border border-gray-300 text-gray-800 font-bold text-sm px-8 py-2.5 rounded-xl hover:bg-gray-50">
              Jual sekarang
            </button>
          </>
        )}
        {title === "Iklan favorit" && (
          <>
            <p className="text-gray-400 text-xs text-center mb-4">simpan iklan yang kamu suka dan bagikan<br/>dengan rekan &amp; sahabat</p>
            <button className="border border-gray-300 text-gray-800 font-bold text-sm px-8 py-2.5 rounded-xl hover:bg-gray-50">
              Telusuri
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function TabPengajuan() {
  return (
    <div>
      <h2 className="text-base font-bold text-gray-900 mb-5">Pengajuan saya</h2>
      <div className="border border-gray-200 rounded-xl p-5">
        <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 mb-4">
          <input placeholder="Cari pengajuan" className="flex-1 text-sm text-gray-700 focus:outline-none placeholder-gray-400" />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        </div>
        <div className="text-center py-10 text-gray-400 text-sm">Belum ada pengajuan</div>
      </div>
    </div>
  );
}

function TabInputOrder() {
  return (
    <div>
      <h2 className="text-base font-bold text-gray-900 mb-5">Input Order</h2>
      <div className="border border-gray-200 rounded-xl p-5">
        <p className="text-sm text-gray-500 mb-4">Submit order anda disini</p>
        <div className="space-y-3">
          <input placeholder="Nama pelanggan" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <input placeholder="Nomor telepon" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <input placeholder="Produk / mobil" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <textarea rows={3} placeholder="Catatan" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none" />
          <div className="flex justify-end">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-sm px-6 py-2.5 rounded-xl">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Mobile menu items (full list incl. kebijakan etc.) ── */
const mobileMenuItems = [
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, label: "Profil", sub: "Ubah informasi profil dan kontak" },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, label: "Ubah Kata Sandi", sub: "Atur ulang kata sandi akun" },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>, label: "Iklan Saya", sub: "Lihat iklan saya" },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, label: "Pengajuan saya", sub: "Lihat status pengajuan" },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, label: "Iklan Favorit", sub: "Lihat iklan Favorit Saya" },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>, label: "Input Order", sub: "Submit order anda disini" },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, label: "Kebijakan privasi", sub: "kebijakan privasi momobil.id" },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>, label: "Pusat bantuan", sub: "Ada yang bisa kami bantu?" },
];

export default function ProfilPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <ProfilPageContent />
      </Suspense>
      <Footer />
      <BottomNav />
      <WaChat />
    </>
  );
}

function ProfilPageContent() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<Tab>((searchParams.get("tab") as Tab) ?? "profil");

  useEffect(() => {
    const tab = searchParams.get("tab") as Tab;
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem("momobil_user")) router.push("/");
    }, 300);
    return () => clearTimeout(timer);
  }, [router]);

  const initials = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  const handleLogout = () => { logout(); router.push("/"); };

  const renderContent = () => {
    switch (activeTab) {
      case "profil": return <TabProfil user={user} />;
      case "kata-sandi": return <TabKataSandi />;
      case "iklan-saya": return <TabEmpty title="Iklan saya" desc="Kamu belum memasang iklan" />;
      case "pengajuan": return <TabPengajuan />;
      case "favorit": return <TabEmpty title="Iklan favorit" desc="Kamu belum memiliki iklan favorit" />;
      case "input-order": return <TabInputOrder />;
    }
  };

  return (
    <>
      {/* Mobile header */}
      <div className="md:hidden bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-3">
          <p className="text-base font-bold text-gray-900">Akun Saya</p>
          <button aria-label="Notifikasi">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ══ DESKTOP layout ══ */}
      <main className="hidden md:block bg-gray-50 min-h-screen">
        <div className="max-w-screen-lg mx-auto px-6 py-8">
          <div className="flex gap-6 items-start">

            {/* Sidebar */}
            <div className="w-72 flex-shrink-0">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {sideMenuItems.map((item) => {
                  const active = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        window.history.replaceState(null, "", `?tab=${item.id}`);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3.5 border-b border-gray-100 last:border-0 text-left transition-colors ${active ? "bg-yellow-50 border-l-4 border-l-yellow-400" : "hover:bg-gray-50 border-l-4 border-l-transparent"}`}
                    >
                      <div className={active ? "text-yellow-500" : "text-gray-500"}>{item.icon}</div>
                      <div>
                        <p className={`text-sm font-bold ${active ? "text-gray-900" : "text-gray-700"}`}>{item.label}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                      </div>
                    </button>
                  );
                })}
                {/* Lihat profil kamu */}
                <div className="p-4">
                  <button
                    onClick={() => setActiveTab("profil")}
                    className="w-full border border-gray-300 text-gray-800 font-bold text-sm py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Lihat profil kamu
                  </button>
                </div>
              </div>
            </div>

            {/* Content panel */}
            <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6 min-h-[400px]">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>

      {/* ══ MOBILE layout ══ */}
      <main className="md:hidden bg-white min-h-screen pb-24">
        <div className="max-w-lg mx-auto">
          {/* Avatar + nama */}
          <div className="flex items-center gap-3 px-4 py-5 border-b border-gray-100">
            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
              {initials}
            </div>
            <p className="text-base font-bold text-gray-900">{user?.name ?? "..."}</p>
          </div>

          {/* Upgrade Dealer Adira */}
          <div className="mx-4 mt-4 mb-2">
            <div className="flex items-center justify-between bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#3b82f6"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                <span className="text-sm font-medium text-gray-800">Upgrade jadi Dealer Adira</span>
                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Baru</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </div>
          </div>

          {/* Menu list */}
          <div className="mt-3">
            {mobileMenuItems.map((item, i) => {
              const handleNavigate = () => {
                if (item.label === "Iklan Saya") {
                  router.push("/iklan-saya");
                }
              };
              return (
                <button 
                  key={i} 
                  onClick={handleNavigate}
                  className="w-full flex items-center gap-4 px-4 py-4 border-b border-gray-100 hover:bg-gray-50 text-left transition-colors"
                >
                  <div className="text-gray-700 flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{item.label}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{item.sub}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="px-4 py-6 text-center">
            <button onClick={handleLogout} className="text-red-500 font-bold text-base">Keluar</button>
          </div>
        </div>
      </main>
    </>
  );
}
