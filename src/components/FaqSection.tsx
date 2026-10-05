import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShoppingBag } from 'lucide-react';
import { FREQUENTLY_ASKED_QUESTIONS, SHOPEE_PRODUCT_URL } from '../data/productData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#090c10] border-t border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400 mb-2">
            Pertanyaan Umum
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Semua hal yang perlu Anda ketahui seputar produk Lampu Taman Minimalis ADL sebelum membeli di Shopee.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FREQUENTLY_ASKED_QUESTIONS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
          <p className="text-xs sm:text-sm text-slate-300">
            Masih ada pertanyaan lain seputar instalasi atau custom pesanan?
          </p>
          <a
            href={SHOPEE_PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#EE4D2D] hover:underline"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Chat Penjual Langsung di Shopee</span>
          </a>
        </div>

      </div>
    </section>
  );
};
