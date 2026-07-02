"use client";

import { useState, type JSX } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import WaChat from "../components/WaChat";

const areas = [
  "DKI Jakarta", "Jawa Barat", "Jawa Tengah", "Jawa Timur",
  "Banten", "DI Yogyakarta", "Bali", "Sumatera Utara",
  "Sumatera Selatan", "Kalimantan Barat", "Kalimantan Timur",
  "Sulawesi Selatan", "Sulawesi Utara", "Papua",
];

const faqs: { q: string; a: string | JSX.Element }[] = [
  {
    q: "Apa yang dimaksud dengan Pembiayaan Mobil melalui Momobil.id?",
    a: (
      <span>
        <strong>Pembiayaan Mobil melalui Momobil.id</strong> adalah pembiayaan kendaraan <strong>mobil baru</strong> atau <strong>bekas</strong> dengan berbagai pilihan{" "}
        <strong>merek, tipe/model serta simulasi pembiayaan</strong> yang tersedia di website resmi momobil.id (www.momobil.id) yang dapat diajukan pembiayaannya oleh seluruh konsumen dan disediakan oleh Adira Finance.
      </span>
    ),
  },
  {
    q: "Apa saja brand/merek mobil yang tersedia?",
    a: (
      <span>
        Konsumen dapat mengajukan pembiayaan <strong>mobil baru atau bekas dengan tipe Penumpang/<em>Passenger</em></strong>, dengan semua merek dan model yang tersedia pada katalog mobil di website momobil.id
      </span>
    ),
  },
  {
    q: "Apakah ada informasi mengenai Simulasi Pembiayaan Mobil melalui momobil.id?",
    a: (
      <span>
        <p className="mb-3">Konsumen dapat melihat simulasi pembiayaan mobil melalui website momobil.id dengan daftar merek kendaraan mobil sebagai berikut:</p>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <div className="flex items-center bg-yellow-400 py-3 px-3 gap-3">
            <span className="text-sm font-bold text-gray-900 w-1/3 flex-shrink-0 text-center border-r border-yellow-600 pr-3">Merek Mobil</span>
            <span className="text-sm font-bold text-gray-900 flex-1 text-center">Link Halaman Simulasi Pembiayaan</span>
          </div>
          {[
            ["BMW", "https://momobil.id/bmw"],
            ["DAIHATSU", "https://momobil.id/daihatsu"],
            ["FORD", "https://momobil.id/ford"],
            ["GEELY", "https://momobil.id/geely"],
            ["HONDA", "https://momobil.id/honda"],
            ["HYUNDAI", "https://momobil.id/hyundai"],
            ["JEEP", "https://momobil.id/jeep"],
            ["KIA", "https://momobil.id/kia"],
            ["MAZDA", "https://momobil.id/mazda"],
            ["MERCEDES BENZ", "https://momobil.id/mercedes%20benz"],
            ["MINI", "https://momobil.id/mini"],
            ["MITSUBISHI", "https://momobil.id/mitsubishi"],
            ["SUBARU", "https://momobil.id/subaru"],
            ["SUZUKI", "https://momobil.id/suzuki"],
            ["TOYOTA", "https://momobil.id/toyota"],
            ["WULING", "https://momobil.id/wuling"],
            ["MG", "https://momobil.id/mg"],
            ["CHERY", "https://momobil.id/chery"],
            ["GWM", "https://momobil.id/gwm"],
            ["BYD", "https://momobil.id/byd"],
          ].map(([merek, link]) => (
            <div key={merek} className="flex items-center border-t border-gray-300 py-2.5 px-3">
              <span className="text-sm text-gray-700 w-1/3 flex-shrink-0 text-center border-r border-gray-300 pr-3">{merek}</span>
              <a href={link} className="text-blue-600 hover:underline text-sm flex-1 text-right truncate pl-3">{link}</a>
            </div>
          ))}
        </div>
      </span>
    ),
  },
  {
    q: "Apa saja persyaratan dan dokumen yang dibutuhkan untuk mengajukan pembiayaan di Adira Finance melalui website momobil.id?",
    a: (
      <span>
        <p className="mb-3">Berikut persyaratan &amp; dokumen yang dibutuhkan, sebagai berikut:</p>
        <ol className="list-decimal list-outside ml-5 space-y-2 mb-3">
          <li>Warga Negara Indonesia dan mempunyai kartu tanda pengenal (KTP).</li>
          <li>Minimal usia untuk melakukan pengajuan adalah 21 tahun.</li>
          <li>
            Menyiapkan Dokumen sebagai berikut:
            <ul className="list-disc list-outside ml-5 mt-2 space-y-2">
              <li>KTP pemohon</li>
              <li>PBB/AJB/sertifikat kepemilikan/bukti rekening listrik/PDAM</li>
              <li>Terkait Bukti Kepemilikan Rumah dan Bukti Penghasilan, Nama Pemilik Rumah harus sama dengan Nama Lengkap pada KTP pengaju, atau disertai dengan bukti referensi surat yang menghubungkan di antara keduanya</li>
              <li>Surat persetujuan Istri/Suami (jika sudah menikah)</li>
              <li>Slip gaji /surat keterangan penghasilan (karyawan) 3 bulan terakhir, dengan nama yang tercantum pada bukti penghasilan sesuai dengan nama Pengaju</li>
              <li>NPWP (jika wirausaha)</li>
            </ul>
          </li>
        </ol>
        <p className="italic text-gray-500">Dokumen persyaratan konsumen akan diserahkan kepada petugas Adira Finance saat survei.</p>
      </span>
    ),
  },
  {
    q: "Bagaimana cara mengajukan pembiayaan mobil baru atau bekas via Website momobil.id?",
    a: (
      <span>
        <p className="mb-3">Berikut cara melakukan pengajuan Pembiayaan Mobil Secara Online melalui Website momobil.id:</p>
        <ol className="list-decimal list-outside ml-5 space-y-2 mb-4">
          <li>Pada halaman <strong><em>Home</em></strong>, konsumen dapat melakukan pencarian unit mobil yang diinginkan atau melihat katalog mobil baru dengan klik tombol <strong>&quot;Mobil Baru/Bekas&quot;</strong>.</li>
          <li>Konsumen diarahkan ke katalog mobil baru dan dapat memilih unit yang diinginkan dengan bantuan filter merek unggulan atau harga.</li>
          <li>Konsumen akan masuk ke halaman detail unit untuk melihat detail foto dan deskripsi unit. Untuk melanjutkan pembelian, konsumen dapat klik pada tombol &quot;Ajukan Kredit&quot; pada pembiayaan Adira Finance.</li>
        </ol>
        <div className="flex justify-center mb-4">
          <img src="/skredit/langkah 1.png" alt="Langkah 1-3" className="max-w-full rounded-lg" />
        </div>
        <ol className="list-decimal list-outside ml-5 space-y-2 mb-4" start={4}>
          <li>Halaman simulasi kredit akan muncul dan Konsumen dapat mengisi Total DP, Cara Pembayaran Angsuran Pertama, dan Area. Jika sudah sesuai, klik tombol &quot;Simulasi&quot;.</li>
          <li>Hasil simulasi kredit dan perkiraan cicilan akan muncul, Konsumen dapat memilih untuk jangka waktu (tenor) yang tersedia. Jika sudah sesuai, klik tombol &quot;Ajukan kredit&quot;.</li>
        </ol>
        <div className="flex justify-center mb-4">
          <img src="/skredit/langkah 2.png" alt="Langkah 4-5" className="max-w-full rounded-lg" />
        </div>
        <ol className="list-decimal list-outside ml-5 space-y-2 mb-4" start={6}>
          <li>Konsumen diminta untuk mengisi data diri berupa Nama Lengkap, Nomor Telepon, dan Email secara lengkap dan benar. Jika sudah sesuai, klik tombol &quot;Kirim&quot;.</li>
          <li>Muncul halaman konfirmasi pengajuan berhasil dikirim.</li>
        </ol>
        <div className="flex justify-center mb-4">
          <img src="/skredit/langkah 3.png" alt="Langkah 6-7" className="max-w-full rounded-lg" />
        </div>
        <ol className="list-decimal list-outside ml-5 space-y-2" start={8}>
          <li>Selanjutnya petugas Adira Finance akan menghubungi konsumen dalam waktu 1 x 24 jam (hari kerja) untuk proses verifikasi pengajuan pembiayaannya. Jika konsumen menyetujui untuk melanjutkan pengajuan maka petugas Adira Finance akan melakukan survei sesuai dengan tanggal janji temu yang disepakati.</li>
          <li>Setelah pembiayaan Anda disetujui, penjual akan mengirimkan unit kendaraan ke alamat sesuai aplikasi data pengajuan Anda.</li>
        </ol>
      </span>
    ),
  },
  {
    q: "Jika saya ingin mengetahui lebih detil mengenai simulasi pembiayaan mobil atau status pengajuan kredit saya, ke mana saya bisa menghubungi?",
    a: (
      <span>
        <p className="mb-3">Konsumen dapat menghubungi layanan Dering Adira Finance melalui:</p>
        <ul className="list-disc list-outside ml-5 space-y-2 mb-3">
          <li>Call Center <strong>1500511</strong></li>
          <li>Email: <a href="mailto:customercare@adira.co.id" className="text-blue-600 hover:underline">customercare@adira.co.id</a></li>
          <li>Whatsapp <strong>08118115811</strong>, dengan ketik <strong>HCS</strong></li>
        </ul>
        <p>Atau menghubungi layanan <strong>Whatsapp Official Momobil: 081288527009</strong> (Senin - Sabtu pukul 09.00 - 17.00 WIB)</p>
      </span>
    ),
  },
];

