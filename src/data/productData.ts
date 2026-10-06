import { Review, PhotoSlot, LivePurchase } from '../types';
import heroRegeneratedImg from '../assets/images/regenerated_image_1791273042930.png';
import handOnLamp from '../assets/images/hand_on_lamp_closeup_1791223776305.jpg';
import womanPointing from '../assets/images/woman_pointing_lamp_1791223788813.jpg';
import womanAmazed from '../assets/images/woman_amazed_lamp_1791223800412.jpg';
import beforeAfter from '../assets/images/taman_sebelum_sesudah_1791223234060.jpg';
import pathway from '../assets/images/jalur_taman_bunga_estetik_1791223246497.jpg';

// High-resolution photographic assets bundled directly for Vercel production deployment
export const WOMAN_PRESENTING = heroRegeneratedImg;
export const HAND_ON_LAMP = handOnLamp;
export const WOMAN_POINTING = womanPointing;
export const WOMAN_AMAZED = womanAmazed;
export const HERO_IMAGE = WOMAN_PRESENTING; // Primary hero visual requested by user
export const CLOSEUP_IMAGE = HAND_ON_LAMP;
export const BEFORE_AFTER_IMAGE = beforeAfter;
export const PATHWAY_IMAGE = pathway;

// Shopee Affiliate / Direct Store Link requested by user
export const SHOPEE_PRODUCT_URL = 'https://shopee.co.id/product/157287391/7551700319/';

// Exact promotional pricing requested by user
export const PROMO_PRICE = 'Rp228.888';
export const NORMAL_PRICE = 'Rp289.000';
export const DISCOUNT_PERCENT = '-21%';
export const SAVINGS_AMOUNT = 'Rp60.112';

// Reviews with the exact requested names: Dewi, Nisa, Fatimah, Solihin, Aden, Rifki
export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: 'rev-dewi',
    name: 'Dewi',
    location: 'Jakarta Selatan',
    rating: 5,
    date: '2 hari yang lalu',
    comment:
      'Tadinya taman belakang kalau malam gelap banget bikin takut anak-anak main ke luar. Pas dipasang lampu ADL ini langsung berubah drastis jadi estetik banget kayak villa di Bali! Kualitas cat dan besinya kokoh, lampunya terang tapi hangat di mata. Sangat recommended!',
    purchasedVariant: 'Lampu Taman Minimalis 1 Meter (Warm White)',
    verified: true,
    avatarText: 'DW',
    avatarBg: 'bg-emerald-600',
  },
  {
    id: 'rev-nisa',
    name: 'Nisa',
    location: 'Bandung',
    rating: 5,
    date: '4 hari yang lalu',
    comment:
      'Bagus bangettt! Desainnya minimalis elegan, pas banget ditaruh di samping jalan setapak taman depan. Harganya jauh lebih murah dibanding beli di toko offline besar, tapi finishingnya rapi dan mulus banget. Packing aman lapis bubble wrap tebal tanpa lecet.',
    purchasedVariant: 'Paket Hemat 4 Pcs Lampu Taman 1M',
    verified: true,
    avatarText: 'NS',
    avatarBg: 'bg-rose-600',
  },
  {
    id: 'rev-fatimah',
    name: 'Fatimah',
    location: 'Yogyakarta',
    rating: 5,
    date: '1 minggu yang lalu',
    comment:
      'Alhamdulillah taman depan yang tadinya suram sekarang keliatan mewah dan adem. Tetangga lewat pas malam pada nanyain beli di mana. Bahannya plat tebal kokoh ga ringkih, kaca lampunya juga bagus ga gampang buram. Puas belanja di toko ADL!',
    purchasedVariant: 'Lampu Taman Minimalis 1 Meter (Warm White)',
    verified: true,
    avatarText: 'FT',
    avatarBg: 'bg-amber-600',
  },
  {
    id: 'rev-solihin',
    name: 'Solihin',
    location: 'Surabaya',
    rating: 5,
    date: '1 minggu yang lalu',
    comment:
      'Mantap betul! Pengiriman cepat, packing kayu sangat aman sampai di Surabaya. Pemasangan gampang banget, dudukan tinggal dibaut ke paving blok. Cahayanya bikin rumah makin kelihatan homey dan berkelas pas malam hari. Bintang 5 layak disematkan.',
    purchasedVariant: 'Paket 2 Pcs Lampu Taman 1M',
    verified: true,
    avatarText: 'SL',
    avatarBg: 'bg-blue-600',
  },
  {
    id: 'rev-aden',
    name: 'Aden',
    location: 'Tangerang',
    rating: 5,
    date: '2 minggu yang lalu',
    comment:
      'Asli ga nyesel beli di sini. Kualitas material jempolan, tahan hujan deras berhari-hari ga ada rembes apalagi konslet. Desainnya estetik modern dan harganya sangat terjangkau untuk lampu taman setinggi 1 meter. Top seller ramah & fast respond!',
    purchasedVariant: 'Lampu Taman Minimalis 1 Meter (Warm White)',
    verified: true,
    avatarText: 'AD',
    avatarBg: 'bg-violet-600',
  },
  {
    id: 'rev-rifki',
    name: 'Rifki',
    location: 'Semarang',
    rating: 5,
    date: '2 minggu yang lalu',
    comment:
      'Solusi jitu buat halaman rumah yang tadinya gelap gulita kayak rumah horor wkwk. Sekarang berasa punya coffee shop mini di halaman sendiri. Tempat nongkrong ngopi favorit keluarga tiap malam. Worth it banget!',
    purchasedVariant: 'Paket Hemat 3 Pcs Lampu Taman 1M',
    verified: true,
    avatarText: 'RF',
    avatarBg: 'bg-cyan-600',
  },
];

