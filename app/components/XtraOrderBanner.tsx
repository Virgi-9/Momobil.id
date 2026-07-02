export default function XtraOrderBanner() {
  return (
    <section className="bg-white py-4 px-4 lg:px-6">
      <div className="max-w-screen-xl mx-auto">

        {/* ── MOBILE ── */}
        <div className="md:hidden bg-yellow-50 rounded-2xl p-4 border border-yellow-100">
          <div className="flex items-center gap-3 mb-3">
            <img src="/logoweb/xtraOrderCarIcon.d22fb37c.svg" alt="" className="w-12 h-12 object-contain" />
            <div>
              <p className="font-bold text-gray-900 text-sm leading-tight">Belum menemukan mobil pilihanmu?</p>
              <p className="text-gray-500 text-sm mt-0.5">Yuk ajukan lewat form pengajuan</p>
            </div>
          </div>
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 transition-colors text-gray-900 font-bold text-sm py-3.5 rounded-xl">
            Form Pengajuan
          </button>
        </div>

        {/* ── DESKTOP ── */}
        <div
          className="hidden md:flex items-center justify-between rounded-xl px-5 py-4"
          style={{ backgroundColor: "#fffbe6", border: "1px solid #ffe58f" }}
        >
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 relative">
              <img src="/logoweb/xtraOrderCarIcon.d22fb37c.svg" alt="" className="w-14 h-10 object-contain" />
            </div>
            <div>
              <p className="font-bold text-gray-800 text-sm">Belum menemukan mobil pilihanmu?</p>
              <p className="text-gray-500 text-xs mt-0.5">Yuk ajukan lewat form pengajuan</p>
            </div>
          </div>
          <button className="flex-shrink-0 bg-yellow-400 hover:bg-yellow-500 transition-colors text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-lg">
            Form Pengajuan
          </button>
        </div>

      </div>
    </section>
  );
}
