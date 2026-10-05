import React from 'react';
import { Tag, Sparkles, Ruler, CloudRain, Cpu, ShieldCheck, ShoppingBag, ArrowRight } from 'lucide-react';
import { SHOPEE_PRODUCT_URL, CLOSEUP_IMAGE, PROMO_PRICE, NORMAL_PRICE, DISCOUNT_PERCENT, SAVINGS_AMOUNT } from '../data/productData';

export const Features: React.FC = () => {
  const featuresList = [
    {
      icon: Tag,
      title: 'Harga Murah Langsung Pengrajin',
      description:
        `Diproduksi langsung oleh sentra pengrajin ADL di Indonesia tanpa perantara toko mall mahal. Dapatkan harga promo ${PROMO_PRICE} (Diskon ${DISCOUNT_PERCENT} dari ${NORMAL_PRICE}, hemat ${SAVINGS_AMOUNT})!`,
      accent: 'text-amber-400',
      badge: `Promo ${DISCOUNT_PERCENT}`,
    },
    {
      icon: Sparkles,
      title: 'Desain Minimalis & Estetik',
      description:
        'Bentuk lentera geometris modern dengan rangka hitam elegan. Mempercantik visual taman di siang hari dan memberikan pendaran cahaya hangat mewah di malam hari.',
      accent: 'text-yellow-400',
      badge: 'Desain Mewah',
    },
    {
      icon: Ruler,
      title: 'Tinggi Pas 1 Meter (100 cm)',
      description:
        'Tinggi optimal untuk menyinari area setapak, rumpun tanaman hias, dan rerumputan tanpa menghalangi pandangan jendela atau menyilaukan mata.',
      accent: 'text-emerald-400',
      badge: 'Proporsi Ideal',
    },
    {
      icon: CloudRain,
      title: 'Tahan Hujan & Cuaca Tropis (Waterproof)',
      description:
        'Lapisan cat oven powder coating anti-karat dengan kap penutup kedap air hujan. Aman dipasang outdoor terkena panas terik maupun hujan lebat bertahun-tahun.',
      accent: 'text-blue-400',
      badge: 'Outdoor IP65',
    },
    {
      icon: Cpu,
      title: 'Fitting Universal E27 & Hemat Energi',
      description:
        'Menggunakan fitting keramik standar E27. Bebas pilih bohlam LED hemat energi (cukup 4-7 Watt) sehingga listrik rumah tetap irit dan hemat bulanan.',
      accent: 'text-violet-400',
      badge: 'Hemat Listrik',
    },
    {
      icon: ShieldCheck,
      title: 'Garansi 100% Pecah Ganti Baru',
      description:
        'Pengemasan super aman berlapis kardus tebal dan opsi packing kayu. Jika ada bagian kaca atau tiang yang rusak di jalan, langsung kami ganti baru!',
      accent: 'text-rose-400',
      badge: 'Belanja Tenang',
    },
  ];

  return (
    <section id="keunggulan" className="py-20 bg-[#090c0f] relative overflow-hidden">
      {/* Decorative background aura */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400 mb-2">
            Kenapa Memilih ADL?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
            Keunggulan Utama Lampu Taman ADL
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Perpaduan sempurna antara harga murah yang terjangkau, keindahan estetika arsitektur, dan ketahanan material bertahun-tahun.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuresList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl p-7 bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 shadow-lg hover:shadow-amber-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-amber-400 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  <span>Keunggulan Terbukti</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner with Close-up Asset & Direct CTA */}
        <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900/90 to-slate-950 p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-slate-800 shadow-xl max-h-64">
              <img
                src={CLOSEUP_IMAGE}
                alt="Detail Fisik Lampu Hias Minimalis ADL"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold">
                <span>Penawaran Langsung Pengrajin • Diskon {DISCOUNT_PERCENT}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                Jangan Tunda Lagi, Percantik Taman Rumah Anda Malam Ini!
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Stok promo terbatas langsung dari sentra produksi ADL. Dapatkan harga termurah, voucher diskon toko, dan kemudahan pembayaran COD hanya di Shopee.
              </p>

              {/* Promo Price Callout in Feature Banner */}
              <div className="flex items-baseline gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-amber-500/30 w-fit">
                <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">{PROMO_PRICE}</span>
                <span className="text-xs sm:text-sm text-slate-500 line-through font-mono">{NORMAL_PRICE}</span>
                <span className="px-2 py-0.5 bg-red-600 text-white font-bold text-xs rounded-full">{DISCOUNT_PERCENT}</span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <a
                  href={SHOPEE_PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-[#EE4D2D] hover:bg-[#d63f20] rounded-xl shadow-lg shadow-[#EE4D2D]/30 transition-all transform hover:-translate-y-0.5 text-center"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>BELI SEKARANG DI SHOPEE — {PROMO_PRICE} ({DISCOUNT_PERCENT})</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Pembayaran Aman & Verifikasi Resmi Shopee</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
