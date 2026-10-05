import React from 'react';
import { Ruler, ShieldCheck, Wrench, CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';
import { PRODUCT_SPECIFICATIONS, SHOPEE_PRODUCT_URL, PATHWAY_IMAGE, PROMO_PRICE, NORMAL_PRICE, DISCOUNT_PERCENT } from '../data/productData';

export const ProductSpecs: React.FC = () => {
  return (
    <section id="spesifikasi" className="py-20 bg-[#0c0f14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400 mb-2">
            Rincian & Ketahanan Produk
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
            Spesifikasi Lampu Taman Tiang 1 Meter ADL
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Dibuat dengan standar presisi tinggi, material plat besi kokoh anti keropos, dan fitting universal siap pakai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual & Dimension Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <img
                src={PATHWAY_IMAGE}
                alt="Instalasi Lampu Taman ADL di Jalan Setapak"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-amber-400 font-semibold uppercase">Proporsi Sempurna</span>
                    <h4 className="text-base font-bold text-white">Tinggi 1 Meter (100 cm)</h4>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                    <Ruler className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Ideal untuk pekarangan rumput, pot taman, jalan setapak, maupun pilar pagar.
                </p>
              </div>
            </div>

            {/* Quick installation points */}
            <div className="rounded-2xl p-5 bg-slate-900/50 border border-slate-800 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wide">
                <Wrench className="w-4 h-4" />
                <span>Pemasangan Sangat Mudah:</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Bagian bawah sudah dilengkapi plat dudukan dengan 3-4 lubang baut. Tinggal pasang dynabolt ke permukaan cor beton/paving block, atau ditancapkan ke tanah menggunakan angkur cor mini.
              </p>
            </div>
          </div>

          {/* Right Column: Specification Table & Value Props */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 overflow-hidden shadow-xl">
              <div className="p-5 sm:p-6 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Tabel Spesifikasi Teknis</h3>
                  <p className="text-xs text-slate-400">Informasi detail sebelum membeli</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                  Original ADL
                </span>
              </div>

              <div className="divide-y divide-slate-800/80">
                {PRODUCT_SPECIFICATIONS.map((spec, index) => (
                  <div
                    key={index}
                    className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm hover:bg-slate-800/20 transition-colors"
                  >
                    <span className="text-slate-400 font-medium sm:w-1/3">{spec.label}</span>
                    <span className="text-slate-100 font-semibold sm:w-2/3">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shopee Direct CTA Box with Promo Price */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#EE4D2D]/20 via-slate-900 to-slate-900 border border-[#EE4D2D]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#EE4D2D] uppercase tracking-wide">
                    Stok Siap Kirim Hari Ini
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-red-600 text-white font-black text-[10px]">
                    {DISCOUNT_PERCENT}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Dapatkan Harga Spesial Pengrajin di Shopee
                </h4>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xl font-black text-amber-400 font-mono">{PROMO_PRICE}</span>
                  <span className="text-xs text-slate-400 line-through font-mono">{NORMAL_PRICE}</span>
                  <span className="text-xs text-emerald-400 font-medium">• Bisa Bayar COD</span>
                </div>
              </div>

              <a
                href={SHOPEE_PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#EE4D2D] hover:bg-[#d63f20] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-[#EE4D2D]/25 transition-all transform hover:-translate-y-0.5 shrink-0"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Beli Sekarang — {PROMO_PRICE}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
