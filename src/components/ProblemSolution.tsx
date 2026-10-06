import React, { useState, useEffect } from 'react';
import { AlertCircle, Sparkles, CheckCircle2, ArrowRight, ShieldAlert, Moon, HeartHandshake, Tag } from 'lucide-react';
import { WOMAN_POINTING, SHOPEE_PRODUCT_URL, PROMO_PRICE, NORMAL_PRICE, DISCOUNT_PERCENT } from '../data/productData';
import { getPhoto } from '../utils/imageStore';

interface Props {
  refreshTrigger?: number;
}

export const ProblemSolution: React.FC<Props> = ({ refreshTrigger }) => {
  const [solusiImg, setSolusiImg] = useState<string>(WOMAN_POINTING);

  useEffect(() => {
    const loadPhoto = async () => {
      const customPhoto = await getPhoto('solusi-photo');
      if (customPhoto) {
        setSolusiImg(customPhoto);
      } else {
        const slot3Photo = await getPhoto('slot-3');
        if (slot3Photo) {
          setSolusiImg(slot3Photo);
        } else {
          setSolusiImg(WOMAN_POINTING);
        }
      }
    };
    loadPhoto();
  }, [refreshTrigger]);

  return (
    <section id="solusi" className="py-20 bg-[#0d1015] border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400 mb-2">
            Perbandingan Nyata
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
            Kenapa Taman Rumah Anda Terasa Begitu Berbeda Saat Malam?
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Siang hari taman terlihat asri dengan bunga mekar. Tapi begitu matahari terbenam, halaman rumah seketika menjadi gelap, suram, bahkan terkesan horor.
          </p>
        </div>

        {/* Side-by-side Contrast Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-14">
          
          {/* Box 1: Masalah Taman Gelap (The Pain) */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-red-950/20 via-slate-900/40 to-slate-900/60 border border-red-900/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Sebelum Pakai ADL</span>
                  <h3 className="text-xl font-bold text-white">Taman Gelap, Suram & Horor</h3>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-100">Kesan Horor & Menakutkan:</strong> Halaman rumah gelap gulita saat maghrib, bikin segan dan takut melintas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-100">Anak-Anak Takut Keluar:</strong> Ruang terbuka hijau di rumah jadi sia-sia karena tidak bisa dinikmati di malam hari.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-100">Rawan Bahaya & Hewan Malam:</strong> Sudut yang remang-remang rawan tersandung batu taman atau jadi sarang hewan malam.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-100">Rumah Terlihat Sepi & Mati:</strong> Dari depan pagar, rumah tampak tidak berpenghuni dan kurang berkarakter.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-red-950/60 flex items-center gap-2 text-xs text-red-300 font-medium">
              <Moon className="w-4 h-4 text-red-400" />
              <span>Jangan biarkan halaman rumah Anda terbengkalai dalam kegelapan.</span>
            </div>
          </div>

          {/* Box 2: Solusi Lampu ADL (The Pleasure & Relief) */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-amber-950/30 via-slate-900/60 to-slate-900/80 border border-amber-500/40 shadow-xl shadow-amber-500/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Solusi Nyata Kami</span>
                  <h3 className="text-xl font-bold text-white">Lampu Taman ADL: Hangat & Estetik</h3>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-amber-200">Suasana Ala Resort & Villa:</strong> Pendaran cahaya warm white menyebar lembut di tanaman dan jalan setapak, menciptakan suasana rileks.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-amber-200">Tempat Ngopi Favorit Keluarga:</strong> Taman menjadi ruang kumpul yang hidup, nyaman untuk santai melepas penat sepulang kerja.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-amber-200">Aman & Terang Terpantau:</strong> Melangkah di halaman jadi tenang tanpa khawatir tersandung, bebas dari sudut gelap mencurigakan.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-amber-200">Menaikkan Estetika Rumah:</strong> Desain lentera minimalis 1 meter membuat rumah terlihat mewah dan terawat dari luar.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-amber-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-300 font-medium">
                  <HeartHandshake className="w-4 h-4 text-amber-400" />
                  <span>Investasi kenyamanan rumah impian.</span>
                </div>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-sm font-extrabold text-amber-400 font-mono">{PROMO_PRICE}</span>
                  <span className="text-[11px] text-slate-500 line-through font-mono">{NORMAL_PRICE}</span>
                  <span className="text-[9px] font-bold text-red-400 bg-red-950/80 px-1 rounded">{DISCOUNT_PERCENT}</span>
                </div>
              </div>
              <a
                href={SHOPEE_PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-white bg-[#EE4D2D] hover:bg-[#d63f20] px-4 py-2 rounded-xl transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Beli di Shopee — {PROMO_PRICE}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Visual Showcase Banner - Clean, Unedited Display */}
        <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/80 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 p-6 sm:p-10 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                Foto Asli Produk ADL
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                Perubahan Nyata: Taman Gelap Jadi Terang & Cantik
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tinggi tiang 1 meter dirancang secara presisi oleh pengrajin ADL agar arah cahaya menyorot optimal ke permukaan rumput dan bebatuan taman, tanpa menyilaukan mata yang memandang.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-amber-400 font-mono">{PROMO_PRICE}</span>
                  <span className="text-xs text-slate-500 line-through font-mono">{NORMAL_PRICE}</span>
                  <span className="text-[10px] font-bold text-red-400 bg-red-950/80 px-1.5 py-0.5 rounded border border-red-800/40">
                    {DISCOUNT_PERCENT}
                  </span>
                </div>
                <a
                  href={SHOPEE_PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#EE4D2D] hover:bg-[#d63f20] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all group"
                >
                  <span>Beli di Shopee — {PROMO_PRICE} ({DISCOUNT_PERCENT})</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Clean display of unedited photo */}
            <div className="md:col-span-7 bg-black p-4 flex items-center justify-center">
              <img
                src={solusiImg}
                alt="Foto Asli Lampu Taman Minimalis ADL"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  if (!img.src.includes('woman_pointing_lamp')) {
                    img.src = '/images/woman_pointing_lamp_1791223788813.jpg';
                  }
                }}
                className="w-full max-h-[500px] object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
