import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      {/* Main footer content */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Col 1 — Logo + Head office */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div className="mb-1">
              <img
                src="/logoweb/momobilIcon_hd.bf14c0ed.svg"
                alt="momobil.id"
                className="h-7 w-auto"
              />
            </div>

            {/* Head office label */}
            <p className="text-xs font-medium text-gray-700 mt-4 mb-1">Head office</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Millennium Centennial Center, Jl. Jenderal Sudirman No.Kav.25,
              RT.12/RW.1, Kuningan, Karet Kuningan, Kecamatan Setiabudi, Kota
              Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920
            </p>
          </div>

          {/* Col 2 — Links */}
          <div className="md:col-span-1">
            <ul className="flex flex-col gap-3 mt-1">
              {[
                { label: "Pusat Bantuan", href: "/pusat-bantuan" },
                { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
                { label: "Tata Cara Pembayaran", href: "/tata-cara-pembayaran" },
                { label: "News & Article", href: "/news" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-yellow-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Hubungi Kami */}
          <div className="md:col-span-1">
            <p className="text-sm font-medium text-gray-800 mb-3">Hubungi Kami</p>
            <ul className="flex flex-col gap-2.5">
              {/* Email */}
              <li>
                <a
                  href="mailto:halo@momobil.id"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-yellow-500 transition-colors"
                >
                  <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  halo@momobil.id
                </a>
              </li>
              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/6281288527009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                >
                  <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                  </span>
                  Chat With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Social icons */}
          <div className="md:col-span-1 flex md:justify-end">
            <div className="flex items-start gap-3 mt-1">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/momobilid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-400 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@momobilid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-yellow-500 hover:border-yellow-400 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/momobilid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-pink-600 hover:border-pink-400 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@momobil.id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-600 transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            {/* Left — ecosystem logos */}
            <div className="flex items-center gap-4">
              <img src="/logoweb/Momotor_Icon.0dc7ab00.svg" alt="momotor.id" className="h-6 w-auto" />
              <div className="w-px h-4 bg-gray-300" />
              <img src="/logoweb/Moservice_Icon.2b48bc33.svg" alt="moservice.id" className="h-6 w-auto" />
            </div>

            {/* Center — OJK text */}
            <p className="text-xs text-gray-500 text-center">
              Adira Finance Berizin dan Diawasi oleh Otoritas Jasa Keuangan
            </p>

            {/* Right — copyright */}
            <p className="text-xs text-gray-500 flex-shrink-0">
              © 2026 momobil.id
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
