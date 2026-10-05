import React from 'react';
import { ShoppingBag, Star, ExternalLink } from 'lucide-react';
import { SHOPEE_PRODUCT_URL, PROMO_PRICE, NORMAL_PRICE, DISCOUNT_PERCENT } from '../data/productData';

export const StickyBottomBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c0f13]/95 backdrop-blur-md border-t border-amber-950/60 p-2.5 px-4 shadow-2xl">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm font-black text-amber-400 font-mono">{PROMO_PRICE}</span>
            <span className="text-[11px] text-slate-500 line-through font-mono">{NORMAL_PRICE}</span>
            <span className="px-1 py-0.2 rounded bg-red-600 text-white font-extrabold text-[9px]">{DISCOUNT_PERCENT}</span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[10px] text-slate-300 truncate">Lampu Taman 1M ADL</span>
            <span className="text-[10px] text-emerald-400 font-semibold">• COD</span>
          </div>
        </div>

        <a
          href={SHOPEE_PRODUCT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#EE4D2D] hover:bg-[#d63f20] text-white text-xs font-bold rounded-xl shadow-lg shadow-[#EE4D2D]/30 shrink-0 active:scale-95 transition-all"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Beli di Shopee</span>
          <ExternalLink className="w-3 h-3 opacity-80" />
        </a>
      </div>
    </div>
  );
};
