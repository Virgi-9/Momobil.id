"use client";

import { useState, Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import AuthModal from "../components/AuthModal";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import WaChat from "../components/WaChat";
import Footer from "../components/Footer";

function IklanSayaContent() {
  const router = useRouter();
  const { user, login } = useAuth();
  const [iklanList, setIklanList] = useState<any[]>([]);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Check hydration - tunggu sampai component fully mounted dan user state ready
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Show auth modal only jika sudah hydrated dan tidak ada user
  useEffect(() => {
    if (isHydrated && !user) {
      setShowAuthModal(true);
    }
  }, [isHydrated, user]);

  return (
    <>
      <Navbar />

      {/* Auth Modal - muncul kalo belum login */}
      {showAuthModal && (
        <AuthModal 
          initialMode="masuk" 
          onClose={() => setShowAuthModal(false)}
          onLogin={login}
        />
      )}

      {/* Mobile Header */}
      <div className="md:hidden bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-3">
          <button 
            onClick={() => router.back()}
            className="text-gray-700 hover:text-gray-900"
            aria-label="Kembali"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <p className="text-base font-bold text-gray-900">Iklan saya</p>
          <div className="w-6" />
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block bg-white border-b border-gray-200">
        <div className="max-w-screen-lg mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Iklan saya</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="bg-gray-50 min-h-screen pb-24 md:pb-8">
        <div className="max-w-screen-lg mx-auto">
          {iklanList.length === 0 ? (
            // Empty State
            <div className="md:hidden flex flex-col items-center justify-center px-4 py-20">
              <div className="relative mb-6">
                {/* Car Icon dengan decorative stars */}
                <div className="flex justify-center items-center mb-8">
                  {/* Left star */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="absolute left-0 top-0 text-orange-400">
                    <path d="M12 2l3.09 6.26L22 9.27l-7 6.87 1.18 6.88L12 17.77l-4.18 2.25 1.18-6.88-7-6.87 6.91-1.01L12 2z" fill="currentColor" />
                  </svg>

                  {/* Main car icon */}
                  <div className="mx-6">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="mx-auto mb-2">
                      {/* Car body - yellow */}
                      <rect x="15" y="45" width="70" height="35" rx="5" fill="#FFD700" stroke="#000" strokeWidth="2.5" />
                      
                      {/* Car top cabin */}
                      <path d="M 30 45 L 35 25 L 65 25 L 70 45 Z" fill="#FFD700" stroke="#000" strokeWidth="2.5" />
                      
                      {/* Left wheel */}
                      <circle cx="30" cy="82" r="13" fill="#E8E8E8" stroke="#000" strokeWidth="2" />
                      <circle cx="30" cy="82" r="8" fill="#333" />
                      
                      {/* Right wheel */}
                      <circle cx="70" cy="82" r="13" fill="#E8E8E8" stroke="#000" strokeWidth="2" />
                      <circle cx="70" cy="82" r="8" fill="#333" />
                      
                      {/* Front window */}
                      <path d="M 35 32 L 40 40 L 55 40 L 60 32 Z" fill="#87CEEB" stroke="#666" strokeWidth="1.5" />
                      
                      {/* Back window */}
                      <rect x="50" y="32" width="12" height="12" fill="#87CEEB" stroke="#666" strokeWidth="1.5" />
                      
                      {/* Headlights */}
                      <circle cx="18" cy="54" r="3" fill="#FFE53B" stroke="#000" strokeWidth="1" />
                      <circle cx="18" cy="62" r="3" fill="#FFE53B" stroke="#000" strokeWidth="1" />
                    </svg>
                  </div>

                  {/* Right star */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="absolute right-0 top-0 text-orange-400">
                    <path d="M12 2l3.09 6.26L22 9.27l-7 6.87 1.18 6.88L12 17.77l-4.18 2.25 1.18-6.88-7-6.87 6.91-1.01L12 2z" fill="currentColor" />
                  </svg>
                </div>

                {/* Magnifying glass */}
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="absolute bottom-4 right-0 text-orange-400">
                  <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M14 14l4 4" stroke="currentColor" strokeWidth="2" />
                </svg>

                {/* Lines under car */}
                <div className="absolute bottom-12 left-1/4 transform -translate-x-1/2">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                    <line x1="0" y1="2" x2="12" y2="2" stroke="#FF9800" strokeWidth="2" />
                    <line x1="0" y1="6" x2="12" y2="6" stroke="#FF9800" strokeWidth="2" />
                    <line x1="0" y1="10" x2="8" y2="10" stroke="#FF9800" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              <h2 className="text-lg font-bold text-gray-900 text-center mb-2">Kamu belum memasang iklan</h2>
              <p className="text-sm text-gray-500 text-center mb-6">jual mobil anda sekarang</p>

              <button
                onClick={() => router.push("/jual-mobil")}
                className="w-full max-w-xs border-2 border-gray-400 text-gray-800 font-bold py-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Jual sekarang
              </button>
            </div>
          ) : (
            // Iklan List (ketika ada data)
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {iklanList.map((iklan, idx) => (
                  <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                    <img src={iklan.image} alt={iklan.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-1">{iklan.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">{iklan.price}</p>
                      <div className="flex gap-2">
                        <button className="flex-1 border border-gray-300 text-gray-800 py-2 rounded text-sm font-semibold hover:bg-gray-50">
                          Edit
                        </button>
                        <button className="flex-1 border border-red-300 text-red-600 py-2 rounded text-sm font-semibold hover:bg-red-50">
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <BottomNav />
      <WaChat />
    </>
  );
}

export default function IklanSayaPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IklanSayaContent />
    </Suspense>
  );
}
