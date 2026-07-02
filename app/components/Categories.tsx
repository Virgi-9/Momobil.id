import Link from "next/link";

export default function Categories() {
  return (
    /* Dealer strip — matches the screenshot exactly */
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between py-3 px-4 bg-orange-50 rounded-lg my-3">
          {/* Left */}
          <div className="flex items-center gap-3">
            {/* Shield/dealer icon */}
            <div className="w-9 h-9 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800 text-sm">
                Bergabung jadi Dealer Adira
              </span>
              <span className="bg-yellow-400 text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Baru
              </span>
            </div>
          </div>

          {/* Right button */}
          <Link
            href="#"
            className="flex-shrink-0 border border-gray-800 text-gray-800 text-xs font-semibold px-4 py-2 rounded hover:bg-gray-100 transition-colors"
          >
            Cek keuntungannya
          </Link>
        </div>
      </div>
    </section>
  );
}
