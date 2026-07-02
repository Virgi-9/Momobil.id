"use client";

import { useState } from "react";

const priceRanges = [
  { label: "Dibawah 100 Juta",  value: "0-100"   },
  { label: "100 - 200 Juta",    value: "100-200"  },
  { label: "200 - 300 Juta",    value: "200-300"  },
  { label: "300 - 400 Juta",    value: "300-400"  },
  { label: "400 - 600 Juta",    value: "400-600"  },
  { label: "Diatas 600 Juta",   value: "600+"     },
];

export default function PriceFilter() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="bg-white border-b border-gray-100 py-4">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        <p className="text-[13px] font-semibold text-gray-800 mb-3">
          Harga jual mobil baru
        </p>
        <div className="flex flex-wrap gap-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setActive(active === range.value ? null : range.value)}
              className={`px-4 py-2 rounded-lg border text-[12px] font-medium transition-all ${
                active === range.value
                  ? "border-yellow-400 bg-yellow-50 text-yellow-700"
                  : "border-gray-200 bg-white text-gray-700 hover:border-yellow-300 hover:bg-yellow-50"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
