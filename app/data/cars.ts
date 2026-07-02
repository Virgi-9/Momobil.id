export type Car = {
  id: number;
  title: string;
  price: string;
  year: number;
  location: string;
  image: string;
  badge?: string;
  dateLabel?: string;
  category: "mpv" | "sedan" | "suv" | "hatchback" | "electric";
};

export type Article = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
};

export const mpvCars: Car[] = [
  {
    id: 7,
    title: "XPANDER SPORT AT LOW KM LIKE NEW",
    price: "Rp 175.000.000",
    year: 2021,
    location: "KOTA JAKARTA UTARA",
    dateLabel: "HARI INI",
    image: "/mobilbekas/xpander sport.webp",
    category: "mpv",
  },
  {
    id: 1,
    title: "HYUNDAI STARGAZER TIPE PRIME HL...",
    price: "Rp 225.000.000",
    year: 2024,
    location: "KOTA PONTIANAK",
    dateLabel: "1 HARI YANG LALU",
    image: "/mobilbekas/xpander sport.webp",
    category: "mpv",
  },
  {
    id: 2,
    title: "WULING CONFERO PUTIH 1500 MAN...",
    price: "Rp 110.000.000",
    year: 2019,
    location: "KOTA PONTIANAK",
    dateLabel: "2 HARI YANG LALU",
    image: "/mobilbekas/avanza e mt.webp",
    category: "mpv",
  },
  {
    id: 3,
    title: "TOYOTA NEW CALYA TIPE G PUTIH 12...",
    price: "Rp 160.000.000",
    year: 2022,
    location: "KOTA PONTIANAK",
    dateLabel: "11 JUN",
    image: "/mobilbekas/calya g at.webp",
    category: "mpv",
  },
  {
    id: 4,
    title: "TOYOTA NEW CALYA TIPE G MERAH 1...",
    price: "Rp 155.000.000",
    year: 2020,
    location: "KOTA PONTIANAK",
    dateLabel: "05 JUN",
    image: "/mobilbekas/calya g at.webp",
    category: "mpv",
  },
  {
    id: 5,
    title: "TOYOTA AVANZA VELOZ AT 2021 SILVER",
    price: "Rp 185.000.000",
    year: 2021,
    location: "KOTA PONTIANAK",
    dateLabel: "03 JUN",
    image: "/mobilbekas/avanza e.webp",
    category: "mpv",
  },
  {
    id: 6,
    title: "DAIHATSU XENIA R SPORTY AT 2019",
    price: "Rp 142.000.000",
    year: 2019,
    location: "KOTA PONTIANAK",
    dateLabel: "01 JUN",
    image: "/mobilbekas/sigra r at.webp",
    category: "mpv",
  },
];

export const recommendedCars: Car[] = [
  {
    id: 101,
    title: "TOYOTA FORTUNER VRZ AT DIESEL 2019",
    price: "Rp 385.000.000",
    year: 2019,
    location: "KOTA PONTIANAK",
    dateLabel: "HARI INI",
    image: "/mobilbekas/innova g at.webp",
    category: "suv",
  },
  {
    id: 102,
    title: "TOYOTA HILUX DC 2.4 AT 4X4 PUTIH 2020",
    price: "Rp 320.000.000",
    year: 2020,
    location: "KOTA PONTIANAK",
    dateLabel: "HARI INI",
    image: "/mobilbekas/innova.webp",
    category: "suv",
  },
  {
    id: 103,
    title: "TOYOTA NEW CALYA TIPE G PUTIH 2022",
    price: "Rp 160.000.000",
    year: 2022,
    location: "KOTA PONTIANAK",
    dateLabel: "1 HARI YANG LALU",
    image: "/mobilbekas/calya g at.webp",
    category: "mpv",
  },
  {
    id: 104,
    title: "HONDA NEW CITY HATCHBACK RS CVT 2022",
    price: "Rp 255.000.000",
    year: 2022,
    location: "KOTA PONTIANAK",
    dateLabel: "2 HARI YANG LALU",
    image: "/mobilbekas/jazz rs at.webp",
    category: "hatchback",
  },
  {
    id: 105,
    title: "DAIHATSU ROCKY 1.2 X MT 2021 ABU",
    price: "Rp 175.000.000",
    year: 2021,
    location: "KOTA PONTIANAK",
    dateLabel: "3 HARI YANG LALU",
    image: "/mobilbekas/innova zenix.webp",
    category: "suv",
  },
  {
    id: 106,
    title: "SUZUKI ERTIGA SPORT AT GX 2019 SILVER",
    price: "Rp 168.000.000",
    year: 2019,
    location: "KOTA PONTIANAK",
    dateLabel: "5 HARI YANG LALU",
    image: "/mobilbekas/xpander sport.webp",
    category: "mpv",
  },
  {
    id: 107,
    title: "HONDA BR-V E PRESTIGE CVT AT 2020",
    price: "Rp 210.000.000",
    year: 2020,
    location: "KOTA PONTIANAK",
    dateLabel: "06 JUN",
    image: "/mobilbekas/brio e at.webp",
    category: "suv",
  },
  {
    id: 108,
    title: "MITSUBISHI XPANDER ULTIMATE AT 2022",
    price: "Rp 265.000.000",
    year: 2022,
    location: "KOTA PONTIANAK",
    dateLabel: "05 JUN",
    image: "/mobilbekas/xpander sport.webp",
    category: "mpv",
  },
];

export const articles: Article[] = [
  {
    id: 1,
    title: "Jangan Disepelekan! 8 Kebiasaan Kecil Ini Bikin Mobil Awet dan Jarang Masuk Bengkel",
    excerpt: "Menjaga performa mobil kesayangan sebenarnya tidak selalu harus dimulai dari servis besar berbiaya mahal.",
    date: "sehari yang lalu",
    image: "/berita/8 kebiasaan kecil.webp",
    category: "News",
  },
  {
    id: 2,
    title: "Resmi Meluncur Mulai Rp700 Jutaan, XPeng Siap Gempur Pasar Indonesia Pakai G6 AWD dan X9 Facelift",
    excerpt: "Pasar kendaraan listrik (EV) di Indonesia kembali diguncang oleh kedatangan inovasi terbaru dari XPeng.",
    date: "2 hari yang lalu",
    image: "/berita/xpeng 700juta.webp",
    category: "News",
  },
  {
    id: 3,
    title: "Perbedaan Suzuki XL7 Alpha vs Beta vs Zeta, Apa Saja Bedanya?",
    excerpt: "Suzuki XL7 mengukuhkan posisinya sebagai salah satu Low SUV (LSUV) 7-seater terlaris di Indonesia.",
    date: "5 hari yang lalu",
    image: "/berita/perbedaan xl7.webp",
    category: "News",
  },
  {
    id: 4,
    title: "Perbedaan Suzuki Fronx GL, GX, dan SGX: Jangan Salah Pilih Varian!",
    excerpt: "Suzuki Fronx hadir sebagai penantang serius di segmen compact crossover dengan gen DNA yang kuat.",
    date: "5 hari yang lalu",
    image: "/berita/perbedaan fronx.webp",
    category: "News",
  },
];
