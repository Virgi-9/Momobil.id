export type ArticleDetail = {
  id: number;
  title: string;
  date: string;
  image: string;
  category: string;
  author: string;
  content: { heading?: string; body: string }[];
};

export const articlesDetail: ArticleDetail[] = [
  {
    id: 1,
    title: "Jangan Disepelekan! 8 Kebiasaan Kecil Ini Bikin Mobil Awet dan Jarang Masuk Bengkel",
    date: "sehari yang lalu",
    image: "/berita/8 kebiasaan kecil.webp",
    category: "Tips & Trik",
    author: "Tim Redaksi momobil.id",
    content: [
      {
        body: "Menjaga performa mobil kesayangan sebenarnya tidak selalu harus dimulai dari servis besar berbiaya mahal. Sering kali, hal-hal kecil yang kita lakukan secara berulang setiap hari justru menjadi penentu utama apakah komponen mekanis kendaraan akan bertahan lama atau malah cepat aus.",
      },
      {
        body: "Sayangnya, banyak pengendara yang tidak sadar bahwa beberapa rutinitas harian mereka justru menjadi pemicu kerusakan tersembunyi. Biar mobil tetap prima dan meminimalisir kunjungan darurat ke bengkel, yuk kita mulai dari kebiasaan kecil yang wajib diperhatikan berikut ini!",
      },
      {
        heading: "1. Langsung Nyalain AC Saat Masuk Mobil",
        body: "Ketika mobil terparkir di bawah terik matahari, suhu di dalam kabin bisa melonjak drastis, memicu penumpukan gas benzena dari material plastik dasbor. Langsung mengaktifkan AC sesaat setelah memasuki mobil adalah kekeliruan umum. Cara ini memaksa kompresor AC bekerja ekstra keras secara mendadak di tengah suhu kabin yang sangat tinggi, yang mempercepat keausan komponen magnetic clutch. Selain itu, beban kelistrikan yang melonjak secara instan saat mesin baru menyala dapat memperpendek umur pakai aki.",
      },
      {
        body: "Buka seluruh jendela selama 1-2 menit terlebih dahulu, biarkan udara panas keluar, baru kemudian nyalakan AC secara bertahap mulai dari tingkat embusan angin (blower) terendah.",
      },
      {
        heading: "2. Panasin Mobil Terlalu Lama",
        body: "Memanaskan mobil modern keluaran tahun muda tidak lagi memerlukan waktu hingga belasan menit seperti mobil karburator zaman dulu. Mesin injeksi masa kini dikendalikan oleh Engine Control Unit (ECU) yang secara otomatis mengatur pasokan bahan bakar saat mesin dingin. Memanaskan mobil terlalu lama di area statis justru memicu pemborosan bensin yang sia-sia dan mempercepat pembentukan kerak karbon di ruang bakar akibat pembakaran yang tidak ideal pada kondisi stasioner (idling).",
      },
      {
        body: "Cukup panaskan mobil selama 30 hingga 60 detik saja. Waktu tersebut sudah lebih dari cukup bagi pompa oli untuk menyalurkan pelumas secara merata ke seluruh celah komponen internal mesin sebelum mobil dijalankan secara perlahan.",
      },
      {
        heading: "3. Cuek sama Tekanan Angin Ban",
        body: "Banyak yang mengira ban kempes hanya berpengaruh pada kenyamanan berkendara. Padahal, dampak ekonomisnya jauh lebih besar. Kurangnya tekanan angin sebesar 5 PSI saja pada ban dapat meningkatkan resistensi gulir (rolling resistance) roda terhadap permukaan aspal. Akibatnya, mesin harus bekerja lebih keras untuk menggerakkan mobil, yang memicu pemborosan konsumsi bahan bakar hingga 2% sampai 3%. Selain itu, ban yang kurang angin berisiko mengalami underinflation yang mempercepat keausan dinding samping ban secara tidak merata.",
      },
      {
        body: "Cek tekanan angin ban minimal dua minggu sekali sesuai dengan stiker batas ideal yang biasanya tertera di pilar pintu pengemudi.",
      },
      {
        heading: "4. Kebiasaan Isi Bensin Nunggu Indikator 'E' Nyala",
        body: "Menunda pengisian bahan bakar hingga jarum indikator mendekati atau menyentuh huruf 'E' (Empty) adalah kebiasaan berbahaya bagi kesehatan tangki mobil. Pompa bensin elektronik (fuel pump / rotak) pada mobil modern letaknya terendam di dalam tangki dan memanfaatkan cairan bahan bakar tersebut sebagai pendingin suhunya saat bekerja. Jika volume bensin terlalu sering dibiarkan tiris, komponen pompa akan mudah mengalami overheat. Selain itu, endapan kotoran atau tangki yang mengembun akibat ruang kosong yang terlalu luas berisiko ikut tersedot, menyebabkan penyumbatan fatal pada filter bensin dan injector.",
      },
      {
        body: "Biasakan mengisi ulang bahan bakar setidaknya ketika volume bensin di dalam tangki menyisakan seperempat bagian.",
      },
      {
        heading: "5. Asal Terjang Polisi Tidur dan Jalan Rusak",
        body: "Melintasi polisi tidur atau jalan berlubang dengan kecepatan tinggi tanpa mengurangi akselerasi adalah jalan pintas merusak sistem kaki-kaki mobil. Hantaman keras yang terjadi secara berulang akan mempercepat kerusakan pada komponen sensitif seperti shockbreaker, ball joint, tie rod, hingga bushing arm. Jika komponen ini longgar, sudut keselarasan roda akan berubah, membuat setir terasa tidak stabil dan ban mobil menjadi cepat botak sebelah (irregular wear).",
      },
      {
        body: "Disarankan untuk mengurangi kecepatan secara perlahan sebelum menyentuh polisi tidur, lalu lepas pedal rem sesaat sebelum roda melewati rintangan agar beban suspensi depan tidak terlalu tertekan ke bawah.",
      },
      {
        heading: "6. Kebiasaan Memutar Setir Sampai Mentok (Full Lock) Saat Parkir",
        body: "Banyak pengendara yang tidak sadar sering memutar kemudi hingga terdengar bunyi \"jedug\" atau menahannya dalam posisi mentok saat sedang bermanuver di ruang parkir yang sempit. Pada mobil yang masih menggunakan sistem Hydraulic Power Steering (HPS), menahan setir dalam kondisi mentok terlalu lama akan membuat tekanan cairan hidrolik melonjak ekstrem. Hal ini memicu kebocoran pada sil (seal) karet dan merusak pompa power steering. Meskipun mobil modern saat ini rata-rata sudah bermigrasi menggunakan Electric Power Steering (EPS), kebiasaan ini tetap memberikan beban stres berlebih pada komponen rack gear dan dinamo motor EPS.",
      },
      {
        body: "Saat parkir atau putar balik, sisakan sedikit jarak (sekitar 2–3 cm) sebelum setir benar-benar mentok ke ujung agar sistem kemudi tidak menanggung tekanan puncak.",
      },
      {
        heading: "7. Menaruh Kaki Terus-menerus di Atas Pedal Kopling (Khusus Mobil Manual)",
        body: "Kebiasaan meletakkan kaki kiri secara \"mengambang\" atau menempel di pedal kopling sepanjang perjalanan meskipun tidak sedang mengoper gigi adalah pemicu utama kantong jebol akibat biaya servis transmisi. Tekanan sekecil apa pun dari bobot kaki Anda pada pedal kopling akan membuat komponen release bearing sedikit mendorong diafragma spring. Akibatnya, pelat kopling akan mengalami slip halus (clutch slipping) secara terus-menerus tanpa disadari. Imbas jangka panjangnya, kopling mobil akan menjadi cepat aus, tipis, dan memicu gejala kopling selip yang membuat mobil kehilangan tenaga di tanjakan.",
      },
      {
        body: "Setelah melakukan perpindahan gigi, biasakan langsung menurunkan kaki kiri dan mengistirahatkannya di lantai kabin atau pada area dead pedal yang sudah disediakan di sebelah kiri pedal kopling.",
      },
      {
        heading: "8. Langsung Matiin Mesin Abis Perjalanan Jauh / Kecepatan Tinggi",
        body: "Setelah menempuh rute luar kota atau melaju kencang di jalan tol, banyak pengemudi yang terburu-buru langsung memutar kunci ke posisi Off sesaat setelah mobil berhenti. Mematikan mesin secara instan akan menghentikan sirkulasi oli mesin dan cairan pendingin (coolant) secara mendadak. Padahal, komponen mesin (terutama komponen blok silinder dan komponen kompresor pada mesin yang dilengkapi Turbocharger) masih berada dalam suhu yang sangat panas. Akibatnya, sisa oli yang terjebak di area panas tersebut bisa mengalami pengkristalan (oil sludging) dan merusak komponen presisi mesin.",
      },
      {
        body: "Ketika sampai di lokasi tujuan, biarkan mesin mobil tetap menyala dalam kondisi stasioner (idling) tanpa menginjak gas selama 30 hingga 60 detik. Langkah ini memberikan waktu bagi suhu komponen internal mesin untuk turun secara bertahap (cooling down period) sebelum dimatikan total.",
      },
      {
        body: "Nah, dari 8 kebiasaan di atas, mana nih yang paling sering dilakuin? Yuk, mulai ubah kebiasaan kecil ini biar mobilmu tetap bernilai tinggi pas nanti mau di jual lagi.",
      },
      {
        body: "Bagi Anda yang ingin menjual mobil atau melakukan tukar tambah mobil, bisa melakukannya melalui momobil.id. Dapatkan harga jual terbaik dan menguntungkan serta berbagai kemudahan penjualan lainnya.",
      },
    ],
  },
  {
    id: 2,
    title: "Resmi Meluncur Mulai Rp700 Jutaan, XPeng Siap Gempur Pasar Indonesia Pakai G6 AWD dan X9 Facelift",
    date: "2 hari yang lalu",
    image: "/berita/xpeng 700juta.webp",
    category: "Berita Otomotif",
    author: "Tim Redaksi momobil.id",
    content: [
      {
        body: "Pasar kendaraan listrik (EV) di Indonesia kembali diguncang oleh kedatangan inovasi terbaru dari XPeng. Merek asal Tiongkok ini resmi memperkenalkan dua model unggulannya, yaitu XPeng G6 AWD dan XPeng X9 Facelift, dengan harga mulai dari Rp 700 jutaan.",
      },
      {
        heading: "XPeng G6 AWD — SUV Elektrik Performa Tinggi",
        body: "XPeng G6 AWD hadir sebagai SUV elektrik mid-size dengan sistem penggerak empat roda. Dibekali dua motor listrik yang menghasilkan tenaga gabungan hingga 400 kW (sekitar 544 hp), G6 AWD mampu melesat dari 0-100 km/jam hanya dalam 3,9 detik. Baterai 87,5 kWh-nya mampu menempuh jarak hingga 580 km dalam sekali pengisian (CLTC).",
      },
      {
        heading: "Teknologi XNGP — Mengemudi Cerdas Generasi Baru",
        body: "Salah satu keunggulan utama XPeng adalah sistem ADAS XNGP (XPeng Navigation Guided Pilot) yang diklaim mampu bermanuver di kondisi lalu lintas Indonesia yang padat. Sistem ini menggunakan kombinasi LiDAR, radar, dan 12 kamera untuk membaca kondisi jalan secara real-time.",
      },
      {
        heading: "XPeng X9 Facelift — MPV Premium Mewah",
        body: "X9 Facelift adalah MPV listrik premium berukuran besar dengan konfigurasi 6 kursi mewah. Desain eksteriornya diperbarui dengan tampilan lebih modern, sementara interior mendapatkan kursi executive berventilasi, layar hiburan belakang 21 inci, dan sistem suara premium Dynaudio. Harganya diperkirakan di atas Rp 1,2 miliar.",
      },
      {
        heading: "Target Pasar dan Jaringan Dealer",
        body: "XPeng Indonesia menargetkan konsumen urban kelas menengah atas yang menginginkan kendaraan teknologi tinggi dengan emisi nol. Merek ini berencana membuka jaringan dealer di Jakarta, Surabaya, Bali, dan Medan pada tahap pertama.",
      },
      {
        body: "Dengan peluncuran resmi ini, persaingan di segmen EV premium Indonesia semakin ketat, bersaing langsung dengan Tesla Model Y, BMW iX, dan BYD Han.",
      },
    ],
  },
  {
    id: 3,
    title: "Perbedaan Suzuki XL7 Alpha vs Beta vs Zeta, Apa Saja Bedanya?",
    date: "5 hari yang lalu",
    image: "/berita/perbedaan xl7.webp",
    category: "Panduan Beli",
    author: "Tim Redaksi momobil.id",
    content: [
      {
        body: "Suzuki XL7 mengukuhkan posisinya sebagai salah satu Low SUV (LSUV) 7-seater terlaris di Indonesia. Model ini hadir dalam tiga varian utama: Alpha, Beta, dan Zeta. Ketiga varian berbagi platform yang sama namun memiliki perbedaan fitur yang signifikan. Berikut perbandingan lengkapnya.",
      },
      {
        heading: "Mesin dan Transmisi — Sama di Semua Varian",
        body: "Ketiga varian XL7 ditenagai mesin 1.5L K15B dengan tenaga 105 hp dan torsi 138 Nm. Tersedia pilihan transmisi manual 5-percepatan dan otomatis 4-percepatan. Konsumsi BBM rata-rata sekitar 15–17 km/liter di kondisi jalan normal.",
      },
      {
        heading: "Suzuki XL7 Zeta — Varian Terendah",
        body: "XL7 Zeta adalah entry-level dari lineup XL7. Varian ini sudah dilengkapi head unit 7 inci, AC manual, power window, dan rem ABS+EBD. Tidak ada fitur cruise control maupun blind spot monitor di varian ini. Cocok untuk konsumen yang menginginkan XL7 dengan budget terbatas.",
      },
      {
        heading: "Suzuki XL7 Beta — Varian Menengah Terlaris",
        body: "Beta adalah varian terlaris XL7. Dibanding Zeta, Beta sudah dilengkapi head unit 9 inci dengan Android Auto & Apple CarPlay, AC digital dual zone, dan keyless entry. Fitur keselamatan juga lebih lengkap dengan Lane Departure Warning dan Auto High Beam.",
      },
      {
        heading: "Suzuki XL7 Alpha — Varian Tertinggi Paling Lengkap",
        body: "Alpha adalah puncak dari lineup XL7 dengan fitur paling lengkap. Tambahan dibanding Beta mencakup sunroof panoramik, 360-degree camera, adaptive cruise control, wireless charging, dan jok kulit dengan electric adjustment untuk baris pertama. Tampilan eksterior juga lebih premium dengan velg alloy 17 inci berdesain eksklusif.",
      },
      {
        heading: "Rangkuman Perbedaan Harga",
        body: "XL7 Zeta dibanderol mulai Rp 238 juta, Beta mulai Rp 258 juta, sementara Alpha menjadi yang termahal di kisaran Rp 278 juta (OTR Jakarta). Selisih harga antar varian sekitar Rp 20 jutaan.",
      },
      {
        body: "Rekomendasi: Jika budget tidak menjadi hambatan, pilih Alpha untuk pengalaman berkendara paling nyaman dan aman. Namun jika ingin value terbaik, Beta adalah pilihan yang paling seimbang antara fitur dan harga.",
      },
    ],
  },
  {
    id: 4,
    title: "Perbedaan Suzuki Fronx GL, GX, dan SGX: Jangan Salah Pilih Varian!",
    date: "5 hari yang lalu",
    image: "/berita/perbedaan fronx.webp",
    category: "Panduan Beli",
    author: "Tim Redaksi momobil.id",
    content: [
      {
        body: "Suzuki Fronx hadir sebagai penantang serius di segmen compact crossover dengan gen DNA yang kuat dari Baleno. Dijual dalam tiga varian — GL, GX, dan SGX — masing-masing menawarkan paket fitur yang berbeda di harga yang cukup kompetitif. Apa saja perbedaannya?",
      },
      {
        heading: "Platform dan Mesin — Sama di Semua Varian",
        body: "Semua varian Fronx menggunakan platform Heartect dan mesin 1.5L K15B dual injeksi yang menghasilkan 103 hp dengan torsi 138 Nm. Tersedia pilihan transmisi manual 5-percepatan dan AGS (Auto Gear Shift) — transmisi robotik AMT khas Suzuki.",
      },
      {
        heading: "Suzuki Fronx GL — Varian Entry Level",
        body: "Fronx GL adalah pintu masuk ke lineup Fronx. Sudah dilengkapi head unit touchscreen 7 inci, AC manual, ABS+EBD, dan dual airbag. Tampilan eksterior menggunakan velg 16 inci dengan desain standar. Tidak ada fitur ADAS di varian ini.",
      },
      {
        heading: "Suzuki Fronx GX — Varian Menengah Populer",
        body: "GX menambahkan sejumlah peningkatan signifikan dibanding GL: head unit 9 inci dengan konektivitas wireless Android Auto & Apple CarPlay, AC otomatis, cruise control, dan kamera mundur. Velg berganti menjadi 16 inci alloy dengan desain yang lebih sporty.",
      },
      {
        heading: "Suzuki Fronx SGX — Puncak Tertinggi Lineup",
        body: "SGX adalah varian flagship Fronx dengan fitur ADAS paling lengkap di kelasnya: Lane Keep Assist, Adaptive Cruise Control dengan stop-and-go, Forward Collision Warning, dan Blind Spot Detection. Tambahan lainnya mencakup sunroof, jok kulit, ambient lighting, dan velg 16 inci desain eksklusif two-tone.",
      },
      {
        heading: "Perbandingan Harga",
        body: "Fronx GL dibanderol mulai Rp 229 juta, GX di kisaran Rp 249 juta, dan SGX sebagai varian termahal di sekitar Rp 269 juta (OTR Jakarta). Dengan fitur ADAS yang ditawarkan SGX, selisih Rp 20–40 juta bisa dikatakan sangat worth it.",
      },
      {
        body: "Kesimpulan: Fronx GX menjadi pilihan terbaik dari sisi value for money dengan fitur yang sudah sangat memadai. Namun bagi yang mengutamakan keselamatan aktif, SGX adalah investasi yang sangat direkomendasikan.",
      },
    ],
  },
];
