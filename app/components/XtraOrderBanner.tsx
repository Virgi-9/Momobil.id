export default function XtraOrderBanner() {
  return (
    <section className="bg-white py-4 px-4 lg:px-6">
      <div className="max-w-screen-xl mx-auto">
        <div
          className="flex items-center justify-between rounded-xl px-5 py-4"
          style={{ backgroundColor: "#fffbe6", border: "1px solid #ffe58f" }}
        >
          {/* Left: icon + text */}
          <div className="flex items-center gap-4">
            {/* Car + sparkle icon */}
            <div className="flex-shrink-0 relative">
              <svg
                width="52"
                height="40"
                viewBox="0 0 64 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Sparkles */}
                <text x="0" y="14" fontSize="13">✨</text>
                <text x="44" y="12" fontSize="11">✨</text>
                {/* Car body */}
                <rect x="6" y="24" width="50" height="16" rx="4" fill="#facc15" />
                {/* Roof */}
                <path d="M16 24 L22 14 L44 14 L50 24Z" fill="#fde047" />
                {/* Windows */}
                <rect x="23" y="15" width="9" height="8" rx="1" fill="#bae6fd" />
                <rect x="34" y="15" width="9" height="8" rx="1" fill="#bae6fd" />
                {/* Wheels */}
                <circle cx="18" cy="40" r="6" fill="#1f2937" />
                <circle cx="18" cy="40" r="3" fill="#9ca3af" />
                <circle cx="46" cy="40" r="6" fill="#1f2937" />
                <circle cx="46" cy="40" r="3" fill="#9ca3af" />
              </svg>
            </div>

            <div>
              <p className="font-bold text-gray-800 text-sm">
                Belum menemukan mobil pilihanmu?
              </p>
              <p className="text-gray-500 text-xs mt-0.5">
                Yuk ajukan lewat form pengajuan
              </p>
            </div>
          </div>

          {/* Right: button */}
          <button className="flex-shrink-0 bg-yellow-400 hover:bg-yellow-500 transition-colors text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-lg">
            Form Pengajuan
          </button>
        </div>
      </div>
    </section>
  );
}
