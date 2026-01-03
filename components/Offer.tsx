
import React from 'react';

interface OfferProps {
  onPurchaseClick: () => void;
}

const Offer: React.FC<OfferProps> = ({ onPurchaseClick }) => {
  return (
    <section id="offer" className="py-16 md:py-24 px-4 bg-gray-950 text-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-orange-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div id="offer-card" className="bg-white text-gray-900 rounded-[3rem] p-6 md:p-16 text-center shadow-[0_40px_100px_rgba(0,0,0,0.5)] border-4 border-white/10 scroll-mt-20">
          
          <div className="inline-block bg-pink-100 text-pink-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            O QUE VOCÊ VAI RECEBER:
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-none text-gray-900">
            Acesso <span className="text-pink-600">Completo</span> e Imediato
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left mb-12">
            {[
              "🍹 +30 Receitas Alcoólicas Virais",
              "💵 Guia de Precificação Real",
              "📍 Mapa de Pontos de Venda",
              "🛒 Onde Comprar mais Barato",
              "❄️ Técnica de Conservação 12h",
              "🚀 Scripts de Abordagem Mestre",
              "🎁 Bônus: Planilha de Lucros",
              "🎁 Bônus: Grupo VIP 2026"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 group hover:border-pink-200 transition-colors">
                <span className="text-pink-600 font-bold text-lg leading-none">✔</span>
                <span className="text-sm md:text-base font-black text-gray-800 leading-tight">{item}</span>
              </div>
            ))}
          </div>

          <div className="mb-10 p-8 rounded-[2.5rem] bg-pink-50 border-2 border-pink-100 relative group">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-600 text-white px-6 py-1 rounded-full text-[10px] font-black uppercase shadow-lg">Oferta de Lançamento</div>
            <span className="text-lg text-gray-400 line-through font-bold block mb-1">De R$ 97,00</span>
            <div className="flex items-center justify-center gap-3 mb-2">
               <span className="text-7xl md:text-9xl font-black text-pink-600 leading-none tracking-tighter">R$ 9,90</span>
            </div>
            <span className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">Preço final • Pagamento único</span>
          </div>

          <button 
            onClick={onPurchaseClick}
            className="block w-full bg-pink-600 text-white font-black py-6 md:py-8 rounded-2xl text-xl md:text-4xl uppercase shadow-[0_10px_0_rgb(157,23,77)] hover:shadow-[0_4px_0_rgb(157,23,77)] hover:translate-y-[6px] active:shadow-none active:translate-y-[10px] transition-all mb-8 text-center border-2 border-pink-700 animate-pulse"
          >
            Quero começar agora!
          </button>

          <div className="flex flex-col items-center gap-4">
             <div className="flex flex-wrap items-center justify-center gap-4 opacity-40">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="grayscale h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="grayscale h-3" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="grayscale h-5" />
             </div>
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Acesso enviado instantaneamente para seu e-mail</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
