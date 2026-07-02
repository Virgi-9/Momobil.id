"use client";

import { useState } from "react";

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-gray-100 py-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="text-[12px] font-bold text-gray-800">{title}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5"
          className={`transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && <div className="mt-2">{children}</div>}
    </div>
  );
}

function CheckItem({ label }: { label: string }) {
  const [checked, setChecked] = useState(false);
  return (
    <label className="flex items-center gap-2 py-0.5 cursor-pointer group">
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}
        className="w-3.5 h-3.5 accent-yellow-400 cursor-pointer flex-shrink-0" />
      <span className="text-[11px] text-gray-600 group-hover:text-gray-900">{label}</span>
    </label>
  );
}

export default function TestDriveFilter() {
  return (
    <aside className="w-[200px] flex-shrink-0">
      <div className="bg-white rounded-xl border border-gray-100 px-4 py-3 sticky top-[100px]">

        {/* Merek */}
        <FilterSection title="Merek">
          <div className="flex flex-col gap-0.5">
            {["TOYOTA (5)", "CHERY (5)", "DAIHATSU (4)", "HONDA (3)", "SUZUKI (2)", "BYD (2)", "WULING (3)"].map(
              (l) => <CheckItem key={l} label={l} />
            )}
          </div>
        </FilterSection>

        {/* Harga */}
        <FilterSection title="Harga">
          <div className="flex flex-col gap-0.5">
            {[
              "Dibawah 100 Juta",
              "100 - 200 Juta",
              "200 - 300 Juta",
              "300 - 400 Juta",
              "400 - 600 Juta",
              "Diatas 600 Juta",
            ].map((l) => <CheckItem key={l} label={l} />)}
          </div>
        </FilterSection>

        {/* Tipe Bahan Bakar */}
        <FilterSection title="Tipe bahan bakar">
          <div className="flex flex-col gap-0.5">
            {["Bensin (1)", "Solar (2)", "Listrik (3)", "Hybrid (4)"].map(
              (l) => <CheckItem key={l} label={l} />
            )}
          </div>
        </FilterSection>

        {/* Transmisi */}
        <FilterSection title="Transmisi">
          <div className="flex flex-col gap-0.5">
            {["Otomatis", "Manual"].map((l) => <CheckItem key={l} label={l} />)}
          </div>
        </FilterSection>

        {/* Kapasitas Mesin */}
        <FilterSection title="Kapasitas mesin">
          <div className="flex flex-col gap-0.5">
            {["1.000 cc - 1.200 cc (1)", "1.201 cc - 1.500 cc (1)", "1.501 cc - 2.000 cc (1)", "2.001 cc - 3.000 cc (1)", "Diatas 3.000 cc (1)"].map(
              (l) => <CheckItem key={l} label={l} />
            )}
          </div>
        </FilterSection>

        {/* Tipe Bodi */}
        <FilterSection title="Tipe bodi">
          <div className="flex flex-col gap-0.5">
            {["City Car (1)", "Hatchback (1)", "Jeep (1)", "MPV (1)", "SUV (1)", "Sedan (1)", "Van (1)", "Pick Up (1)"].map(
              (l) => <CheckItem key={l} label={l} />
            )}
          </div>
        </FilterSection>

        {/* Reset */}
        <div className="pt-3">
          <button className="w-full border border-gray-300 text-gray-600 text-[11px] font-semibold py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Reset Filter
          </button>
        </div>
      </div>
    </aside>
  );
}