// Live purchase popup rotation with requested names: Dewi, Nisa, Fatimah, Solihin, Aden, Rifki
export const LIVE_PURCHASES: LivePurchase[] = [
  {
    id: 'lp-1',
    buyerName: 'Dewi',
    location: 'Jakarta Selatan',
    quantity: 2,
    timeAgo: 'Baru saja',
    productName: 'Lampu Hias Taman Minimalis 1M ADL',
  },
  {
    id: 'lp-2',
    buyerName: 'Nisa',
    location: 'Bandung',
    quantity: 4,
    timeAgo: '1 menit yang lalu',
    productName: 'Paket 4x Lampu Taman Tiang 1 Meter',
  },
  {
    id: 'lp-3',
    buyerName: 'Fatimah',
    location: 'Yogyakarta',
    quantity: 1,
    timeAgo: '2 menit yang lalu',
    productName: 'Lampu Hias Taman Minimalis 1M ADL',
  },
  {
    id: 'lp-4',
    buyerName: 'Solihin',
    location: 'Surabaya',
    quantity: 3,
    timeAgo: '3 menit yang lalu',
    productName: 'Paket 3x Lampu Taman Tiang 1 Meter',
  },
  {
    id: 'lp-5',
    buyerName: 'Aden',
    location: 'Tangerang',
    quantity: 2,
    timeAgo: '4 menit yang lalu',
    productName: 'Lampu Hias Taman Minimalis 1M ADL',
  },
  {
    id: 'lp-6',
    buyerName: 'Rifki',
    location: 'Semarang',
    quantity: 2,
    timeAgo: '6 menit yang lalu',
    productName: 'Lampu Hias Taman Minimalis 1M ADL',
  },
];

