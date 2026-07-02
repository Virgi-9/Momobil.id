"use client";

import { useState } from "react";
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
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="bg-white border-b border-gray-100 py-5">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[14px] font-bold text-gray-900">Merek mobil unggulan</h2>
            <button
              onClick={() => setShowModal(true)}
              className="text-xs font-semibold text-gray-500 hover:text-yellow-500 transition-colors"
            >
              Lihat Semua
            </button>
          </div>

          {/* ── MOBILE: horizontal scroll 3 visible ── */}
          <div className="flex md:hidden gap-3 overflow-x-auto scrollbar-hide pb-1">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={`/mobil-baru/${brand.id}`}
                className="flex flex-col items-center gap-1.5 flex-shrink-0"
                style={{ width: "80px" }}
              >
                <div className="w-20 h-16 rounded-xl border border-gray-200 bg-white flex items-center justify-center px-2 py-2">
                  <div className="relative w-full h-full">
                    <Image src={`/logobrand/${brand.id}.webp`} alt={brand.name} fill className="object-contain" sizes="80px" />
                  </div>
                </div>
                <span className="text-[10px] text-gray-500 font-medium text-center leading-tight">{brand.name}</span>
              </Link>
            ))}
          </div>

          {/* ── DESKTOP: 7 col grid ── */}
          <div className="hidden md:grid grid-cols-7 gap-2">
            {brands.map((brand) => (
              <Link key={brand.id} href={`/mobil-baru/${brand.id}`} className="flex flex-col items-center gap-1.5 group">
                <div className="w-full h-[80px] rounded-xl border border-gray-200 hover:border-yellow-300 hover:shadow-sm transition-all bg-white flex items-center justify-center px-3 py-2">
                  <div className="relative w-full h-full">
                    <Image src={`/logobrand/${brand.id}.webp`} alt={brand.name} fill className="object-contain" sizes="120px" />
                  </div>
                </div>
                <span className="text-[10px] text-gray-500 font-medium text-center leading-tight group-hover:text-gray-800 transition-colors">{brand.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODAL: semua merek ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />

          {/* Sheet */}
          <div className="relative bg-white w-full md:max-w-md rounded-t-3xl md:rounded-2xl max-h-[85vh] overflow-y-auto z-10">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-900 text-base">Merek unggulan</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-700">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3 p-4">
              {brands.map((brand) => (
                <Link
                  key={brand.id}
                  href={`/mobil-baru/${brand.id}`}
                  onClick={() => setShowModal(false)}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-full h-20 rounded-xl border border-gray-200 bg-white flex items-center justify-center px-3 py-2">
                    <div className="relative w-full h-full">
                      <Image src={`/logobrand/${brand.id}.webp`} alt={brand.name} fill className="object-contain" sizes="100px" />
                    </div>
                  </div>
                  <span className="text-[11px] text-gray-500 font-medium text-center">{brand.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
