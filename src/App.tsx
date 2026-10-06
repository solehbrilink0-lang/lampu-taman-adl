import React, { useState, useEffect } from 'react';
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
import { AdminPhotoManager } from './components/AdminPhotoManager';
import { getAllPhotos } from './utils/imageStore';
import { Settings } from 'lucide-react';

export default function App() {
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    // Check if URL has ?admin=true or ?kelola=foto
    if (window.location.search.includes('admin') || window.location.search.includes('kelola')) {
      setAdminModalOpen(true);
    }

    // Auto-sync photos on load
    const syncOnLoad = async () => {
      const photos = await getAllPhotos();
      if (Object.keys(photos).length > 0) {
        setRefreshTrigger((prev) => prev + 1);
      }
    };
    syncOnLoad();
  }, []);

  return (
    <div className="min-h-screen bg-[#090c0f] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section displaying original unedited photo */}
        <Hero refreshTrigger={refreshTrigger} />

        {/* 2. Problem & Solution Section: Taman Suram vs Solusi Lampu ADL */}
        <ProblemSolution refreshTrigger={refreshTrigger} />

        {/* 3. Keunggulan: Harga Murah Pengrajin, Desain Estetik, Waterproof */}
        <Features />

        {/* 4. Kolom Foto & Media Produk: 11 Slot Media Promosi Asli */}
        <PhotoGallery refreshTrigger={refreshTrigger} />

        {/* 5. Spesifikasi Lengkap & Proporsi Tiang 1 Meter */}
        <ProductSpecs />

        {/* 6. Ulasan Bintang Lima: Dewi, Nisa, Fatimah, Solihin, Aden, Rifki */}
        <Reviews />

        {/* 7. Penawaran Spesial Promo Shopee & Scarcity Countdown */}
        <ShopeeCtaBanner />

        {/* 8. Tanya Jawab Pembeli (FAQ) */}
        <FaqSection />
      </main>

      {/* Footer with discreet owner button */}
      <Footer onOpenAdmin={() => setAdminModalOpen(true)} />

      {/* Pop-up Pembeli Setiap 10 Detik: Dewi, Nisa, Fatimah, Solihin, Aden, Rifki */}
      <LiveSalesPopup />

      {/* Sticky Mobile Buy Bar (<15% mobile viewport) */}
      <StickyBottomBar />

      {/* Modal Pengaturan Foto Khusus Pemilik Toko (Tersimpan Permanen ke Publik) */}
      <AdminPhotoManager
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        onPhotosUpdated={() => setRefreshTrigger((prev) => prev + 1)}
      />
    </div>
  );
}