// 11 Image slots accurately mapping the user uploaded marketing materials
export const INITIAL_PHOTO_SLOTS: PhotoSlot[] = [
  {
    id: 'slot-1',
    title: 'Taman Rumah Lebih Estetik & Aman',
    category: 'Poster Promosi',
    originalFilename: 'hgfLmyeIjl2TEwHkF-V3LapNnLUNk7ZhXR3FPKf5imfDNimoS018IcD1crEqoxsqWo8TnIWg8f-a5Ml2pNfEBtCgun9f7FElgdL6L96NV5humqOOMJ03H7US5MCP8RRLzwAJzLDiSfcDYYkTg (1).jpeg',
    currentUrl: WOMAN_PRESENTING,
    caption: 'Cahaya hangat • Desain minimalis untuk taman rumah — Beli di sini mumpung promo',
    aspectRatio: 'portrait',
    price: PROMO_PRICE,
    originalPrice: NORMAL_PRICE,
    discount: DISCOUNT_PERCENT,
  },
  {
    id: 'slot-2',
    title: 'Ubah Taman Gelap Jadi Estetik!',
    category: 'Edukasi Produk',
    originalFilename: 'An8U_tQDyhDtYDBelxbB89e4qNcvm0zGvCJsu2EZP4wKijGD.png',
    currentUrl: WOMAN_AMAZED,
    caption: 'Lampu Minimalis 1M — Langsung Cek Sekarang! Mumpung promo ADL Lighting Hand Made',
    aspectRatio: 'portrait',
    price: PROMO_PRICE,
    originalPrice: NORMAL_PRICE,
    discount: DISCOUNT_PERCENT,
  },
  {
    id: 'slot-3',
    title: 'Solusi Taman Horor! Jadi Terang & Cantik!',
    category: 'Solusi Masalah',
    originalFilename: 'An87BTz5RSY3G2Z7Pt6Qk8aMc4WpX6Y7gq0nR73MxSdJWIu5k40eMqTd3pbpng.png',
    currentUrl: WOMAN_POINTING,
    caption: 'Lampu Taman Minimalis ADL — Tak ada lagi sudut gelap menyeramkan di malam hari',
    aspectRatio: 'portrait',
    price: PROMO_PRICE,
    originalPrice: NORMAL_PRICE,
    discount: DISCOUNT_PERCENT,
  },
  {
    id: 'slot-4',
    title: 'Detail Lentera Heksagon & Sentuhan Tangan',
    category: 'Foto Produk',
    originalFilename: 'ujhyju.png',
    currentUrl: HAND_ON_LAMP,
    caption: 'Rangka plat besi presisi anti-karat dengan pendaran cahaya temaram hangat elegan',
    aspectRatio: 'portrait',
    price: PROMO_PRICE,
    originalPrice: NORMAL_PRICE,
    discount: DISCOUNT_PERCENT,
  },
  {
    id: 'slot-5',
    title: 'Ubah "Taman Horor" Jadi Estetik!',
    category: 'Penawaran',
    originalFilename: 'An-TS2FFnCr7ZPbCkpsXm9BTdZD_tB1jKg9sK3cx9NhdEyagssh5FTakGKCqOMq5vPIz6BcL-OzLdIUhjkKqZa0P-ul-BHPsUeoUwz3wNSXJt0h9rk8rTT2gXIiUnShraeGMNNJFqKEpVCNWn7g8vxNhX69m7bD1inRDynLFEJPtnZnZ_8B5Tal_vZqt2DW2p2Guhg.jpeg',
    currentUrl: WOMAN_PRESENTING,
    caption: 'Cek Promo & Beli Sekarang! Penawaran spesial langsung checkout di Shopee',
    aspectRatio: 'portrait',
    price: PROMO_PRICE,
    originalPrice: NORMAL_PRICE,
    discount: DISCOUNT_PERCENT,
  },
  {
    id: 'slot-6',
    title: 'Taman Indah, Malam Tak Lagi Gelap',
    category: 'Banner Promo',
    originalFilename: 'An8WPYhk5XDgBALHo-JdU5cgUuJy5y_Lp7YBkO9artgwxsFjSvFFbuXgqCUCTk1G9Bk2tumcb9tM4Y-zuGNQ20L-UH61rut7ViHnOtLVFCsIWbDUEQlw1ZvdCZNek8t7dY53Ie3Pt-LoR6EfLUrPmlSGNHpJiyL8_XTQkB23YJWe3MZi5m-sAztEqbex-1j370hIKA.jpeg',
    currentUrl: WOMAN_AMAZED,
    caption: 'Lampu Taman Minimalis — Estetik & Terang Sepanjang Malam. Mudah dipasang di halaman.',
    aspectRatio: 'portrait',
    price: PROMO_PRICE,
    originalPrice: NORMAL_PRICE,
    discount: DISCOUNT_PERCENT,
  },
  {
    id: 'slot-7',
    title: 'Taman Gelap? Ini Solusinya!',
    category: 'Edukasi Produk',
    originalFilename: 'An_NHxpgMD-MjHOa5O-IObN1sYOEB9AQGkqXpQg8NqOZbRwyg_YN9hgfLmyeIjl2TEwHkF-V3LapNnLUNk7ZhXR3FPKf5imfDNimoS018IcD1crEqoxsqWo8TnIWg8f-a5Ml2pNfEBtCgun9f7FElgdL6L96NV5humqOOMJ03H7US5MCP8RRLzwAJzLDiSfcDYYkTg.jpeg',
    currentUrl: WOMAN_POINTING,
    caption: 'Mumpung — Keranjang Sekarang! Hemat energi dan memperindah suasana eksterior rumah',
    aspectRatio: 'portrait',
    price: PROMO_PRICE,
    originalPrice: NORMAL_PRICE,
    discount: DISCOUNT_PERCENT,
  },
  {
    id: 'slot-8',
    title: 'Ubah Gelap Jadi Estetik! Promo Terbatas ADL',
    category: 'Galeri Visual',
    originalFilename: 'An9_Z6EEK4igP3t_6hkTbo8fByzXFszEa-7Doq7Z9LOlIrlslls1qe_3T5J0DfYUMAIQMfr2ZptVEIJUMBDVtVd6T4YI0wK3BK8ePKjTDjFjwq37lKAhzJOUuhP3yx5wt1NAN_47eHzJJq-0LiF9yezvf0QC5W-YCQJVESlf_1mlBOJhN-oXnfDO3jpVT67CV0q09w.jpeg',
    currentUrl: HAND_ON_LAMP,
    caption: 'Cahaya warm white 3000K menyorot lembut bebatuan dan tanaman hias pekarangan',
    aspectRatio: 'portrait',
    price: PROMO_PRICE,
    originalPrice: NORMAL_PRICE,
    discount: DISCOUNT_PERCENT,
  },
  {
    id: 'slot-9',
    title: 'Taman Gelap Saat Malam? Solusinya',
    category: 'Penawaran',
    originalFilename: 'An814LATcG24WrncONQR1SvFlE3BSqwnC3T51R3wnGwdNKDp9lvL084VKHIzRib_zD6eLvFmrT0ZCoZElWkL6UpFqYjLTBZitBx33KfD49z3SeNLC4q-n7J-QnHYv9DbM4yLVlnMA0KiSwDX58lHHFdM3vmuTjZFEMf2B9kJMm_TnrWWrZ-sOh4l3b4MjSTMtMcb4jkvK3I.png',
    currentUrl: WOMAN_PRESENTING,
    caption: 'Mumpung! Keranjang Sekarang Sebelum Kehabisan Kuota Diskon Pengrajin ADL',
    aspectRatio: 'portrait',
    price: PROMO_PRICE,
    originalPrice: NORMAL_PRICE,
    discount: DISCOUNT_PERCENT,
  },
  {
    id: 'slot-10',
    title: 'Detail Finishing Kaca & Rangka Lampu',
    category: 'Keahlian Pengrajin',
    originalFilename: 'An8Zp7PgjQvC-DH6r-XN4yrphH9yM1ZAWh62DBde3ScA9ub3wujOXJOom6AhDrr0XZ3MwyqU6YjJ2VHeJjF2d_vNd5NWy2FxAYr-dXGYu_3VcuivNEJN4Sw8AM4J4Kp3SsZ2nFbFIs45jCqCz4kH3q-ZyjPVJ_MrDFuRSRsk44Z5Hj6aLsk0mVYdTruWaQA9zqNfNwnIFrs (1).png',
    currentUrl: HAND_ON_LAMP,
    caption: 'Kualitas handmade pengrajin Indonesia dengan cat oven anti karat dan kaca motif artistik',
    aspectRatio: 'portrait',
    price: PROMO_PRICE,
    originalPrice: NORMAL_PRICE,
    discount: DISCOUNT_PERCENT,
  },
  {
    id: 'slot-11',
    title: 'Ubah Taman Horor Jadi Estetik!',
    category: 'Penawaran',
    originalFilename: 'An8Zp7PgjQvC-DH6r-XN4yrphH9yM1ZAWh62DBde3ScA9ub3wujOXJOom6AhDrr0XZ3MwyqU6YjJ2VHeJjF2d_vNd5NWy2FxAYr-dXGYu_3VcuivNEJN4Sw8AM4J4Kp3SsZ2nFbFIs45jCqCz4kH3q-ZyjPVJ_MrDFuRSRsk44Z5Hj6aLsk0mVYdTruWaQA9zqNfNwnIFrs.png',
    currentUrl: WOMAN_POINTING,
    caption: 'Cek Promo & Beli Sekarang! Produk asli ADL dengan garansi aman sampai tujuan',
    aspectRatio: 'portrait',
    price: PROMO_PRICE,
    originalPrice: NORMAL_PRICE,
    discount: DISCOUNT_PERCENT,
  },
];

