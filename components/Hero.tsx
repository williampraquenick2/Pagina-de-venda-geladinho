
import React from 'react';

const Hero: React.FC = () => {
  const scrollToOffer = () => {
    const offerElement = document.getElementById('offer-card');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-12 pb-20 px-4 overflow-hidden carnival-gradient">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
        <div className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold mb-6 animate-bounce shadow-lg uppercase tracking-wider">
          🔥 Carnaval 2027: Sua chance é agora
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight drop-shadow-md">
          Transforme o Carnaval em uma <span className="text-yellow-300">Fonte Real</span> de Renda Extra
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium opacity-90 leading-relaxed">
          Pare de apenas assistir as pessoas lucrarem nas ruas. Aprenda o método validado para vender 
          <strong> sacolés alcoólicos</strong> e colocar dinheiro no bolso rapidamente.
        </p>

        {/* Hero Image */}
        <div className="mb-10 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500">
          <img 
            src="https://i.imgur.com/PhP1qAO.jpeg" 
            alt="Sacolés Alcoólicos Lucrativos" 
            className="rounded-[2.5rem] shadow-2xl border-8 border-white/10 w-full object-cover aspect-video md:aspect-auto"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button 
            onClick={scrollToOffer}
            className="w-full md:w-auto px-10 py-5 bg-white text-pink-600 font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 uppercase tracking-wide cursor-pointer"
          >
            Quero lucrar no carnaval
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-semibold opacity-90">
          <div className="flex items-center justify-center gap-2">
            <span className="bg-white/20 p-2 rounded-full">✅</span>
            Investimento Inicial Baixo
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="bg-white/20 p-2 rounded-full">✅</span>
            Retorno Imediato
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="bg-white/20 p-2 rounded-full">✅</span>
            Passo a Passo Guiado
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;