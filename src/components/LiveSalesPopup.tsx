import React, { useState, useEffect } from 'react';
import { ShoppingBag, CheckCircle, X, Tag } from 'lucide-react';
import { LIVE_PURCHASES, SHOPEE_PRODUCT_URL, CLOSEUP_IMAGE, PROMO_PRICE, DISCOUNT_PERCENT } from '../data/productData';

export const LiveSalesPopup: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // First appearance after 3 seconds of page landing
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    // Main interval: Every 10 seconds
    const intervalTimer = setInterval(() => {
      // Hide current popup
      setVisible(false);

      // Brief pause then show next buyer after a total of 10s cycle
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LIVE_PURCHASES.length);
        setVisible(true);
      }, 1000);
    }, 10000); // exactly 10 seconds as requested!

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, [dismissed]);

  // Auto-hide popup after 4.5 seconds of each display cycle
  useEffect(() => {
    if (visible) {
      const hideTimer = setTimeout(() => {
        setVisible(false);
      }, 4500);
      return () => clearTimeout(hideTimer);
    }
  }, [visible]);

  if (dismissed) return null;

  const currentPurchase = LIVE_PURCHASES[currentIndex];

  return (
    <div
      className={`fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40 max-w-sm w-[calc(100%-2rem)] sm:w-auto transition-all duration-500 ease-out transform ${
        visible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}
    >
      <div className="bg-slate-900/95 backdrop-blur-md border border-amber-500/40 rounded-2xl p-3.5 shadow-2xl shadow-black/80 flex items-center gap-3.5 relative">
        
        {/* Close Button */}
        <button
          onClick={() => {
            setVisible(false);
            setDismissed(true);
          }}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center text-xs shadow-md"
          title="Tutup Notifikasi"
          aria-label="Tutup notifikasi penjualan"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Thumbnail Image */}
        <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-950 border border-slate-700 shrink-0 relative">
          <img
            src={CLOSEUP_IMAGE}
            alt="Lampu Taman ADL"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-amber-500/10 pointer-events-none" />
        </div>

        {/* Purchase Info */}
        <div className="flex-1 min-w-0 pr-2">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-white truncate">
              {currentPurchase.buyerName}
            </span>
            <span className="text-[11px] text-slate-400 truncate">
              ({currentPurchase.location})
            </span>
            <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
          </div>

          <p className="text-[11px] text-slate-300 truncate mt-0.5">
            Baru saja membeli{' '}
            <strong className="text-amber-400">{currentPurchase.quantity}x</strong> Lampu ADL •{' '}
            <span className="text-emerald-400 font-mono font-bold">{PROMO_PRICE}</span>{' '}
            <span className="text-[9px] bg-red-600 text-white font-bold px-1 rounded">{DISCOUNT_PERCENT}</span>
          </p>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] text-slate-500 font-mono">
              {currentPurchase.timeAgo}
            </span>
            <span className="text-[10px] text-slate-600">•</span>
            <a
              href={SHOPEE_PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-semibold text-[#EE4D2D] hover:underline flex items-center gap-0.5"
            >
              <ShoppingBag className="w-2.5 h-2.5" />
              <span>Shopee Terverifikasi</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
