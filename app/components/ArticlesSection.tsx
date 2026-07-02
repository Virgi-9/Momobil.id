import Image from "next/image";
import Link from "next/link";
import { articles } from "../data/cars";

export default function ArticlesSection() {
  return (
    <section className="py-6 bg-white border-b border-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[15px] font-bold text-gray-900">Artikel</h2>
          <Link
            href="/news"
            className="text-xs font-semibold text-gray-500 hover:text-yellow-500 transition-colors"
          >
            Lihat Semua
          </Link>
        </div>

        {/* Grid — 4 columns like screenshot */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/berita/${article.id}`}
              className="group flex flex-col bg-white overflow-hidden hover:shadow-sm transition-shadow"
            >
              {/* Image */}
              <div className="relative w-full bg-gray-100 overflow-hidden rounded-sm" style={{ aspectRatio: "16/10" }}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* News badge — yellow pill on bottom-left of image */}
                <span className="absolute bottom-2 left-2 bg-yellow-400 text-gray-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Text */}
              <div className="pt-2.5 flex flex-col gap-1">
                <h3 className="text-[13px] font-bold text-gray-900 leading-snug line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-[11px] text-gray-400">{article.date}</p>
                <p className="text-[11px] text-gray-500 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
