import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";
import WaChat from "../components/WaChat";
import NewCarSection from "../components/NewCarSection";
import BrandGrid from "../components/BrandGrid";
import MobilBaruHero from "../components/MobilBaruHero";
import PriceFilter from "../components/PriceFilter";
import { newCarsByBrand } from "../data/newCars";

export default function MobilBaruPage() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0 bg-gray-50">
        {/* Hero promo banner */}
        <MobilBaruHero />

        {/* Brand grid */}
        <BrandGrid />

        {/* Price filter */}
        <PriceFilter />

        {/* All / popular first */}
        <NewCarSection
          title="Mobil populer"
          cars={newCarsByBrand.all}
          viewAllHref="/mobil-baru/semua"
        />

        {/* Per brand sections */}
        <NewCarSection
          title="Mobil populer dari Honda"
          cars={newCarsByBrand.honda}
          viewAllHref="/mobil-baru/honda"
        />
        <NewCarSection
          title="Mobil populer dari Mitsubishi"
          cars={newCarsByBrand.mitsubishi}
          viewAllHref="/mobil-baru/mitsubishi"
        />
        <NewCarSection
          title="Mobil populer dari Wuling"
          cars={newCarsByBrand.wuling}
          viewAllHref="/mobil-baru/wuling"
        />
        <NewCarSection
          title="Mobil populer dari Daihatsu"
          cars={newCarsByBrand.daihatsu}
          viewAllHref="/mobil-baru/daihatsu"
        />
        <NewCarSection
          title="Mobil populer dari Toyota"
          cars={newCarsByBrand.toyota}
          viewAllHref="/mobil-baru/toyota"
        />
      </main>
      <Footer />
      <BottomNav />
      <WaChat />
    </>
  );
}
