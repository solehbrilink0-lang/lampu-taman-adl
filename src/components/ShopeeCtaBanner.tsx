import React, { useState, useEffect } from 'react';
import { ShoppingBag, ArrowRight, Clock, ShieldCheck, Truck, Sparkles, Tag } from 'lucide-react';
import { SHOPEE_PRODUCT_URL, PROMO_PRICE, NORMAL_PRICE, DISCOUNT_PERCENT, SAVINGS_AMOUNT } from '../data/productData';
import confetti from 'canvas-confetti';

export const ShopeeCtaBanner: React.FC = () => {
  // Live countdown timer for scarcity and high conversion
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 48,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 3, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#EE4D2D', '#F59E0B', '#10B981'],
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#090c0f] via-[#15100e] to-[#0c0f14] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#EE4D2D]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EE4D2D]/15 border border-[#EE4D2D]/30 text-[#EE4D2D] text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Promo Terbatas Sentra Pengrajin ADL • Diskon {DISCOUNT_PERCENT}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif tracking-tight max-w-3xl mx-auto leading-tight">
          Ubah Taman Suram Jadi Estetik & Hangat Mulai Malam Ini!
        </h2>

        <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Jangan biarkan halaman rumah Anda gelap dan sepi. Klik tombol di bawah untuk langsung menuju halaman produk resmi kami di Shopee dengan harga diskon dan gratis ongkir!
        </p>

        {/* Prominent Promo Price Display Box */}
        <div className="mt-8 mb-6 inline-flex flex-col sm:flex-row items-center justify-center gap-3 p-4 sm:px-8 rounded-3xl bg-slate-900/90 border border-amber-500/40 shadow-2xl">
          <div className="flex items-baseline gap-3">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-400 font-mono tracking-tight">
              {PROMO_PRICE}
            </span>
            <span className="text-base sm:text-lg text-slate-400 line-through font-mono">
              {NORMAL_PRICE}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-red-600 text-white font-black text-xs sm:text-sm">
              {DISCOUNT_PERCENT}
            </span>
            <span className="text-xs sm:text-sm text-amber-300 font-semibold">
              (Hemat {SAVINGS_AMOUNT})
            </span>
          </div>
        </div>

        {/* Scarcity Countdown */}
        <div className="mb-8 block">
          <div className="inline-flex items-center gap-3 p-2.5 sm:px-6 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <Clock className="w-4 h-4" />
              <span>Promo Berakhir Dalam:</span>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-white text-sm sm:text-base font-bold">
              <span className="px-2 py-1 rounded-lg bg-slate-800 border border-slate-700">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-amber-400">:</span>
              <span className="px-2 py-1 rounded-lg bg-slate-800 border border-slate-700">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-amber-400">:</span>
              <span className="px-2 py-1 rounded-lg bg-slate-800 border border-slate-700">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Big CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <a
            href={SHOPEE_PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleConfetti}
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 text-base sm:text-lg font-black text-white bg-[#EE4D2D] hover:bg-[#d63f20] rounded-2xl shadow-2xl shadow-[#EE4D2D]/40 transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 text-center"
          >
            <ShoppingBag className="w-6 h-6" />
            <span>BELI SEKARANG DI SHOPEE — {PROMO_PRICE} ({DISCOUNT_PERCENT})</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </a>
        </div>

        {/* Safety & Delivery Badges */}
        <div className="mt-8 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-xs text-slate-300">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Garansi 100% Pecah Tukar Baru</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Truck className="w-4 h-4 text-amber-400" />
            <span>Bisa Bayar di Tempat (COD) Seluruh Indonesia</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShoppingBag className="w-4 h-4 text-[#EE4D2D]" />
            <span>Shopee Star Seller Terpercaya</span>
          </div>
        </div>

      </div>
    </section>
  );
};
