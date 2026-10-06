import React from 'react';
import { ShoppingBag, Sparkles, MapPin, ShieldCheck, Heart, Settings } from 'lucide-react';
import { SHOPEE_PRODUCT_URL, PROMO_PRICE, NORMAL_PRICE, DISCOUNT_PERCENT } from '../data/productData';

interface FooterProps {
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer className="bg-[#07090c] border-t border-slate-800 text-slate-400 text-xs py-14 pb-24 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-bold text-xs">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="text-lg font-bold text-white font-serif tracking-tight">
                ADL <span className="text-amber-500 text-xs tracking-widest font-sans uppercase">Lighting</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Lighting Decorative Hand Made Indonesia. Menghadirkan lampu hias taman berkualitas, rangka plat besi kokoh anti-karat, dan desain minimalis elegan untuk hunian idaman Anda.
            </p>

            <div className="flex items-center gap-2 text-slate-400 text-xs pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Sentra Pengrajin Lampu Hias Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Navigasi Halaman</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#solusi" className="hover:text-amber-400 transition-colors">Solusi Masalah Taman</a></li>
              <li><a href="#keunggulan" className="hover:text-amber-400 transition-colors">Keunggulan Produk ADL</a></li>
              <li><a href="#galeri" className="hover:text-amber-400 transition-colors">Kolom Foto (11 Media)</a></li>
              <li><a href="#spesifikasi" className="hover:text-amber-400 transition-colors">Spesifikasi 1 Meter</a></li>
              <li><a href="#ulasan" className="hover:text-amber-400 transition-colors">Ulasan Pembeli Bintang 5</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Tanya Jawab (FAQ)</a></li>
            </ul>
          </div>

          {/* Official Store Shopee */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Toko Resmi Shopee</h4>
            <div className="flex items-baseline gap-2">
              <span className="text-base font-black text-amber-400 font-mono">{PROMO_PRICE}</span>
              <span className="text-xs text-slate-500 line-through font-mono">{NORMAL_PRICE}</span>
              <span className="px-1.5 py-0.5 rounded bg-red-600 text-white font-bold text-[10px]">{DISCOUNT_PERCENT}</span>
            </div>
            <p className="text-slate-400 text-xs">
              Dapatkan harga promo murah {PROMO_PRICE} ({DISCOUNT_PERCENT}), kupon diskon toko, serta pengiriman aman bergaransi dengan berbelanja langsung di toko Shopee kami.
            </p>

            <a
              href={SHOPEE_PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EE4D2D] hover:bg-[#d63f20] text-white font-bold text-xs shadow-md transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Beli di Shopee — {PROMO_PRICE}</span>
            </a>

            <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Garansi Shopee: Terima pesanan atau uang kembali</span>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <p>© {new Date().getFullYear()} ADL Lighting Decorative Hand Made Indonesia. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-1 text-slate-400">
              <span>Dibuat dengan dedikasi pengrajin lampu hias lokal</span>
              <Heart className="w-3 h-3 text-rose-500 fill-current inline" />
            </p>
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="opacity-40 hover:opacity-100 transition-opacity text-[10px] text-slate-400 hover:text-amber-400 inline-flex items-center gap-1 cursor-pointer"
                title="Mode Pemilik Toko: Atur & Simpan Foto Produk ke Server Publik"
              >
                <Settings className="w-3 h-3" />
                <span>Pengaturan Foto Server</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