function FaqItem({ q, a }: { q: string; a: string | JSX.Element }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white transition-colors gap-4"
      >
        <span className="text-sm font-bold text-gray-800 leading-snug">{q}</span>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="#9ca3af" strokeWidth="2.5"
          className={`flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4 bg-white border-t border-gray-100">
          <div className="text-sm text-gray-800 leading-relaxed mt-3">{a}</div>
        </div>
      )}
    </div>
  );
}

export default function SimulasiKreditPage() {
  const [tab, setTab] = useState<"bekas" | "baru">("bekas");
  const [harga, setHarga] = useState("");
  const [uangMuka, setUangMuka] = useState("");
  const [area, setArea] = useState("");
  const [result, setResult] = useState<null | { cicilan: string; tenor: string; dp: string }>(null);

  function formatRupiah(val: string) {
    const num = val.replace(/\D/g, "");
    return num ? "Rp " + Number(num).toLocaleString("id-ID") : "";
  }

  function handleHitung() {
    const hargaNum = Number(harga.replace(/\D/g, ""));
    const dpNum = Number(uangMuka.replace(/\D/g, ""));
    if (!hargaNum || !area) return;
    const pinjaman = hargaNum - dpNum;
    const bunga = 0.015; // 1.5% per bulan flat
    const tenor = 48; // 48 bulan
    const cicilan = Math.round((pinjaman * (1 + bunga * tenor)) / tenor);
    setResult({
      cicilan: "Rp " + cicilan.toLocaleString("id-ID"),
      tenor: "48 bulan",
      dp: formatRupiah(uangMuka) || "Rp 0",
    });
  }

  return (
    <>
      <Navbar />

      {/* ── MOBILE HEADER ── */}
      <div className="md:hidden bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="flex items-center gap-3 px-4 py-3">
          <a href="/">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </a>
          <span className="font-bold text-gray-900 text-base">Simulasi Kredit</span>
        </div>
      </div>

      <main className="pb-16 md:pb-0 bg-gray-50">

        {/* ── MOBILE LAYOUT ── */}
        <div className="md:hidden">

          {/* Hero */}
          <div className="bg-gradient-to-b from-yellow-50 to-white px-5 pt-5 pb-6 text-center">
            <h1 className="text-lg font-bold text-gray-900 mb-2">Simulasi Perhitungan Kredit Mobil</h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Ngidam mobil baru, bekas, atau listrik? Simulasi-in dulu aja, praktis tanpa repot hitung manual. Kamu bisa bandingin harga dan cicilan sesuai kantong, lalu pilih mobil yang cocok. Cobain yuk!
            </p>
          </div>

          {/* Tabs + Form */}
          <div className="px-4 pb-6">
            {/* Tabs */}
            <div className="flex bg-gray-100 rounded-full p-1 mb-5">
              <button
                onClick={() => { setTab("bekas"); setResult(null); }}
                className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all ${tab === "bekas" ? "bg-yellow-400 text-gray-900 shadow-sm" : "text-gray-500"}`}
              >
                Mobil bekas
              </button>
              <button
                onClick={() => { setTab("baru"); setResult(null); }}
                className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all ${tab === "baru" ? "bg-yellow-400 text-gray-900 shadow-sm" : "text-gray-500"}`}
              >
                Mobil baru
              </button>
            </div>

            {/* Judul kalkulator */}
            <h2 className="font-bold text-gray-900 text-sm mb-4">Kalkulator kredit mobil {tab === "bekas" ? "bekas" : "baru"}</h2>

            {/* Form stacked */}
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Harga kendaraan"
                value={harga}
                onChange={(e) => setHarga(formatRupiah(e.target.value))}
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Uang Muka"
                value={uangMuka}
                onChange={(e) => setUangMuka(formatRupiah(e.target.value))}
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <div className="relative">
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white cursor-pointer appearance-none"
                >
                  <option value="">Area</option>
                  {areas.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-3 leading-relaxed">
              *Simulasi merupakan kisaran, dan dapat berubah sewaktu-waktu tanpa pemberitahuan
            </p>

            <button
              onClick={handleHitung}
              disabled={!harga || !area}
              className={`w-full mt-4 py-3.5 rounded-xl text-sm font-bold transition-colors ${harga && area ? "bg-yellow-400 text-gray-900" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
            >
              Hitung Simulasi
            </button>

            {/* Result */}
            {result && (
              <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex flex-col gap-3">
                <div className="flex justify-between">
                  <div className="text-center flex-1">
                    <p className="text-xs text-gray-500 mb-1">Estimasi Cicilan/Bulan</p>
                    <p className="text-base font-black text-yellow-600">{result.cicilan}</p>
                  </div>
                  <div className="text-center flex-1 border-x border-yellow-200">
                    <p className="text-xs text-gray-500 mb-1">Tenor</p>
                    <p className="text-base font-black text-gray-800">{result.tenor}</p>
                  </div>
                  <div className="text-center flex-1">
                    <p className="text-xs text-gray-500 mb-1">Uang Muka</p>
                    <p className="text-base font-black text-gray-800">{result.dp}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3 Steps vertikal */}
          <div className="px-4 pb-6 border-t border-gray-100 pt-6">
            <div className="flex flex-col gap-6">
              {[
                { img: "/skredit/credSimSelectionIcon.6639f9a5.svg", title: "Masukkan harga & jumlah dp", desc: "Atur uang muka sesuai kemampuanmu, biar cicilan terasa lebih ringan." },
                { img: "/skredit/credSimCalculatorIcon.5f688e09.svg", title: "Klik hitung simulasi", desc: "Hasil simulasi cicilamu muncul hitungan detik, transparan tanpa biaya tersembunyi." },
                { img: "/skredit/credSimTenorIcon.58ebfbba.svg", title: "Dapatkan penawaran", desc: "Dapatkan penawaran harga & cicilan terbaik dari momobil.id." },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  <img src={step.img} alt={step.title} className="w-20 h-20 object-contain" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="px-4 pb-6 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>

        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden md:block">
        <section className="bg-gradient-to-b from-yellow-100 via-yellow-50 to-gray-50 pt-14 pb-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-5">
              Simulasi Perhitungan Kredit Mobil
            </h1>
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Ngidam mobil baru, bekas, atau listrik? Simulasi-in dulu aja, praktis tanpa repot hitung manual.<br />
              Kamu bisa bandingin harga dan cicilan sesuai kantong, lalu pilih mobil yang cocok. Cobain yuk!
            </p>
          </div>
        </section>

        {/* ── FORM CARD ── */}
        <section className="px-4 pb-14 mt-5">
          <div className="max-w-7xl mx-auto">
            {/* Wrapper dengan tabs overlap ke card */}
            <div className="relative">
              {/* Tabs — posisi absolute di atas card, tengah */}
              <div className="flex justify-center absolute -top-8 left-0 right-0 z-10">
                <div className="flex bg-white rounded-full p-1.5 gap-1 shadow-sm border border-gray-200">
                  <button
                    onClick={() => { setTab("bekas"); setResult(null); }}
                    className={`px-10 py-2 rounded-full text-base font-normal transition-all ${
                      tab === "bekas"
                        ? "bg-yellow-400 text-gray-900 shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Mobil bekas
                  </button>
                  <button
                    onClick={() => { setTab("baru"); setResult(null); }}
                    className={`px-10 py-2 rounded-full text-base font-normal transition-all ${
                      tab === "baru"
                        ? "bg-yellow-400 text-gray-900 shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Mobil baru
                  </button>
                </div>
              </div>

              {/* Form card — dengan padding-top lebih besar agar tabs tidak nutup input */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm pt-14 pb-7 px-7">
                <div className="grid grid-cols-3 gap-4 mb-3">
                  {/* Harga kendaraan */}
                  <input
                    type="text"
                    placeholder="Harga kendaraan"
                    value={harga}
                    onChange={(e) => setHarga(formatRupiah(e.target.value))}
                    className="col-span-1 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  {/* Uang Muka */}
                  <input
                    type="text"
                    placeholder="Uang Muka"
                    value={uangMuka}
                    onChange={(e) => setUangMuka(formatRupiah(e.target.value))}
                    className="col-span-1 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  {/* Area */}
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="col-span-1 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white cursor-pointer"
                  >
                    <option value="">Area</option>
                    {areas.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>

                {/* Disclaimer + button */}
                <div className="flex items-center justify-between mt-4 gap-4">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    *Simulasi merupakan kisaran, dan dapat berubah sewaktu-waktu tanpa pemberitahuan
                  </p>
                  <button
                    onClick={handleHitung}
                    disabled={!harga || !area}
                    className={`flex-shrink-0 px-7 py-3.5 rounded-xl text-sm font-bold transition-colors ${
                      harga && area
                        ? "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Hitung Simulasi
                  </button>
                </div>

                {/* Result */}
                {result && (
                  <div className="mt-5 bg-yellow-50 border border-yellow-200 rounded-xl p-5 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1.5">Estimasi Cicilan/Bulan</p>
                      <p className="text-lg font-black text-yellow-600">{result.cicilan}</p>
                    </div>
                    <div className="text-center border-x border-yellow-200">
                      <p className="text-xs text-gray-500 mb-1.5">Tenor</p>
                      <p className="text-lg font-black text-gray-800">{result.tenor}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1.5">Uang Muka</p>
                      <p className="text-lg font-black text-gray-800">{result.dp}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── 3 STEPS ── */}
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-28 h-28 flex items-center justify-center">
                  <img src="/skredit/credSimSelectionIcon.6639f9a5.svg" alt="Masukkan harga dan dp" className="w-28 h-28 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">Masukkan harga &amp; jumlah dp</h3>
                  <p className="text-base text-black-500 leading-relaxed max-w-[400px] mx-auto">Atur uang muka sesuai kemampuanmu, biar cicilan terasa lebih ringan.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-28 h-28 flex items-center justify-center">
                  <img src="/skredit/credSimCalculatorIcon.5f688e09.svg" alt="Klik hitung simulasi" className="w-28 h-28 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">Klik hitung simulasi</h3>
                  <p className="text-base text-black-500 leading-relaxed max-w-[400px] mx-auto">Hasil simulasi cicilamu muncul hitungan detik, transparan tanpa biaya tersembunyi.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-28 h-28 flex items-center justify-center">
                  <img src="/skredit/credSimTenorIcon.58ebfbba.svg" alt="Dapatkan penawaran" className="w-28 h-28 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-nowrap">Dapatkan penawaran</h3>
                  <p className="text-base text-black-500 leading-relaxed max-w-[400px] mx-auto">Dapatkan penawaran harga &amp; cicilan terbaik dari momobil.id.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        </div> {/* end hidden md:block */}

      </main>
      <Footer />
      <BottomNav />
      <WaChat />
    </>
  );
}
