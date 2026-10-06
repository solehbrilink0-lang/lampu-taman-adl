import React, { useState, useEffect } from 'react';
import { PhotoSlot } from '../types';
import { INITIAL_PHOTO_SLOTS, SHOPEE_PRODUCT_URL, PROMO_PRICE, NORMAL_PRICE, DISCOUNT_PERCENT, SAVINGS_AMOUNT } from '../data/productData';
import { getAllPhotos } from '../utils/imageStore';
import { ZoomIn, X, ShoppingBag, Tag, ArrowRight } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [slots, setSlots] = useState<PhotoSlot[]>(INITIAL_PHOTO_SLOTS);
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [zoomSlot, setZoomSlot] = useState<PhotoSlot | null>(null);

  useEffect(() => {
    const loadSlots = async () => {
      const userPhotos = await getAllPhotos();
      setSlots((prev) =>
        prev.map((slot) => {
          const customImg = userPhotos[slot.id];
          return customImg ? { ...slot, currentUrl: customImg } : slot;
        })
      );
    };
    loadSlots();
  }, []);

  const categories = ['Semua', 'Poster Promosi', 'Edukasi Produk', 'Foto Produk', 'Penawaran'];

  const filteredSlots = activeCategory === 'Semua'
    ? slots
    : slots.filter((s) => s.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="galeri" className="py-20 bg-[#0b0e13] border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Price Highlights */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5" />
            <span>Promo Terbatas: Diskon {DISCOUNT_PERCENT} • Hemat {SAVINGS_AMOUNT}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
            Katalog 11 Foto Produk Asli ADL
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Dapatkan harga promo pengrajin spesial <strong className="text-amber-400 font-mono">{PROMO_PRICE}</strong> (Harga normal <span className="line-through text-slate-400 font-mono">{NORMAL_PRICE}</span>).
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of 11 Photo Slots with Price Tags on Every Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSlots.map((slot, index) => (
            <div
              key={slot.id}
              className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col shadow-lg"
            >
              {/* Image Preview Container */}
              <div
                className="relative aspect-[3/4] bg-black flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={() => setZoomSlot(slot)}
              >
                <img
                  src={slot.currentUrl}
                  alt={slot.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (!img.src.includes('woman_presenting_lamp')) {
                      img.src = '/images/woman_presenting_lamp_1791223765077.jpg';
                    }
                  }}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />

                {/* Slot Number Badge */}
                <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/20 text-[10px] font-mono text-white font-semibold">
                  Foto #{index + 1}
                </div>

                {/* Promo -21% Discount Tag */}
                <div className="absolute bottom-2.5 left-2.5 bg-red-600 text-white font-black text-[11px] px-2 py-0.5 rounded-md shadow-lg flex items-center gap-1">
                  <span>{DISCOUNT_PERCENT}</span>
                </div>

                {/* Zoom Overlay Button */}
                <div className="absolute top-2.5 right-2.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <div
                    className="p-1.5 rounded-lg bg-slate-900/90 text-slate-200 hover:text-white border border-slate-700 shadow-md flex items-center gap-1 text-[10px]"
                    title="Perbesar Foto"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Perbesar</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Info with Prominent Price Block */}
              <div className="p-3.5 flex flex-col justify-between flex-1 bg-slate-900/90 border-t border-slate-800">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-amber-400">
                      {slot.category}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-400">
                      Bisa COD
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white line-clamp-1 mb-1">
                    {slot.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                    {slot.caption}
                  </p>
                </div>

                {/* Exact Price Display on Every Card */}
                <div className="pt-2 border-t border-slate-800/80">
                  <div className="flex items-baseline justify-between mb-2.5">
                    <div>
                      <span className="text-base font-extrabold text-amber-400 font-mono">
                        {PROMO_PRICE}
                      </span>
                      <span className="text-xs text-slate-500 line-through font-mono ml-1.5">
                        {NORMAL_PRICE}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-red-400 bg-red-950/80 border border-red-800/60 px-1.5 py-0.5 rounded">
                      {DISCOUNT_PERCENT}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px]">
                    <button
                      onClick={() => setZoomSlot(slot)}
                      className="text-slate-400 hover:text-white inline-flex items-center gap-1"
                    >
                      <ZoomIn className="w-3 h-3 text-amber-400" />
                      <span>Detail</span>
                    </button>

                    <a
                      href={SHOPEE_PRODUCT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#EE4D2D] hover:bg-[#d63f20] text-white rounded-lg font-bold inline-flex items-center gap-1 transition-all shadow-sm active:scale-95"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Beli di Shopee</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Global CTA under gallery with Promo Price Callout */}
        <div className="mt-14 text-center p-8 rounded-3xl bg-slate-900/60 border border-amber-500/30 max-w-3xl mx-auto shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3">
            <span className="text-sm text-slate-300">Harga Promo Khusus Hari Ini:</span>
            <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">{PROMO_PRICE}</span>
            <span className="text-sm text-slate-500 line-through font-mono">{NORMAL_PRICE}</span>
            <span className="px-2 py-0.5 bg-red-600 text-white font-bold text-xs rounded-full">
              {DISCOUNT_PERCENT}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mb-5">
            Dapatkan garansi aman pengiriman sampai tujuan & gratis ongkir XTRA langsung di Shopee:
          </p>
          <a
            href={SHOPEE_PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-[#EE4D2D] hover:bg-[#d63f20] rounded-xl shadow-xl shadow-[#EE4D2D]/35 transition-all hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>BELI SEKARANG DI SHOPEE — {PROMO_PRICE} ({DISCOUNT_PERCENT})</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

      </div>

      {/* Modal: Lightbox Zoom View for Pure Image with Promo Price Banner */}
      {zoomSlot && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setZoomSlot(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomSlot(null)}
              className="absolute -top-12 right-0 text-slate-300 hover:text-white p-2"
              aria-label="Tutup foto"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={zoomSlot.currentUrl}
              alt={zoomSlot.title}
              referrerPolicy="no-referrer"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (!img.src.includes('woman_presenting_lamp')) {
                  img.src = '/images/woman_presenting_lamp_1791223765077.jpg';
                }
              }}
              className="max-h-[70vh] w-auto rounded-2xl object-contain shadow-2xl border border-slate-800 bg-black"
            />

            <div className="mt-4 text-center">
              <h4 className="text-lg font-bold text-white">{zoomSlot.title}</h4>
              <p className="text-xs text-slate-300 max-w-lg mt-1">{zoomSlot.caption}</p>
              
              {/* Promo price in zoom view */}
              <div className="mt-2.5 flex items-center justify-center gap-2">
                <span className="text-xl font-black text-amber-400 font-mono">{PROMO_PRICE}</span>
                <span className="text-xs text-slate-500 line-through font-mono">{NORMAL_PRICE}</span>
                <span className="text-xs font-bold text-red-400 bg-red-950 px-1.5 py-0.5 rounded border border-red-800/60">
                  {DISCOUNT_PERCENT}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-center gap-3">
                <a
                  href={SHOPEE_PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-[#EE4D2D] hover:bg-[#d63f20] text-white text-xs sm:text-sm font-bold rounded-xl inline-flex items-center gap-2 shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Beli Sekarang di Shopee — {PROMO_PRICE} ({DISCOUNT_PERCENT})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
