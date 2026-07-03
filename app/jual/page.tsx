"use client";

import { useState, Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import AuthModal from "../components/AuthModal";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import WaChat from "../components/WaChat";
import Footer from "../components/Footer";

const CAR_BRANDS = ["Mitsubishi", "Toyota", "Honda", "Daihatsu", "Suzuki", "Hyundai", "Kia", "BYD", "Chery", "Geely"];
const CAR_MODELS: Record<string, string[]> = {
  Mitsubishi: ["Xpander", "Outlander", "Pajero", "Mirage"],
  Toyota: ["Avanza", "Innova", "Fortuner", "Yaris"],
  Honda: ["Brio", "City", "Civic", "HR-V"],
  Daihatsu: ["Ayla", "Sigra", "Terios", "Sirion"],
  Suzuki: ["Ertiga", "Celerio", "Swift", "Vitara"],
};

type CarCondition = {
  brand: string;
  model: string;
  year: string;
  transmission: string;
  fuelType: string;
  bodyType: string;
  mileage: string;
  description: string;
  price: string;
  photos: File[];
  location: string;
  phone: string;
  name: string;
};

function JualContent() {
  const router = useRouter();
  const { user, login } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  
  const [formData, setFormData] = useState<CarCondition>({
    brand: "",
    model: "",
    year: new Date().getFullYear().toString(),
    transmission: "",
    fuelType: "",
    bodyType: "",
    mileage: "",
    description: "",
    price: "",
    photos: [],
    location: "",
    phone: "",
    name: "",
  });

  const models = CAR_MODELS[formData.brand] || [];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => (currentYear - i).toString());

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    // Only show modal if hydrated AND no user
    if (isHydrated && !user) {
      setShowAuthModal(true);
    } else {
      // If user exists or not hydrated yet, close modal
      setShowAuthModal(false);
    }
  }, [isHydrated, user]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, ...files].slice(0, 20)
    }));
  };

  const removePhoto = (index: number) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = () => {
    // Validate form
    if (!formData.brand || !formData.model || !formData.price || formData.photos.length === 0) {
      alert("Mohon lengkapi semua field yang diperlukan");
      return;
    }
    alert("Form submitted! Data disimpan ke localStorage untuk sekarang.");
    // Save to localStorage
    localStorage.setItem("mobil_jual", JSON.stringify(formData));
  };

  return (
    <>
      <Navbar />

      {showAuthModal && (
        <AuthModal 
          initialMode="masuk" 
          onClose={() => setShowAuthModal(false)}
          onLogin={login}
        />
      )}

      {/* Desktop */}
      <main className="hidden md:block bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Jual Mobil</h1>
            <p className="text-gray-600">Lengkapi informasi mobil anda untuk dijual</p>
          </div>

          <form className="space-y-8">
            {/* FOTO SECTION */}
            <div className="border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Foto Mobil</h2>
              <p className="text-sm text-gray-600 mb-4">Upload hingga 20 foto (minimal 3 foto diperlukan)</p>
              
              {/* Photo Grid */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="aspect-square">
                    {i < formData.photos.length ? (
                      <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden group">
                        <img 
                          src={URL.createObjectURL(formData.photos[i])} 
                          alt={`Foto ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(i)}
                          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <label className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                        <input 
                          type="file" 
                          multiple 
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* KONDISI SECTION */}
            <div className="border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Kondisi Mobil</h2>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Brand */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Merek *</label>
                  <select 
                    value={formData.brand}
                    onChange={(e) => setFormData(prev => ({ ...prev, brand: e.target.value, model: "" }))}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Pilih Merek</option>
                    {CAR_BRANDS.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                {/* Model */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Model *</label>
                  <select 
                    value={formData.model}
                    onChange={(e) => setFormData(prev => ({ ...prev, model: e.target.value }))}
                    disabled={!formData.brand}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100 disabled:text-gray-400"
                  >
                    <option value="">Pilih Model</option>
                    {models.map(model => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>

                {/* Year */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tahun Produksi</label>
                  <select 
                    value={formData.year}
                    onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                {/* Transmission */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Transmisi</label>
                  <select 
                    value={formData.transmission}
                    onChange={(e) => setFormData(prev => ({ ...prev, transmission: e.target.value }))}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Pilih Transmisi</option>
                    <option value="Manual">Manual</option>
                    <option value="Automatic">Automatic</option>
                  </select>
                </div>

                {/* Fuel Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Jenis Bahan Bakar</label>
                  <select 
                    value={formData.fuelType}
                    onChange={(e) => setFormData(prev => ({ ...prev, fuelType: e.target.value }))}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Pilih Bahan Bakar</option>
                    <option value="Bensin">Bensin</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Elektrik">Elektrik</option>
                  </select>
                </div>

                {/* Body Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Jenis Bodi</label>
                  <select 
                    value={formData.bodyType}
                    onChange={(e) => setFormData(prev => ({ ...prev, bodyType: e.target.value }))}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Pilih Jenis Bodi</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="MPV">MPV</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Pickup">Pickup</option>
                  </select>
                </div>

                {/* Mileage */}
                <div className="col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Kilometer (km)</label>
                  <input 
                    type="number"
                    value={formData.mileage}
                    onChange={(e) => setFormData(prev => ({ ...prev, mileage: e.target.value }))}
                    placeholder="Contoh: 50000"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                {/* Price */}
                <div className="col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Harga (Rp) *</label>
                  <input 
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                    placeholder="Contoh: 150000000"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
            </div>

            {/* DESKRIPSI SECTION */}
            <div className="border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Deskripsi</h2>
              <textarea 
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Deskripsikan kondisi mobil, kelebihan, dan fitur-fitur khusus..."
                rows={6}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              />
              <p className="text-xs text-gray-400 mt-2">{formData.description.length}/1000</p>
            </div>

            {/* INFO PENJUAL SECTION */}
            <div className="border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Informasi Penjual</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Nama anda"
                    defaultValue={user?.name || ""}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nomor Telepon</label>
                  <input 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Contoh: +62812345678"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Lokasi</label>
                  <input 
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="Kota/Kab, Provinsi"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 justify-end pb-8">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Publikasikan Iklan
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Mobile */}
      <main className="md:hidden bg-white min-h-screen pb-24">
        <div className="max-w-lg mx-auto">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 sticky top-0 bg-white z-40">
            <button 
              onClick={() => router.back()}
              className="text-gray-700"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <p className="text-base font-bold text-gray-900">Jual</p>
            <div className="w-6" />
          </div>

          <div className="p-4 space-y-6">
            {/* FOTO - Mobile Version */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Foto Mobil</h3>
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="aspect-square">
                    {i < formData.photos.length ? (
                      <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden group">
                        <img 
                          src={URL.createObjectURL(formData.photos[i])} 
                          alt={`Foto ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(i)}
                          className="absolute inset-0 bg-black/50 flex items-center justify-center"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <label className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                        <input 
                          type="file" 
                          multiple 
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* KONDISI - Mobile Version */}
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900">Kondisi Mobil</h3>
              
              <select 
                value={formData.brand}
                onChange={(e) => setFormData(prev => ({ ...prev, brand: e.target.value, model: "" }))}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm"
              >
                <option value="">Pilih Merek</option>
                {CAR_BRANDS.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>

              <select 
                value={formData.model}
                onChange={(e) => setFormData(prev => ({ ...prev, model: e.target.value }))}
                disabled={!formData.brand}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm disabled:bg-gray-100"
              >
                <option value="">Pilih Model</option>
                {models.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>

              <select 
                value={formData.year}
                onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>

              <select 
                value={formData.transmission}
                onChange={(e) => setFormData(prev => ({ ...prev, transmission: e.target.value }))}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm"
              >
                <option value="">Transmisi</option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
              </select>

              <select 
                value={formData.fuelType}
                onChange={(e) => setFormData(prev => ({ ...prev, fuelType: e.target.value }))}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm"
              >
                <option value="">Bahan Bakar</option>
                <option value="Bensin">Bensin</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Elektrik">Elektrik</option>
              </select>

              <select 
                value={formData.bodyType}
                onChange={(e) => setFormData(prev => ({ ...prev, bodyType: e.target.value }))}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm"
              >
                <option value="">Jenis Bodi</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="MPV">MPV</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Pickup">Pickup</option>
              </select>

              <input 
                type="number"
                value={formData.mileage}
                onChange={(e) => setFormData(prev => ({ ...prev, mileage: e.target.value }))}
                placeholder="Kilometer (km)"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm"
              />

              <input 
                type="number"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                placeholder="Harga (Rp)"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm"
              />
            </div>

            {/* DESKRIPSI - Mobile */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Deskripsi</h3>
              <textarea 
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Deskripsikan kondisi mobil..."
                rows={4}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm resize-none"
              />
            </div>

            {/* INFO PENJUAL - Mobile */}
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900">Informasi Penjual</h3>
              <input 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Nama lengkap"
                defaultValue={user?.name || ""}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm"
              />
              <input 
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="Nomor telepon"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm"
              />
              <input 
                type="text"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                placeholder="Lokasi"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm"
              />
            </div>

            {/* BUTTONS - Mobile */}
            <div className="flex gap-2 pt-4">
              <button
                type="button"
                onClick={() => router.back()}
                className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg text-sm"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="flex-1 px-4 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg text-sm"
              >
                Publikasikan
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNav />
      <WaChat />
    </>
  );
}

export default function JualPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JualContent />
    </Suspense>
  );
}
