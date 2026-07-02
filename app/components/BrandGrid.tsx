import Image from "next/image";
import Link from "next/link";

const brands = [
  { id: "wuling",     name: "WULING"     },
  { id: "chery",      name: "CHERY"      },
  { id: "jaecoo",     name: "JAECOO"     },
  { id: "byd",        name: "BYD"        },
  { id: "suzuki",     name: "suzuki"     },
  { id: "toyota",     name: "Toyota"     },
  { id: "mitsubishi", name: "Mitsubishi" },
  { id: "daihatsu",   name: "Daihatsu"   },
  { id: "honda",      name: "Honda"      },
  { id: "geely",      name: "GEELY"      },
  { id: "xpeng",      name: "XPENG"      },
  { id: "hyundai",    name: "Hyundai"    },
  { id: "changan",    name: "CHANGAN"    },
  { id: "maxus",      name: "MAXUS"      },
];

export default function BrandGrid() {
  return (
    <section className="bg-white border-b border-gray-100 py-5">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[14px] font-bold text-gray-900">Merek mobil unggulan</h2>
          <Link
            href="/mobil-baru/merek"
            className="text-xs font-semibold text-gray-500 hover:text-yellow-500 transition-colors"
          >
            Lihat Semua
          </Link>
        </div>

        {/* 7 columns × 2 rows */}
        <div className="grid grid-cols-7 gap-2">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/mobil-baru/${brand.id}`}
              className="flex flex-col items-center gap-1.5 group"
            >
              {/* Box — fixed height, logo centered */}
              <div className="w-full h-[80px] rounded-xl border border-gray-200 hover:border-yellow-300 hover:shadow-sm transition-all bg-white flex items-center justify-center px-3 py-2">
                <div className="relative w-full h-full">
                  <Image
                    src={`/logobrand/${brand.id}.webp`}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1280px) 14vw, 120px"
                  />
                </div>
              </div>
              {/* Name below the box */}
              <span className="text-[10px] text-gray-500 font-medium text-center leading-tight group-hover:text-gray-800 transition-colors">
                {brand.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
