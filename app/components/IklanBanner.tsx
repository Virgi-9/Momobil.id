import Image from "next/image";
import Link from "next/link";

export default function IklanBanner() {
  return (
    <div className="relative bg-yellow-400 rounded-2xl overflow-hidden px-4 pt-4 pb-0">
      {/* Background watermark logo */}
      <div className="absolute left-0 top-0 h-full w-1/2 opacity-10 pointer-events-none select-none">
        <Image
          src="/iklan/mmbDealerIllustration.efc20ef9.svg"
          alt=""
          fill
          className="object-contain object-left"
        />
      </div>

      {/* Top row: logo + car image */}
      <div className="relative flex items-start justify-between">
        {/* Logo */}
        <div>
          <p className="text-gray-900 font-black text-lg leading-none">momobil.id</p>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-[9px] text-gray-700">member of</span>
            <Image
              src="/logoweb/LogoAdira.c97902f8.svg"
              alt="Adira Finance"
              width={48}
              height={14}
              className="object-contain"
            />
          </div>
        </div>

        {/* Car asset — pojok kanan atas */}
        <div className="relative w-36 h-20 -mt-1 -mr-2 flex-shrink-0">
          <Image
            src="/iklan/sampleCarAsset.515167ac.svg"
            alt="Cars"
            fill
            className="object-contain object-right"
          />
        </div>
      </div>

      {/* Text */}
      <div className="relative mt-2 mb-3">
        <p className="text-gray-900 font-black text-sm leading-snug">Iklankan mobilmu, gratis!</p>
        <p className="text-gray-800 text-sm leading-snug mt-0.5">
          Iklankan mobilmu di momobil. Makin banyak yang liat, makin cepat laku!
        </p>
      </div>

      {/* Button */}
      <div className="relative pb-4">
        <Link
          href="#"
          className="block w-full text-center bg-yellow-300 border border-yellow-600/30 text-gray-900 font-bold text-sm py-3 rounded-xl hover:bg-yellow-200 transition-colors"
        >
          Iklankan sekarang
        </Link>
      </div>
    </div>
  );
}
