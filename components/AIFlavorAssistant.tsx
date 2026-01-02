
import React from 'react';

const AIFlavorAssistant: React.FC = () => {
  const scrollToOffer = () => {
    const offerElement = document.getElementById('offer-card');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white p-6 md:p-12 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-white">
          
          {/* Cabeçalho da Seção */}
          <div className="text-center mb-12">
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 inline-block shadow-sm">
              ✨ Amostra Grátis
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tighter leading-none">
              Veja aqui uma amostra do que você vai <span className="text-pink-600">receber no ebook</span>
            </h2>
            <p className="text-gray-700 font-bold max-w-xl mx-auto leading-tight">
              Abaixo está uma version reduzida de uma das nossas receitas virais. No Ebook completo você terá acesso a <span className="text-pink-600">+30 estratégias completas.</span>
            </p>
          </div>

          <div className="animate-fade-in relative flex flex-col items-center">
            {/* Selo Reposicionado */}
            <div className="mb-4 bg-red-600 text-white px-5 py-1.5 rounded-full font-black text-[10px] uppercase shadow-lg border-2 border-white inline-block">
              Apenas um gostinho do que você vai adquirir
            </div>

            <div className="w-full relative bg-orange-50 border-[3px] border-orange-100 rounded-[2.5rem] overflow-hidden shadow-2xl">
              
              {/* Header do Exemplo (Estilo Capa de Ebook) */}
              <div className="carnival-gradient p-8 text-center text-white relative">
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]"></div>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight relative z-10 drop-shadow-md">
                  Morango Premium com Vodka & Chantilly
                </h3>
                <div className="mt-4 relative z-10 flex justify-center">
                  <span className="bg-white text-pink-600 px-4 py-1.5 rounded-full font-black text-[11px] uppercase tracking-wider shadow-lg border border-pink-100 flex items-center gap-2">
                    <span className="text-sm">📖</span> Extraído da Página 14 do Ebook
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                
                {/* Lado Esquerdo: Receita */}
                <div className="relative">
                  <h4 className="text-gray-900 font-black uppercase text-base mb-4 flex items-center gap-2">
                    <span className="w-7 h-7 bg-orange-200 text-orange-800 rounded-lg flex items-center justify-center text-[10px] font-black">01</span> Ingredientes Base
                  </h4>
                  <ul className="space-y-3 mb-8">
                    <li className="text-base font-black text-gray-900 flex items-center gap-2">
                      <span className="text-orange-500">●</span> 500g de Morangos Selecionados
                    </li>
                    <li className="text-base font-black text-gray-900 flex items-center gap-2">
                      <span className="text-orange-500">●</span> 200ml de Vodka de Boa Qualidade
                    </li>
                    <li className="text-base font-black text-gray-900 flex items-center gap-2">
                      <span className="text-orange-500">●</span> 1 Lata de Leite Condensado
                    </li>
                    <li className="text-gray-400 font-bold italic text-sm flex items-center gap-2">
                      <span className="text-gray-300">●</span> [Ingrediente Secreto Bloqueado]
                    </li>
                  </ul>

                  <h4 className="text-gray-900 font-black uppercase text-base mb-4 flex items-center gap-2">
                    <span className="w-7 h-7 bg-orange-200 text-orange-700 rounded-lg flex items-center justify-center text-[10px] font-black">02</span> Modo de Preparo
                  </h4>
                  <div className="space-y-4 relative">
                    <div className="flex gap-2">
                       <span className="text-orange-500 font-black text-lg leading-none">1.</span>
                       <p className="text-base text-gray-900 font-black leading-tight">
                        Higienize os morangos e bata no liquidificador com o leite condensado até obter um creme homogêneo...
                       </p>
                    </div>
                    <div className="flex gap-2">
                       <span className="text-orange-500 font-black text-lg leading-none">2.</span>
                       <p className="text-base text-gray-900 font-black leading-tight">
                        Adicione a vodka aos poucos e utilize a técnica da [PÁGINA 15] para garantir que o álcool não separe do...
                       </p>
                    </div>
                    
                    <div className="relative mt-6">
                       <div className="p-5 bg-white/60 backdrop-blur-[4px] border-2 border-dashed border-orange-200 rounded-2xl text-center">
                          <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest">
                            🔒 RESTANTE DO PROCESSO DISPONÍVEL NO EBOOK
                          </span>
                       </div>
                       <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-orange-50 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Lado Direito: Abordagem e Teaser */}
                <div className="flex flex-col gap-6">
                  <div className="bg-white p-6 rounded-3xl border-2 border-orange-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-pink-100 text-pink-600 px-3 py-1 text-[9px] font-black uppercase rounded-bl-xl">Script de Venda</div>
                    <h4 className="text-pink-600 font-black uppercase text-[10px] mb-3 tracking-widest">
                      Abordagem de Alto Impacto:
                    </h4>
                    <p className="text-lg font-black text-gray-900 italic leading-snug">
                      "Amigo, olha a cor desse Morango Premium! É o único dos blocos feito com a técnica de cremosidade absoluta..."
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-400 to-orange-400 p-6 rounded-3xl border-4 border-white shadow-xl relative overflow-hidden">
                     <div className="relative z-10 text-white">
                        <h4 className="text-black font-black uppercase text-[10px] mb-2 tracking-widest">
                          🚀 O PULO DO GATO
                        </h4>
                        <p className="font-black text-base text-black leading-tight mb-2">
                          Aqui vai o grande segredo que faz você lucrar até 4x mais:
                        </p>
                        <div className="blur-[6px] select-none text-black font-black text-sm">
                          Para o sacolé não congelar como uma pedra de gelo...
                        </div>
                     </div>
                     
                     <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5 backdrop-blur-[2px] cursor-pointer" 
                          onClick={scrollToOffer}>
                        <div className="bg-white text-black px-4 py-2 rounded-xl font-black text-[10px] uppercase shadow-2xl flex items-center gap-2 border-2 border-orange-400 hover:scale-105 transition-transform">
                          <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                          REVELAR NO EBOOK
                        </div>
                     </div>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-3xl text-center shadow-2xl mt-auto">
                    <p className="text-white font-black text-sm uppercase mb-4 leading-none">
                      Quer o método completo?
                    </p>
                    <button 
                      onClick={scrollToOffer}
                      className="w-full bg-pink-600 text-white py-4 rounded-2xl font-black text-base uppercase tracking-widest shadow-[0_5px_0_rgb(157,23,77)] hover:shadow-[0_2px_0_rgb(157,23,77)] hover:translate-y-[3px] active:shadow-none active:translate-y-[5px] transition-all border-2 border-pink-700"
                    >
                      Ebook por R$ 14,90
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-center mt-6 text-gray-500 text-[10px] font-black uppercase tracking-widest opacity-80">
              ⚠️ Esta é uma amostra meramente ilustrativa da qualidade do material que você receberá.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFlavorAssistant;
