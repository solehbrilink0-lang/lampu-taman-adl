import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, Menu, X, ExternalLink, Tag } from 'lucide-react';
import { SHOPEE_PRODUCT_URL, PROMO_PRICE, NORMAL_PRICE, DISCOUNT_PERCENT } from '../data/productData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0f1318]/95 backdrop-blur-md border-b border-amber-950/40 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element Brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="ADL Lighting Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-serif group-hover:text-amber-400 transition-colors">
              ADL <span className="font-sans font-light text-amber-500 text-sm tracking-widest uppercase">Lighting</span>
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="#solusi"
              className="hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              Solusi Taman
            </a>
            <a
              href="#keunggulan"
              className="hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              Keunggulan
            </a>
            <a
              href="#galeri"
              className="hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              Galeri Foto
            </a>
            <a
              href="#spesifikasi"
              className="hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              Spesifikasi
            </a>
            <a
              href="#ulasan"
              className="hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              Ulasan Pembeli
            </a>
            <a
              href="#faq"
              className="hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              Tanya Jawab
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions with promo price */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-950/60 border border-red-800/60 text-xs">
              <span className="font-mono font-bold text-amber-400">{PROMO_PRICE}</span>
              <span className="font-mono text-slate-500 line-through text-[11px]">{NORMAL_PRICE}</span>
              <span className="px-1 py-0.2 bg-red-600 text-white font-extrabold text-[10px] rounded">{DISCOUNT_PERCENT}</span>
            </div>

            <a
              href={SHOPEE_PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#EE4D2D] hover:bg-[#d63f20] rounded-xl shadow-lg shadow-[#EE4D2D]/25 transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Beli di Shopee ({PROMO_PRICE})</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80 hidden sm:inline" />
            </a>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-800 flex flex-col gap-2.5">
            {/* Promo Price Callout for Mobile */}
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">Harga Promo Hari Ini:</span>
              <div className="flex items-baseline gap-1.5 font-mono">
                <span className="font-bold text-amber-400 text-sm">{PROMO_PRICE}</span>
                <span className="text-slate-500 line-through text-[11px]">{NORMAL_PRICE}</span>
                <span className="px-1 rounded bg-red-600 text-white font-bold text-[10px]">{DISCOUNT_PERCENT}</span>
              </div>
            </div>
            <a
              href="#solusi"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800/60 hover:text-amber-400 transition-colors text-sm"
            >
              Solusi Masalah Taman
            </a>
            <a
              href="#keunggulan"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800/60 hover:text-amber-400 transition-colors text-sm"
            >
              Keunggulan Produk
            </a>
            <a
              href="#galeri"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800/60 hover:text-amber-400 transition-colors text-sm"
            >
              Kolom Foto Produk (11 Media)
            </a>
            <a
              href="#spesifikasi"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800/60 hover:text-amber-400 transition-colors text-sm"
            >
              Spesifikasi & Ukuran
            </a>
            <a
              href="#ulasan"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800/60 hover:text-amber-400 transition-colors text-sm"
            >
              Ulasan Pembeli Bintang 5
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800/60 hover:text-amber-400 transition-colors text-sm"
            >
              Tanya Jawab (FAQ)
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
