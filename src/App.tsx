import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { PhotoGallery } from './components/PhotoGallery';
import { ProductSpecs } from './components/ProductSpecs';
import { Reviews } from './components/Reviews';
import { ShopeeCtaBanner } from './components/ShopeeCtaBanner';
import { FaqSection } from './components/FaqSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { LiveSalesPopup } from './components/LiveSalesPopup';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090c0f] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section displaying original unedited photo */}
        <Hero />

        {/* 2. Problem & Solution Section: Taman Suram vs Solusi Lampu ADL */}
        <ProblemSolution />

        {/* 3. Keunggulan: Harga Murah Pengrajin, Desain Estetik, Waterproof */}
        <Features />

        {/* 4. Kolom Foto & Media Produk: 11 Slot Media Promosi Asli */}
        <PhotoGallery />

        {/* 5. Spesifikasi Lengkap & Proporsi Tiang 1 Meter */}
        <ProductSpecs />

        {/* 6. Ulasan Bintang Lima: Dewi, Nisa, Fatimah, Solihin, Aden, Rifki */}
        <Reviews />

        {/* 7. Penawaran Spesial Promo Shopee & Scarcity Countdown */}
        <ShopeeCtaBanner />

        {/* 8. Tanya Jawab Pembeli (FAQ) */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Pop-up Pembeli Setiap 10 Detik: Dewi, Nisa, Fatimah, Solihin, Aden, Rifki */}
      <LiveSalesPopup />

      {/* Sticky Mobile Buy Bar (<15% mobile viewport) */}
      <StickyBottomBar />
    </div>
  );
}
