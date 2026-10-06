import React, { useState, useEffect } from 'react';
import { ShoppingBag, Star, ShieldCheck, Zap, ArrowRight, Sparkles, CheckCircle2, Tag } from 'lucide-react';
import { WOMAN_PRESENTING, SHOPEE_PRODUCT_URL, PROMO_PRICE, NORMAL_PRICE, DISCOUNT_PERCENT, SAVINGS_AMOUNT } from '../data/productData';
import { getPhoto } from '../utils/imageStore';
import confetti from 'canvas-confetti';

interface HeroProps {
  refreshTrigger?: number;
}

export const Hero: React.FC<HeroProps> = ({ refreshTrigger }) => {
  const [heroImageSrc, setHeroImageSrc] = useState<string>(WOMAN_PRESENTING);
  const [isOriginalUserPhoto, setIsOriginalUserPhoto] = useState<boolean>(false);

  useEffect(() => {
    const loadHeroPhoto = async () => {
      const customPhoto = await getPhoto('hero-photo');
      if (customPhoto) {
        setHeroImageSrc(customPhoto);
        setIsOriginalUserPhoto(true);
      } else {
        const slot1Photo = await getPhoto('slot-1');
        if (slot1Photo) {
          setHeroImageSrc(slot1Photo);
          setIsOriginalUserPhoto(true);
        } else {
          setHeroImageSrc(WOMAN_PRESENTING);
          setIsOriginalUserPhoto(false);
        }
      }
    };
    loadHeroPhoto();
  }, [refreshTrigger]);

  const triggerShopeeClick = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#EE4D2D', '#F59E0B', '#10B981'],
    });
  };

  return (
    <section className="relative pt-6 pb-16 sm:pt-10 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#0a0d11] via-[#0e1217] to-[#12161c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Offer */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline / Micro-badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Solusi Taman Rumah Gelap Jadi Estetik & Mewah</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif leading-[1.15]">
              Taman Suram Pas Malam Hari?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
                Lampu Hias ADL Solusinya!
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Sulap halaman dan taman rumah Anda yang gelap menjadi hangat, nyaman, dan estetik layaknya villa berbintang. Dibuat langsung oleh pengrajin terampil dengan harga murah merakyat dan kualitas plat tebal tahan hujan.
            </p>

            {/* Promo Price Callout Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-slate-900 border border-amber-500/40 inline-flex flex-col sm:flex-row items-center sm:items-baseline gap-3 text-left">
              <div className="flex items-baseline gap-2.5">
                <span className="text-3xl sm:text-4xl font-black text-amber-400 font-mono tracking-tight">
                  {PROMO_PRICE}
                </span>
                <span className="text-base text-slate-400 line-through font-mono">
                  {NORMAL_PRICE}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white font-black text-xs">
                  {DISCOUNT_PERCENT}
                </span>
                <span className="text-xs text-amber-300 font-semibold">
                  (Hemat {SAVINGS_AMOUNT})
                </span>
              </div>
            </div>

            {/* Key Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 pb-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Harga Promo Murah</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Desain Estetik 1 Meter</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Waterproof Tahan Hujan</span>
              </div>
            </div>

            {/* CTAs and Shopee Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={SHOPEE_PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerShopeeClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-[#EE4D2D] hover:bg-[#d63f20] rounded-xl shadow-xl shadow-[#EE4D2D]/35 transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 text-center"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>BELI SEKARANG DI SHOPEE — {PROMO_PRICE} ({DISCOUNT_PERCENT})</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>

              <a
                href="#galeri"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors"
              >
                <span>Lihat Semua Foto ({DISCOUNT_PERCENT})</span>
              </a>
            </div>

            {/* Trust and Social Proof Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-slate-200">4.9 / 5.0</span>
                <span>(Ulasan Shopee)</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Garansi Pecah Ganti Baru</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Bisa Bayar di Tempat (COD)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Original Unedited Photo Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Clean Image Frame - No fake filters, no artificial text overlays */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-black">
                <img
                  src={heroImageSrc}
                  alt="Lampu Taman Minimalis ADL Asli"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (!img.src.includes('woman_presenting_lamp')) {
                      img.src = '/images/woman_presenting_lamp_1791223765077.jpg';
                    }
                  }}
                  className="w-full h-auto max-h-[580px] object-contain mx-auto"
                />

                {/* Status indicator on top */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-xl border border-white/20 text-[11px] font-semibold text-white flex items-center gap-1.5 shadow">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{isOriginalUserPhoto ? 'Foto Asli Pengrajin' : 'Foto Produk Asli ADL'}</span>
                </div>

                {/* Direct Shopee Quick Link at bottom with Promo Price */}
                <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-bold text-amber-400 font-mono">{PROMO_PRICE}</span>
                      <span className="text-[10px] text-slate-500 line-through font-mono">{NORMAL_PRICE}</span>
                      <span className="text-[9px] font-bold text-red-400 bg-red-950/80 px-1 rounded">{DISCOUNT_PERCENT}</span>
                    </div>
                  </div>
                  <a
                    href={SHOPEE_PRODUCT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-[#EE4D2D] hover:bg-[#d63f20] text-white text-xs font-bold rounded-lg flex items-center gap-1 shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Beli di Shopee ({PROMO_PRICE})</span>
                  </a>
                </div>
              </div>

              {/* Float badge 1: Harga Promo Rp228.888 */}
              <div className="absolute -top-3 -right-3 bg-slate-900/95 border border-amber-500/40 rounded-2xl p-2.5 shadow-xl backdrop-blur-md hidden sm:block">
                <div className="flex items-center gap-1.5">
                  <span className="px-1.5 py-0.5 bg-red-600 text-white font-black text-[10px] rounded">
                    {DISCOUNT_PERCENT}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold">Promo Spesial</span>
                </div>
                <p className="text-base font-bold text-white font-mono mt-0.5">{PROMO_PRICE}</p>
                <p className="text-[10px] text-slate-400 line-through font-mono">{NORMAL_PRICE}</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

