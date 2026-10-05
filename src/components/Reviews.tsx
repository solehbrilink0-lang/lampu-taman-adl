import React, { useState } from 'react';
import { Star, CheckCircle, ThumbsUp, ShoppingBag, MessageSquareQuote, Tag } from 'lucide-react';
import { CUSTOMER_REVIEWS, SHOPEE_PRODUCT_URL, PROMO_PRICE, NORMAL_PRICE, DISCOUNT_PERCENT } from '../data/productData';

export const Reviews: React.FC = () => {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');

  const filteredReviews = filterRating === 'all'
    ? CUSTOMER_REVIEWS
    : CUSTOMER_REVIEWS.filter((r) => r.rating === filterRating);

  return (
    <section id="ulasan" className="py-20 bg-[#090c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400 mb-2">
            Kepuasan Pelanggan
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
            Ulasan Bintang Lima Dari Pembeli Asli
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Cerita langsung dari para pemilik rumah yang telah merasakan transformasi taman mereka setelah memasang Lampu Taman Minimalis ADL.
          </p>
        </div>

        {/* Aggregate Score & Trust Metric Card */}
        <div className="mb-12 rounded-3xl p-6 sm:p-8 bg-slate-900/60 border border-slate-800 shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            {/* Score */}
            <div className="flex flex-col items-center md:items-start pb-4 md:pb-0">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-white font-serif">4.9</span>
                <span className="text-sm text-slate-400">/ 5.0</span>
              </div>
              <div className="flex text-amber-400 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Berdasarkan 850+ ulasan terverifikasi di Shopee
              </p>
            </div>

            {/* Highlights */}
            <div className="md:px-6 py-4 md:py-0 space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>99% Pembeli Puas dengan Kerapian Bahan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Packing Kayu & Bubble Wrap Sangat Aman</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Efek Cahaya Warm White Sesuai Ekspektasi</span>
              </div>
            </div>

            {/* Shopee Verification Link & Promo Price */}
            <div className="md:pl-6 pt-4 md:pt-0 flex flex-col items-center md:items-start justify-center">
              <div className="flex items-baseline gap-2 mb-1.5">
                <span className="text-lg font-black text-amber-400 font-mono">{PROMO_PRICE}</span>
                <span className="text-xs text-slate-500 line-through font-mono">{NORMAL_PRICE}</span>
                <span className="px-1.5 py-0.5 rounded bg-red-600 text-white font-bold text-[10px]">{DISCOUNT_PERCENT}</span>
              </div>
              <p className="text-xs text-slate-400 mb-2">Lihat ulasan langsung di aplikasi:</p>
              <a
                href={SHOPEE_PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EE4D2D] hover:bg-[#d63f20] text-white text-xs font-bold shadow-md shadow-[#EE4D2D]/20 transition-all hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Beli di Shopee — {PROMO_PRICE}</span>
              </a>
            </div>

          </div>
        </div>

        {/* Review Cards Grid - Features Dewi, Nisa, Fatimah, Solihin, Aden, Rifki */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl p-6 bg-slate-900/60 border border-slate-800/90 hover:border-amber-500/30 transition-all duration-200 flex flex-col justify-between shadow-lg relative group"
            >
              <div>
                {/* Header: User avatar & rating */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-2xl ${rev.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-md`}
                    >
                      {rev.avatarText}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-base font-bold text-white">{rev.name}</h4>
                        {rev.verified && (
                          <span
                            className="text-[10px] text-emerald-400 font-medium inline-flex items-center gap-0.5"
                            title="Pembeli Terverifikasi Shopee"
                          >
                            <CheckCircle className="w-3 h-3 text-emerald-400" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400">{rev.location}</p>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Purchased Variant Tag */}
                <div className="mb-3.5 text-[11px] text-amber-400/90 font-medium bg-amber-500/5 px-2.5 py-1 rounded-lg border border-amber-500/15 inline-block">
                  Beli: {rev.purchasedVariant}
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-slate-300 leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              {/* Card Footer: Date & helpful count */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>{rev.date}</span>
                <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                  <ThumbsUp className="w-3 h-3 text-slate-400" />
                  <span>Membantu pembeli</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Review Footer Shopee Callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <MessageSquareQuote className="w-4 h-4 text-amber-400" />
            <span>Semua ulasan di atas diambil dari pembeli asli produk Lampu Taman ADL di Shopee.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
