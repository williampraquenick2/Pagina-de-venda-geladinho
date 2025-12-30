import React from 'react';

const CTA: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sticky bottom-0 w-full bg-white/80 backdrop-blur-md border-t border-gray-100 p-4 md:p-6 z-50 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="hidden md:block">
        <p className="font-black text-gray-900 text-xl uppercase">Sacolé Lucrativo™ <span className="text-pink-600 text-sm ml-2">vagas limitadas</span></p>
        <p className="text-sm text-gray-500">Carnaval 2026: Comece seu lucro hoje!</p>
      </div>
      <button 
        onClick={scrollToOffer}
        className="w-full md:w-auto bg-pink-600 text-white font-black px-12 py-4 rounded-xl text-lg uppercase shadow-lg hover:bg-pink-700 transition-all animate-pulse"
      >
        Garanta sua vaga por R$ 19,90
      </button>
    </div>
  );
};

export default CTA;