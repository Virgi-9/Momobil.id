"use client";

import { useState } from "react";

export default function RequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", merek: "", budget: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-10 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-red-600 to-red-500 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
          {/* Icon + Text */}
          <div className="text-white flex-1">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                <path d="M12 10v6M9 13l3-3 3 3" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Belum menemukan mobil pilihanmu?
            </h2>
            <p className="text-red-100 text-sm sm:text-base">
              Yuk ajukan lewat form pengajuan dan kami akan bantu carikan mobil impianmu.
            </p>
          </div>

          {/* Form */}
          <div className="w-full md:w-auto md:min-w-[340px] bg-white rounded-2xl p-5 shadow-sm">
            {submitted ? (
              <div className="text-center py-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-800">Pengajuan Terkirim!</p>
                <p className="text-sm text-gray-500 mt-1">Tim kami akan segera menghubungi Anda.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <h3 className="font-semibold text-gray-800 mb-4">Form Pengajuan</h3>
                <input
                  required
                  type="text"
                  placeholder="Nama lengkap"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  required
                  type="tel"
                  placeholder="Nomor telepon / WhatsApp"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="text"
                  placeholder="Merek & tipe yang dicari"
                  value={form.merek}
                  onChange={(e) => setForm({ ...form, merek: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="text"
                  placeholder="Budget (contoh: Rp 150.000.000)"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-semibold py-2.5 rounded-lg hover:bg-red-700 transition-colors text-sm"
                >
                  Kirim Pengajuan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
