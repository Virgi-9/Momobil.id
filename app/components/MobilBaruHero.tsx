import Image from "next/image";

export default function MobilBaruHero() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-3">
      <div
        className="relative w-full rounded-xl overflow-hidden"
        style={{ aspectRatio: "1921/487" }}
      >
        <Image
          src="/banner/imwsfqrpe5dy2halww7v.webp"
          alt="Pilihan Mobil Baru"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
      </div>
    </div>
  );
}
