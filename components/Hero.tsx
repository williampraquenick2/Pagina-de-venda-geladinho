
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  const scrollToOffer = () => {
    const offerElement = document.getElementById('offer-card');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const toggleAudio = () => {
    setIsMuted(false);
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center pt-8 pb-16 px-4 md:px-6 overflow-hidden carnival-gradient">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 md:w-96 md:h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
        <div className="inline-block bg-yellow-400 text-black px-4 py-1.5 rounded-full text-[10px] md:text-sm font-bold mb-4 md:mb-6 animate-bounce shadow-lg uppercase tracking-wider">
          🔥 Carnaval 2026: Sua chance é agora
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-black mb-4 md:mb-6 leading-tight drop-shadow-md px-2">
          No Carnaval até quem <span className="text-yellow-300">não sabe vender</span> vende
        </h1>
        
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-medium opacity-95 leading-snug md:leading-relaxed px-4">
          Sacolé alcoólico, pouco dinheiro pra começar e gente já pronta pra comprar. 
          O passo a passo simples pra faturar de <strong>2 a 3 mil reais</strong> e voltar pra casa com dinheiro no bolso.
        </p>

        {/* Hero Video Container */}
        <div className="mb-8 md:mb-10 max-w-sm md:max-w-2xl mx-auto transform hover:scale-[1.01] transition-transform duration-500 px-4 relative group">
          <div className="aspect-video w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white/20 bg-black/20 relative">
            
            <div className="absolute inset-0 z-20 cursor-default"></div>

            {isMuted && (
              <button 
                onClick={toggleAudio}
                className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-colors group/btn"
              >
                <div className="bg-white text-orange-600 px-6 py-3 rounded-full font-black text-sm md:text-base uppercase shadow-2xl flex items-center gap-3 animate-pulse group-hover/btn:scale-110 transition-transform">
                  <span className="text-xl">🔊</span>
                  Clique para Ativar o Áudio
                </div>
              </button>
            )}

            <iframe 
              src={`https://player.vimeo.com/video/1150857918?autoplay=1&muted=${isMuted ? '1' : '0'}&loop=1&controls=0&autopause=0&background=${isMuted ? '1' : '0'}&app_id=58479`} 
              className="w-full h-full scale-[1.05]" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              title="Sacolé Lucrativo™ - Vídeo Institucional"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-4 mb-10">
          <button 
            onClick={scrollToOffer}
            className="w-full md:w-auto px-10 py-5 md:px-14 md:py-6 bg-yellow-400 text-black font-black text-xl md:text-2xl rounded-2xl shadow-[0_8px_0_rgb(202,138,4)] hover:shadow-[0_4px_0_rgb(202,138,4)] hover:translate-y-[4px] active:shadow-none active:translate-y-[8px] transition-all uppercase tracking-tight cursor-pointer animate-[pulse_3s_infinite] border-2 border-yellow-500"
          >
            Quero fazer de 2 a 3 mil no Carnaval
          </button>
        </div>

        {/* Benefícios Atualizados - Menos transparentes e mais bonitos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 px-4 max-w-4xl mx-auto">
          <div className="bg-white p-3 md:p-5 rounded-2xl border-b-4 border-orange-200 shadow-xl flex items-center justify-center gap-3 text-[12px] md:text-[15px] font-extrabold text-gray-900 transform hover:-translate-y-1 transition-transform">
            <span className="text-orange-500 bg-orange-50 w-7 h-7 flex items-center justify-center rounded-full shadow-inner">✔️</span>
            Pouco dinheiro pra começar
          </div>
          <div className="bg-white p-3 md:p-5 rounded-2xl border-b-4 border-orange-200 shadow-xl flex items-center justify-center gap-3 text-[12px] md:text-[15px] font-extrabold text-gray-900 transform hover:-translate-y-1 transition-transform">
            <span className="text-orange-500 bg-orange-50 w-7 h-7 flex items-center justify-center rounded-full shadow-inner">✔️</span>
            Dinheiro entrando no mesmo dia
          </div>
          <div className="bg-white p-3 md:p-5 rounded-2xl border-b-4 border-orange-200 shadow-xl flex items-center justify-center gap-3 text-[12px] md:text-[15px] font-extrabold text-gray-900 transform hover:-translate-y-1 transition-transform">
            <span className="text-orange-500 bg-orange-50 w-7 h-7 flex items-center justify-center rounded-full shadow-inner">✔️</span>
            Passo a passo simples, sem enrolação
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
