import Link from "next/link";
import Image from "next/image";

const categories = [
  { label: "Mobil\nBaru", href: "/mobil-baru", icon: "/navbar/mbaru.svg" },
  { label: "Mobil\nBekas", href: "/mobil-bekas", icon: "/navbar/mbekas.svg" },
  { label: "Tukar\nTambah", href: "/tukar-tambah", icon: "/navbar/ttambah.svg" },
  { label: "Simulasi\nKredit", href: "/simulasi-kredit", icon: "/navbar/skredit.svg" },
  { label: "Test\nDrive", href: "/test-drive", icon: "/navbar/tdrive.svg" },
];

export default function Categories() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">

        {/* ── MOBILE: icon grid + promo cards ── */}
        <div className="md:hidden">
          {/* Kategori label */}
          <p className="text-sm font-bold text-gray-900 pt-4 pb-3">Kategori</p>

          {/* 5 icon circles */}
          <div className="flex justify-between pb-4">
            {categories.map((cat) => (
              <Link key={cat.label} href={cat.href} className="flex flex-col items-center gap-1.5 flex-1">
                <div className="w-14 h-14 rounded-full bg-yellow-50 border border-yellow-100 flex items-center justify-center">
                  <Image src={cat.icon} alt={cat.label} width={28} height={28} />
                </div>
                <span className="text-[11px] text-gray-600 text-center leading-tight whitespace-pre-line">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Promo cards */}
          <div className="flex flex-col gap-2 pb-4">
            {/* Upgrade Dealer */}
            <Link href="#" className="flex items-center justify-between px-4 py-3 bg-yellow-50 rounded-xl border border-yellow-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800 text-sm">Upgrade jadi Dealer Adira</span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Baru</span>
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </Link>

            {/* Tukar Tambah */}
            <Link href="/tukar-tambah" className="flex items-center justify-between px-4 py-3 bg-white rounded-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                  <Image src="/navbar/ttambah.svg" alt="Tukar Tambah" width={32} height={32} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Tukar Tambah</p>
                  <p className="text-xs text-gray-400">Tukar tambah mobilmu disini</p>
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </Link>
          </div>
        </div>

        {/* ── DESKTOP: dealer strip ── */}
        <div className="hidden md:flex items-center justify-between py-3 px-4 bg-orange-50 rounded-lg my-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800 text-sm">Bergabung jadi Dealer Adira</span>
              <span className="bg-yellow-400 text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded-full">Baru</span>
            </div>
          </div>
          <Link href="#" className="flex-shrink-0 border border-gray-800 text-gray-800 text-xs font-semibold px-4 py-2 rounded hover:bg-gray-100 transition-colors">
            Cek keuntungannya
          </Link>
        </div>

      </div>
    </section>
  );
}