export const PRODUCT_SPECIFICATIONS = [
  { label: 'Harga Promo Spesial', value: `${PROMO_PRICE} (Diskon ${DISCOUNT_PERCENT}, Hemat ${SAVINGS_AMOUNT})` },
  { label: 'Harga Normal Toko', value: NORMAL_PRICE },
  { label: 'Nama Produk', value: 'Lampu Taman Minimalis 1 Meter (ADL Series)' },
  { label: 'Tinggi Total', value: '100 cm (1 Meter Proporsional)' },
  { label: 'Ukuran Kap Lentera', value: '16 cm x 16 cm x 28 cm' },
  { label: 'Bahan Material', value: 'Plat Besi Tebal + Cat Oven Powder Coating Anti-Karat' },
  { label: 'Material Kaca', value: 'Kaca Es Bertekstur (Menyebarkan cahaya hangat tanpa menyilaukan)' },
  { label: 'Fitting Lampu', value: 'Standard Keramik E27 (Universal, mudah ganti bohlam)' },
  { label: 'Tipe Bohlam', value: 'Kompatibel LED Bulb 3W-12W / Bohlam Edison Vintage / Solar' },
  { label: 'Ketahanan Cuaca', value: 'Waterproof Outdoor IP65 (Aman hujan deras & panas terik)' },
  { label: 'Metode Pemasangan', value: 'Dilengkapi plat dudukan bawah siap baut / dynabolt ke cor atau tanah' },
  { label: 'Garansi', value: 'Garansi Pengiriman 100% Pecah/Rusak Langsung Diganti Baru' },
];

