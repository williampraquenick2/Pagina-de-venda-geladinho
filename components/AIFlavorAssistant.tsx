
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
              Abaixo está uma versão reduzida de uma das nossas receitas virais. No Ebook completo você terá acesso a <span className="text-pink-600">+30 estratégias completas.</span>
            </p>
          </div>

          <div className="animate-fade-in relative flex flex-col items-center">
            {/* Selo Informativo */}
            <div className="mb-4 bg-red-600 text-white px-5 py-1.5 rounded-full font-black text-[10px] uppercase shadow-lg border-2 border-white inline-block">
              Conteúdo Exclusivo Aberto para Você
            </div>

            <div className="w-full relative bg-orange-50 border-[3px] border-orange-100 rounded-[2.5rem] overflow-hidden shadow-2xl">
              
              {/* Header do Exemplo */}
              <div className="carnival-gradient p-8 text-center text-white relative">
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]"></div>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight relative z-10 drop-shadow-md">
                  Morango Premium com Vodka & Chantilly
                </h3>
                <div className="mt-4 relative z-10 flex justify-center">
                  <span className="bg-white text-pink-600 px-4 py-1.5 rounded-full font-black text-[11px] uppercase tracking-wider shadow-lg border border-pink-100 flex items-center gap-2">
                    <span className="text-sm">📖</span> Conteúdo da Página 14
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
                    <li className="text-pink-600 font-black text-sm flex items-center gap-2 bg-pink-50 p-2 rounded-lg border border-pink-100">
                      <span className="text-lg leading-none">🔓</span> +1 Ingrediente Secreto no Ebook
                    </li>
                  </ul>

                  <h4 className="text-gray-900 font-black uppercase text-base mb-4 flex items-center gap-2">
                    <span className="w-7 h-7 bg-orange-200 text-orange-700 rounded-lg flex items-center justify-center text-[10px] font-black">02</span> Modo de Preparo
                  </h4>
                  <div className="space-y-4 relative">
                    <div className="flex gap-2">
                       <span className="text-orange-500 font-black text-lg leading-none">1.</span>
                       <p className="text-base text-gray-900 font-black leading-tight">
                        Higienize os morangos e bata no liquidificador com o leite condensado até obter um creme homogêneo.
                       </p>
                    </div>
                    <div className="flex gap-2">
                       <span className="text-orange-500 font-black text-lg leading-none">2.</span>
                       <p className="text-base text-gray-900 font-black leading-tight">
                        Adicione a vodka aos poucos utilizando a técnica de [TEMPERATURA IDEAL] para manter a textura cremosa.
                       </p>
                    </div>
                    
                    <div className="relative mt-6">
                       <div className="p-4 bg-white/80 border-2 border-dashed border-orange-200 rounded-2xl text-center">
                          <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">
                            🔥 PASSO 3 E 4 DISPONÍVEIS NO MÉTODO COMPLETO
                          </span>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Lado Direito: Abordagem e Teaser */}
                <div className="flex flex-col gap-6">
                  <div className="bg-white p-6 rounded-3xl border-2 border-orange-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-pink-100 text-pink-600 px-3 py-1 text-[9px] font-black uppercase rounded-bl-xl">Venda na Rua</div>
                    <h4 className="text-pink-600 font-black uppercase text-[10px] mb-3 tracking-widest">
                      Script de Venda Exemplo:
                    </h4>
                    <p className="text-lg font-black text-gray-900 italic leading-snug">
                      "Amigo, olha a cor desse Morango! É o único dos blocos feito com técnica artesanal, sem gelo no meio!"
                    </p>
                  </div>

                  {/* PULO DO GATO - AGORA COM BLOQUEIO VISUAL */}
                  <div className="bg-gradient-to-br from-yellow-300 to-orange-400 p-6 md:p-8 rounded-3xl border-4 border-white shadow-xl flex flex-col gap-4 relative overflow-hidden group">
                     <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-2xl"></div>
                     
                     <div className="relative z-10">
                        <h4 className="text-black font-black uppercase text-[12px] mb-2 tracking-widest flex items-center gap-2">
                          🚀 O PULO DO GATO PARA LUCRAR 4X MAIS
                        </h4>
                        
                        <p className="font-extrabold text-gray-900 text-base leading-tight mb-2">
                          Existe uma técnica de <span className="bg-black text-white px-1">Psicologia de Preço</span> que faz você vender isopor cheio em 40 minutos...
                        </p>
                        
                        {/* Area Bloqueada */}
                        <div className="relative">
                          <div className="blur-md select-none opacity-40 space-y-2 py-2">
                            <p className="text-xs font-bold text-gray-800">A estratégia consiste em nunca apresentar o preço individual antes de mostrar o benefício do combo de 5 unidades que gera um lucro líquido de 400% sobre o custo...</p>
                            <p className="text-xs font-bold text-gray-800">Além disso, o posicionamento do isopor deve seguir a regra dos 45 graus para atrair o olhar de quem está no meio da multidão sem precisar gritar...</p>
                          </div>
                          
                          {/* Overlay de Conteúdo Bloqueado */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-white/10 backdrop-blur-[2px] rounded-xl border-2 border-dashed border-orange-500/50">
                            <span className="text-3xl mb-1">🔒</span>
                            <p className="text-[11px] font-black text-orange-800 uppercase leading-none mb-1">
                              CONTEÚDO BLOQUEADO
                            </p>
                            <p className="text-[9px] font-bold text-gray-900 leading-tight">
                              Libere este segredo e as +30 receitas no Ebook completo.
                            </p>
                          </div>
                        </div>
                     </div>
                     
                     <button 
                        onClick={scrollToOffer}
                        className="relative z-10 w-full bg-black text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center gap-2 animate-bounce mt-2"
                      >
                        LIBERAR ACESSO AGORA
                      </button>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-3xl text-center shadow-2xl mt-auto border-b-4 border-pink-600">
                    <p className="text-white font-black text-sm uppercase mb-4 leading-none">
                      QUER AS +30 ESTRATÉGIAS?
                    </p>
                    <button 
                      onClick={scrollToOffer}
                      className="w-full bg-pink-600 text-white py-4 rounded-2xl font-black text-base uppercase tracking-widest shadow-[0_5px_0_rgb(157,23,77)] hover:shadow-[0_2px_0_rgb(157,23,77)] hover:translate-y-[3px] active:shadow-none active:translate-y-[5px] transition-all border-2 border-pink-700"
                    >
                      APENAS R$ 14,90
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-center mt-6 text-gray-500 text-[10px] font-black uppercase tracking-widest opacity-80">
              ⚠️ Esta é uma amostra reduzida. O Ebook contém 45 páginas de puro conteúdo prático.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFlavorAssistant;
