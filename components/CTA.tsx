
import React from 'react';

interface CTAProps {
  onPurchaseClick: () => void;
}

const CTA: React.FC<CTAProps> = ({ onPurchaseClick }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-100 p-3 md:p-5 z-[100] shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)] transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden md:block">
          <p className="font-black text-gray-900 text-xl uppercase leading-none">
            Sacolé Lucrativo™ 
            <span className="text-pink-600 text-[10px] ml-2 bg-pink-50 px-2 py-1 rounded">Vagas Limitadas</span>
          </p>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-tighter">Carnaval 2026: Comece seu lucro hoje!</p>
        </div>
        
        <button 
          onClick={onPurchaseClick}
          className="w-full md:w-auto bg-pink-600 text-white font-black px-6 py-4 md:px-12 md:py-4 rounded-xl text-base md:text-lg uppercase shadow-[0_5px_0_rgb(157,23,77)] hover:shadow-[0_2px_0_rgb(157,23,77)] hover:translate-y-[3px] active:shadow-none active:translate-y-[5px] transition-all animate-[pulse_3s_infinite] border-2 border-pink-700"
        >
          <span className="md:hidden">GARANTIR VAGA POR R$ 9,90</span>
          <span className="hidden md:inline">Garanta sua vaga por R$ 9,90</span>
        </button>
      </div>
    </div>
  );
};

export default CTA;
