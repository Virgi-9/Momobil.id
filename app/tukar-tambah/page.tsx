import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import WaChat from "../components/WaChat";
import Image from "next/image";
import Link from "next/link";

export default function TukarTambahPage() {
  return (
    <>
      {/* ── MOBILE HEADER ── */}
      <div className="md:hidden bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
          <span className="font-bold text-gray-900 text-base">Tukar tambah</span>
        </div>
      </div>

      {/* Desktop Navbar */}
      <Navbar />

      <main className="pb-16 md:pb-0 bg-white">

        {/* ── MOBILE LAYOUT ── */}
        <div className="md:hidden">

          {/* Hero */}
          <div className="bg-yellow-50 px-5 pt-5 pb-6 flex flex-col items-center text-center">
            <div className="relative w-full max-w-xs" style={{ height: "180px" }}>
              <Image
                src="/tt/Image_mobilTradein_lm3rtl.webp"
                alt="Tukar tambah mobil"
                fill
                className="object-contain"
                sizes="320px"
                priority
              />
            </div>
            <h1 className="text-xl font-bold text-gray-900 leading-snug mt-4 mb-2">
              Mau tukar tambah mobil yang cepat dan praktis?
            </h1>
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">
              Tukar tambah jadi instan di momobil, dapatkan penawaran dalam 1 jam!
            </p>
            <button className="w-full bg-yellow-400 text-gray-900 font-bold text-sm py-3.5 rounded-xl">
              Pilih mobil dan tukar tambah
            </button>
          </div>

          {/* 4 Steps */}
          <div className="px-5 py-6">
            <h2 className="text-base font-bold text-gray-900 mb-1">Tukar tambah mobil dalam 4 langkah mudah</h2>
            <p className="text-sm text-gray-400 mb-6">Cukup ikuti langkah di bawah ini untuk mendapatkan harga mobilmu</p>

            <div className="flex flex-col gap-8">
              {[
                { label: "Pilih mobil yang kamu mau di katalog", img: "/tt/inspeksi_mobil_gbyi91.webp" },
                { label: "Isi data diri dan data kendaraan kamu", img: "/tt/Tanda_tangan_kontrak_itsboz.webp" },
                { label: "Kamu akan dihubungi untuk menjadwalkan inspeksi gratis", img: "/tt/phoneTradeinIcon_prdqga.webp" },
                { label: "Mobil kamu dicek dan dapat penawaran harga!", img: "/tt/Serah_terima_mobil_ajb9r7.webp" },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  <div className="relative w-32 h-32">
                    <Image src={step.img} alt={step.label} fill className="object-contain" sizes="128px" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 leading-snug">{step.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why section */}
          <div className="px-5 py-6 border-t border-gray-100">
            <h2 className="text-base font-bold text-gray-900 mb-5">Mengapa tukar tambah di momobil?</h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Dijamin dapat penawaran",
                  desc: "Dengan inspeksi gratis kami, mobil kamu pasti dapat harga",
                  img: "/tt/pilih_mobil_eq7x4h.webp",
                },
                {
                  title: "Solusi yang fleksibel",
                  desc: "Harga belum jodoh? Marketplace kami bisa iklankan mobil kamu",
                  img: "/tt/Inspeksi_mobil_gbyi91 (1).webp",
                },
                {
                  title: "Proses hanya 1 jam",
                  desc: "30 menit proses inspeksi dan 30 menit hingga dapat penawaran",
                  img: "/tt/Serah_terima_mobil_ajb9r7 (1).webp",
                },
              ].map((b, i) => (
                <div key={i} className="relative flex items-center gap-4 bg-white rounded-2xl px-5 py-5 border border-gray-100 overflow-hidden">
                  <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-60 bg-gradient-to-r from-yellow-300 to-white" />
                  <div className="relative flex-shrink-0 w-16 h-16">
                    <Image src={b.img} alt={b.title} fill className="object-contain" sizes="64px" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{b.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA bottom */}
          <div className="px-5 pb-6">
            <button className="w-full bg-yellow-400 text-gray-900 font-bold text-sm py-3.5 rounded-xl">
              Pilih mobil dan tukar tambah
            </button>
          </div>

        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden md:block">

          {/* HERO */}
          <section className="relative overflow-hidden bg-gradient-to-br from-yellow-200 via-yellow-50 to-gray-100" style={{ minHeight: "480px" }}>
            <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col" style={{ minHeight: "480px" }}>
              <nav className="flex items-center gap-1.5 text-[11px] text-gray-400 pt-4">
                <Link href="/" className="hover:text-yellow-500 transition-colors">Beranda</Link>
                <span>/</span>
                <span className="text-gray-600 font-medium">Landing Page Event</span>
              </nav>
              <div className="flex items-center justify-between flex-1">
                <div className="flex-1 max-w-md">
                  <h1 className="text-3xl font-bold text-gray-900 leading-snug mb-2">
                    Mau tukar tambah mobil yang cepat dan praktis?
                  </h1>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    Tukar tambah jadi instan di momobil, dapatkan<br />penawaran dalam 1 jam!
                  </p>
                  <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors text-gray-900 font-semibold text-base px-20 py-3 rounded-md">
                    Pilih mobil dan tukar tambah
                  </button>
                </div>
                <div className="relative flex-shrink-0 hidden sm:block" style={{ width: "520px", height: "420px" }}>
                  <Image src="/tt/Image_mobilTradein_lm3rtl.webp" alt="Tukar tambah mobil" fill className="object-contain object-center" sizes="420px" priority />
                </div>
              </div>
            </div>
          </section>

          {/* 4 STEPS */}
          <section className="py-10 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
              <div className="text-center mb-8">
                <h2 className="text-[20px] font-semibold text-gray-900">Tukar tambah mobil dalam 4 langkah mudah</h2>
                <p className="text-[16px] text-gray-500 mt-1">Cukup ikuti langkah di bawah ini untuk mendapatkan harga mobilmu</p>
              </div>
              <div className="grid grid-cols-4 gap-8">
                {[
                  { label: "Pilih mobil yang kamu mau\ndi katalog", img: "/tt/inspeksi_mobil_gbyi91.webp" },
                  { label: "Isi data diri dan data\nkendaraan kamu", img: "/tt/Tanda_tangan_kontrak_itsboz.webp" },
                  { label: "Kamu akan dihubungi untuk\nmenjadwalkan inspeksi gratis", img: "/tt/phoneTradeinIcon_prdqga.webp" },
                  { label: "Mobil kamu dicek dan dapat\npenawaran harga!", img: "/tt/Serah_terima_mobil_ajb9r7.webp" },
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-4">
                    <div className="relative w-full" style={{ height: "150px" }}>
                      <Image src={step.img} alt={step.label} fill className="object-contain" sizes="25vw" />
                    </div>
                    <p className="text-[17px] font-medium text-gray-700 leading-snug whitespace-pre-line">{step.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHY */}
          <section className="pt-12 pb-4 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
              <h2 className="text-2xl font-medium text-gray-900 text-center mb-8">Mengapa tukar tambah di momobil?</h2>
              <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto">
                {[
                  { title: "Dijamin dapat penawaran", desc: "Dengan inspeksi gratis kami, mobil kamu pasti dapat harga", img: "/tt/pilih_mobil_eq7x4h.webp" },
                  { title: "Solusi yang fleksibel", desc: "Harga belum jodoh? Marketplace kami bisa iklankan mobil kamu", img: "/tt/Inspeksi_mobil_gbyi91 (1).webp" },
                  { title: "Proses hanya 1 jam", desc: "30 menit proses inspeksi dan 30 menit hingga dapat penawaran", img: "/tt/Serah_terima_mobil_ajb9r7 (1).webp" },
                ].map((b, i) => (
                  <div key={i} className="relative flex items-center gap-4 bg-white rounded-2xl px-6 py-6 border border-gray-100 overflow-hidden">
                    <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-52 h-52 rounded-full opacity-60 bg-gradient-to-r from-yellow-300 to-white" />
                    <div className="relative flex-shrink-0 w-24 h-24">
                      <Image src={b.img} alt={b.title} fill className="object-contain" sizes="96px" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1.5 whitespace-nowrap">{b.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BOTTOM CTA */}
          <section className="pb-6 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 lg:px-6 flex justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors text-gray-900 font-bold text-sm px-16 py-4 rounded">
                Pilih mobil dan tukar tambah
              </button>
            </div>
          </section>

        </div>

      </main>
      <Footer />
      <BottomNav />
      <WaChat />
    </>
  );
}
