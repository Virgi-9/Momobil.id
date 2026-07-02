"use client";

import { useState } from "react";

type Section = {
  title: string;
  children: React.ReactNode;
};

function FilterSection({ title, children }: Section) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-gray-100 py-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="text-[12px] font-bold text-gray-800">{title}</span>
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="none"
          stroke="#9ca3af" strokeWidth="2.5"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && <div className="mt-2">{children}</div>}
    </div>
  );
}

function CheckItem({ label, count }: { label: string; count?: number }) {
  const [checked, setChecked] = useState(false);
  return (
    <label className="flex items-center gap-2 py-0.5 cursor-pointer group">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="w-3.5 h-3.5 accent-yellow-400 cursor-pointer"
      />
      <span className="text-[11px] text-gray-600 group-hover:text-gray-900 flex-1">{label}</span>
      {count !== undefined && (
        <span className="text-[10px] text-gray-400">({count})</span>
      )}
    </label>
  );
}

function RadioItem({ label, name }: { label: string; name: string }) {
  return (
    <label className="flex items-center gap-2 py-0.5 cursor-pointer group">
      <input type="radio" name={name} className="w-3.5 h-3.5 accent-yellow-400 cursor-pointer" />
      <span className="text-[11px] text-gray-600 group-hover:text-gray-900">{label}</span>
    </label>
  );
}

export default function UsedCarFilter() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <aside className="w-[220px] flex-shrink-0">
      <div className="bg-white rounded-xl border border-gray-100 px-4 py-3 sticky top-[100px]">

        {/* Lokasi */}
        <FilterSection title="Lokasi">
          <div className="flex flex-col gap-0.5">
            <RadioItem label="Indonesia" name="lokasi" />
            <div className="ml-4 flex flex-col gap-0.5">
              <RadioItem label="Kalimantan Barat" name="lokasi" />
              <div className="ml-4 flex flex-col gap-0.5">
                <RadioItem label="Kota Pontianak (514)" name="lokasi" />
                <RadioItem label="Kab. Pontianak (77)" name="lokasi" />
              </div>
            </div>
          </div>
        </FilterSection>

        {/* Kondisi */}
        <FilterSection title="Kondisi">
          <div className="flex flex-col gap-0.5">
            <RadioItem label="Bekas (0)" name="kondisi" />
          </div>
        </FilterSection>

        {/* Harga */}
        <FilterSection title="Harga">
          <div className="flex flex-col gap-2 mt-1">
            {[
              "Di bawah 100 Juta (12)",
              "100 - 200 Juta (264)",
              "200 - 300 Juta (143)",
              "300 - 400 Juta (42)",
              "400 - 600 Juta (18)",
              "Di atas 600 Juta (4)",
            ].map((label) => <CheckItem key={label} label={label} />)}
            <div className="flex gap-1 mt-1">
              <input
                type="text"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full border border-gray-200 rounded px-2 py-1 text-[11px] focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full border border-gray-200 rounded px-2 py-1 text-[11px] focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
            </div>
            <p className="text-[10px] text-gray-400 text-right">Rp 2.331.900</p>
          </div>
        </FilterSection>

        {/* Merek */}
        <FilterSection title="Merek">
          <div className="flex flex-col gap-0.5">
            {[["TOYOTA", 354], ["DAIHATSU", 231], ["HONDA", 28], ["SUZUKI", 26], ["MITSUBISHI", 6]].map(
              ([label, count]) => <CheckItem key={label as string} label={label as string} count={count as number} />
            )}
          </div>
        </FilterSection>

        {/* Tahun Produksi */}
        <FilterSection title="Tahun produksi">
          <div className="flex gap-1 mt-1">
            <select className="w-full border border-gray-200 rounded px-2 py-1 text-[11px] focus:outline-none bg-white">
              <option>2015</option>
              <option>2016</option>
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
            </select>
            <select className="w-full border border-gray-200 rounded px-2 py-1 text-[11px] focus:outline-none bg-white">
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
        </FilterSection>

        {/* Kilometer */}
        <FilterSection title="Kilometer">
          <div className="flex flex-col gap-0.5">
            {[
              "0 - 10.000 km (31)",
              "10.000 - 20.000 km (11)",
              "20.000 - 30.000 km (24)",
              "30.000 - 40.000 km (29)",
              "40.000 - 50.000 km (38)",
              "50.000 - 60.000 km (32)",
              "60.000 - 80.000 km (55)",
              "80.000 - 100.000 km (67)",
              "Di atas 100.000 km (159)",
            ].map((label) => <CheckItem key={label} label={label} />)}
          </div>
        </FilterSection>

        {/* Tipe Bahan Bakar */}
        <FilterSection title="Tipe bahan bakar">
          <div className="flex flex-col gap-0.5">
            {[["Bensin (1)", undefined], ["Solar (2)", undefined], ["Listrik (3)", undefined]].map(
              ([label]) => <CheckItem key={label as string} label={label as string} />
            )}
          </div>
        </FilterSection>

        {/* Transmisi */}
        <FilterSection title="Transmisi">
          <div className="flex flex-col gap-0.5">
            {["Otomatis", "Manual"].map((label) => (
              <CheckItem key={label} label={label} />
            ))}
          </div>
        </FilterSection>

        {/* Kapasitas Mesin */}
        <FilterSection title="Kapasitas mesin">
          <div className="flex flex-col gap-0.5">
            {[
              "1.000 cc (12)",
              "1.200 cc (87)",
              "1.300 cc (102)",
              "1.500 cc (134)",
              "1.800 cc (29)",
              "2.000 cc (38)",
              "2.400 cc (14)",
              "2.500 cc + (9)",
            ].map((label) => <CheckItem key={label} label={label} />)}
          </div>
        </FilterSection>

        {/* Tipe Bodi */}
        <FilterSection title="Tipe bodi">
          <div className="flex flex-col gap-0.5">
            {[
              "City Car (15)",
              "Hatchback (28)",
              "MPV (514)",
              "Sedan (7)",
              "SUV (49)",
              "Pickup (12)",
              "Van (8)",
            ].map((label) => <CheckItem key={label} label={label} />)}
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