export const FREQUENTLY_ASKED_QUESTIONS = [
  {
    question: 'Berapa harga promo lampu taman ADL dan berapa diskonnya?',
    answer:
      `Saat ini sedang berlangsung Promo Spesial Diskon ${DISCOUNT_PERCENT}! Dari harga normal ${NORMAL_PRICE}, kini Anda bisa mendapatkan Lampu Hias Taman Minimalis 1M ADL hanya dengan ${PROMO_PRICE} (Hemat ${SAVINGS_AMOUNT}). Promo ini berlaku terbatas untuk pemesanan langsung di toko resmi Shopee kami.`,
  },
  {
    question: 'Apakah lampu ini aman terkena hujan lebat terus menerus?',
    answer:
      'Sangat aman! Lampu taman ADL dirancang khusus untuk penggunaan outdoor luar ruangan dengan rating tahan air (Waterproof). Rangka kap lentera melindungi bohlam dan fitting dari tampias air hujan deras.',
  },
  {
    question: 'Berapa tinggi lampu dan apakah sudah termasuk tiangnya?',
    answer:
      'Tinggi keseluruhan adalah 1 Meter (100 cm). Paket sudah lengkap tiang kokoh dan kap lentera bagian atas. Sangat proporsional untuk taman depan, samping jalan setapak, maupun taman belakang.',
  },
  {
    question: 'Apakah bohlamnya mudah dicari jika sewaktu-waktu ingin diganti?',
    answer:
      'Sangat mudah! Menggunakan fitting ulir E27 standar yang dipakai di seluruh rumah tangga Indonesia. Anda bisa memasang lampu LED Philips, bohlam filamen Edison warna warm white, atau bohlam pintar RGB sesuai selera.',
  },
  {
    question: 'Bagaimana keamanan pengiriman ke luar kota / luar pulau?',
    answer:
      'Kami menerapkan standar keamanan pengiriman ekstra ketat: dibungkus bubble wrap tebal berlapis dan opsi packing kayu untuk pengiriman jarak jauh. Jika ada kaca yang retak atau rusak di perjalanan, kami ganti baru!',
  },
  {
    question: 'Apakah bisa bayar di tempat (COD) lewat Shopee?',
    answer:
      'Bisa! Toko resmi kami di Shopee mendukung sistem pembayaran COD (Bayar di Tempat), SPayLater, transfer bank, hingga gratis ongkir XTRA.',
  },
];
