
import React from 'react';

const Hero: React.FC = () => {
  const scrollToOffer = () => {
    const offerElement = document.getElementById('offer-card');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center pt-8 pb-16 px-4 md:px-6 overflow-hidden carnival-gradient">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 md:w-96 md:h-96 bg-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
        <div className="inline-block bg-yellow-400 text-black px-4 py-1.5 rounded-full text-[10px] md:text-sm font-bold mb-4 md:mb-6 animate-bounce shadow-lg uppercase tracking-wider">
          🔥 Carnaval 2026: Sua chance é agora
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-black mb-4 md:mb-6 leading-tight drop-shadow-md px-2">
          Transforme o Carnaval em uma <span className="text-yellow-300">Fonte Real</span> de Renda Extra
        </h1>
        
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto font-medium opacity-90 leading-snug md:leading-relaxed px-4">
          Pare de apenas assistir as pessoas lucrarem nas ruas. Aprenda o método validado para vender 
          <strong> sacolés alcoólicos</strong> e colocar dinheiro no bolso rapidamente.
        </p>

        {/* Hero Video - Ajustado para usar o link de incorporação do Vimeo baseado no ID fornecido */}
        <div className="mb-8 md:mb-10 max-w-sm md:max-w-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-500 px-4">
          <div className="aspect-video w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white/20 bg-black/20">
            <iframe 
              src="https://player.vimeo.com/video/1150857918" 
              className="w-full h-full"
              frameBorder="0" 
              allow="autoplay; fullscreen" 
              allowFullScreen
              title="Sacolé Lucrativo™ - Vídeo"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-4">
          <button 
            onClick={scrollToOffer}
            className="w-full md:w-auto px-8 py-4 md:px-10 md:py-5 bg-white text-pink-600 font-black text-lg md:text-xl rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-wide cursor-pointer"
          >
            Quero lucrar no carnaval
          </button>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 text-[11px] md:text-sm font-bold opacity-90 px-4">
          <div className="flex items-center justify-center gap-2 bg-black/10 py-2 rounded-xl sm:bg-transparent">
            <span className="text-base">✅</span>
            Investimento Baixo
          </div>
          <div className="flex items-center justify-center gap-2 bg-black/10 py-2 rounded-xl sm:bg-transparent">
            <span className="text-base">✅</span>
            Retorno Imediato
          </div>
          <div className="flex items-center justify-center gap-2 bg-black/10 py-2 rounded-xl sm:bg-transparent">
            <span className="text-base">✅</span>
            Passo a Passo
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
