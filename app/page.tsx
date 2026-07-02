import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Categories from "./components/Categories";
import CarSection from "./components/CarSection";
import XtraOrderBanner from "./components/XtraOrderBanner";
import ArticlesSection from "./components/ArticlesSection";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import WaChat from "./components/WaChat";
import { mpvCars, recommendedCars } from "./data/cars";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0 bg-gray-50">
        <HeroBanner />
        <Categories />
        <div className="bg-white">
          <CarSection
            title="Rekomendasi Tipe Mobil MPV"
            cars={mpvCars}
            viewAllHref="/mobil-bekas?tipe=mpv"
          />
          <CarSection
            title="Rekomendasi Mobil Bekas"
            cars={recommendedCars}
            viewAllHref="/mobil-bekas"
          />

          {/* Lihat Lainnya button */}
          <div className="flex justify-center py-5">
            <button className="border border-gray-800 text-gray-800 text-sm font-semibold px-8 py-2.5 rounded-full hover:bg-gray-50 transition-colors">
              Lihat Lainnya
            </button>
          </div>
        </div>

        <XtraOrderBanner />
        <ArticlesSection />
      </main>
      <Footer />
      <BottomNav />
      <WaChat />
    </>
  );
}
