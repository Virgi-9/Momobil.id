export type NewCar = {
  id: number;
  title: string;
  price: string;
  priceFrom?: string;
  brand: string;
  badge?: "Mobil Baru" | "Test Drive";
  image: string;
};

export type Brand = {
  id: string;
  name: string;
  logo: string; // text-based logo or SVG letter
  color: string;
};

export const brands: Brand[] = [
  { id: "wuling",     name: "WULING",     logo: "W",  color: "#c41e3a" },
  { id: "chery",      name: "CHERY",      logo: "C",  color: "#d4a017" },
  { id: "jaecoo",     name: "JAECOO",     logo: "J",  color: "#1a1a2e" },
  { id: "byd",        name: "BYD",        logo: "B",  color: "#0057a8" },
  { id: "suzuki",     name: "SUZUKI",     logo: "S",  color: "#003087" },
  { id: "toyota",     name: "TOYOTA",     logo: "T",  color: "#eb0a1e" },
  { id: "daihatsu",   name: "DAIHATSU",   logo: "D",  color: "#e8171b" },
  { id: "honda",      name: "HONDA",      logo: "H",  color: "#cc0000" },
  { id: "hkm",        name: "HKM",        logo: "HK", color: "#333333" },
  { id: "neta",       name: "NETA",       logo: "N",  color: "#00a3e0" },
  { id: "proton",     name: "PROTON",     logo: "P",  color: "#003580" },
  { id: "changan",    name: "CHANGAN",    logo: "CA", color: "#c8102e" },
  { id: "mitsubishi", name: "MITSUBISHI", logo: "M",  color: "#e60012" },
  { id: "wais",       name: "WAIS",       logo: "WS", color: "#555555" },
];

export const newCarsByBrand: Record<string, NewCar[]> = {
  all: [
    { id: 1001, title: "TOYOTA", price: "Rp 173.900.000", brand: "toyota", badge: "Mobil Baru", image: "/mobilbaru/calya.webp" },
    { id: 1002, title: "AVANZA", price: "Rp 243.600.000", brand: "toyota", badge: "Mobil Baru", image: "/mobilbaru/avanza.webp" },
    { id: 1003, title: "INNOVA", price: "Rp 247.700.000", brand: "toyota", badge: "Mobil Baru", image: "/mobilbaru/xforce.webp" },
    { id: 1004, title: "FORTUNER", price: "Rp 573.300.000", brand: "toyota", badge: "Mobil Baru", image: "/mobilbaru/rush.webp" },
  ],

  toyota: [
    { id: 2001, title: "Calya", price: "Rp 173.900.000", brand: "toyota", badge: "Mobil Baru", image: "/mobilbaru/calya.webp" },
    { id: 2002, title: "Avanza", price: "Rp 243.600.000", brand: "toyota", badge: "Mobil Baru", image: "/mobilbaru/avanza.webp" },
    { id: 2003, title: "Innova", price: "Rp 243.600.000", brand: "toyota", badge: "Mobil Baru", image: "/mobilbaru/xforce.webp" },
    { id: 2004, title: "Innova Zenix", price: "Rp 247.700.000", brand: "toyota", badge: "Mobil Baru", image: "/mobilbaru/xforce.webp" },
    { id: 2005, title: "Rush", price: "Rp 301.200.000", brand: "toyota", badge: "Test Drive", image: "/mobilbaru/rush.webp" },
  ],

  honda: [
    { id: 3001, title: "Brio", price: "Rp 185.900.000", brand: "honda", badge: "Mobil Baru", image: "/mobilbaru/brio.webp" },
    { id: 3002, title: "WR-V", price: "Rp 279.400.000", brand: "honda", badge: "Mobil Baru", image: "/mobilbaru/wrv.webp" },
    { id: 3003, title: "HR-V", price: "Rp 307.000.000", brand: "honda", badge: "Mobil Baru", image: "/mobilbaru/hrv.webp" },
    { id: 3004, title: "City Hatchback", price: "Rp 282.500.000", brand: "honda", badge: "Test Drive", image: "/mobilbaru/city hatchback.webp" },
    { id: 3005, title: "Mobilio", price: "Rp 229.000.000", brand: "honda", badge: "Mobil Baru", image: "/mobilbaru/brv.webp" },
  ],

  mitsubishi: [
    { id: 4001, title: "Xpander", price: "Rp 270.000.000", brand: "mitsubishi", badge: "Mobil Baru", image: "/mobilbaru/xpander.webp" },
    { id: 4002, title: "Xpander Cross", price: "Rp 288.000.000", brand: "mitsubishi", badge: "Mobil Baru", image: "/mobilbaru/xpander.webp" },
    { id: 4003, title: "Outlander", price: "Rp 315.000.000", brand: "mitsubishi", badge: "Test Drive", image: "/mobilbaru/destinator.webp" },
    { id: 4004, title: "Pajero Sport", price: "Rp 582.700.000", brand: "mitsubishi", badge: "Mobil Baru", image: "/mobilbaru/pajero.webp" },
  ],

  wuling: [
    { id: 5001, title: "Confero", price: "Rp 188.900.000", brand: "wuling", badge: "Mobil Baru", image: "/mobilbaru/confero.webp" },
    { id: 5002, title: "Almaz", price: "Rp 214.000.000", brand: "wuling", badge: "Mobil Baru", image: "/mobilbaru/alvez.webp" },
    { id: 5003, title: "Air ev", price: "Rp 217.000.000", brand: "wuling", badge: "Test Drive", image: "/mobilbaru/air ev.webp" },
    { id: 5004, title: "Cortez", price: "Rp 258.500.000", brand: "wuling", badge: "Mobil Baru", image: "/mobilbaru/cortez.webp" },
  ],

  daihatsu: [
    { id: 6001, title: "Calya", price: "Rp 143.000.000", brand: "daihatsu", badge: "Mobil Baru", image: "/mobilbaru/calya.webp" },
    { id: 6002, title: "Sigra", price: "Rp 143.200.000", brand: "daihatsu", badge: "Mobil Baru", image: "/mobilbaru/sigra.webp" },
    { id: 6003, title: "Ayla", price: "Rp 213.750.000", brand: "daihatsu", badge: "Test Drive", image: "/mobilbaru/ayla.webp" },
    { id: 6004, title: "Rocky", price: "Rp 215.850.000", brand: "daihatsu", badge: "Mobil Baru", image: "/mobilbaru/rocky.webp" },
  ],
};
