
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

interface SuggestionData {
  recipeName: string;
  ingredients: string[];
  partialSteps: string[];
  salesScript: string;
  profitSecretTeaser: string;
}

const AIFlavorAssistant: React.FC = () => {
  const [city, setCity] = useState('');
  const [favoriteFruit, setFavoriteFruit] = useState('');
  const [suggestion, setSuggestion] = useState<SuggestionData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateSuggestion = async () => {
    if (!city || !favoriteFruit) return;
    
    setIsLoading(true);
    setSuggestion(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Como um mestre de vendas do Carnaval 2026, crie uma estratégia de sacolé alcoólico para ${city} usando ${favoriteFruit}. 
        REGRAS DE RESPOSTA:
        1. Forneça a receita de forma INCOMPLETA (apenas os 2 primeiros passos).
        2. Crie uma abordagem de venda (salesScript) que comece MUITO impactante mas termine com reticências no meio de uma frase chave.
        3. No profitSecretTeaser, sugira um título de um segredo técnico (ex: 'O segredo da liga neutra' ou 'O tempo exato de congelamento').`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              recipeName: { type: Type.STRING },
              ingredients: { type: Type.ARRAY, items: { type: Type.STRING } },
              partialSteps: { type: Type.ARRAY, items: { type: Type.STRING } },
              salesScript: { type: Type.STRING },
              profitSecretTeaser: { type: Type.STRING }
            },
            required: ["recipeName", "ingredients", "partialSteps", "salesScript", "profitSecretTeaser"]
          }
        }
      });

      const data = JSON.parse(response.text || "{}") as SuggestionData;
      setSuggestion(data);
    } catch (error) {
      console.error("Erro:", error);
      alert("Houve um pequeno erro na folia. Tente novamente!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white p-6 md:p-12 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-white">
          <div className="text-center mb-10">
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 inline-block shadow-sm">
              ✨ Degustação Exclusiva do Método
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tighter leading-none">
              Veja aqui uma amostra do que você vai <span className="text-pink-600">receber no ebook</span>
            </h2>
            <p className="text-gray-700 font-semibold max-w-xl mx-auto leading-tight">
              Abaixo está uma versão reduzida. No Ebook completo você terá acesso a <span className="text-pink-600">+30 receitas, truques, dicas para você faturar de forma muito mais fácil.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <input 
              type="text" 
              placeholder="Sua Cidade" 
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-pink-500 bg-gray-50 outline-none text-lg transition-all font-bold placeholder:text-gray-300"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Fruta Preferida" 
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-pink-500 bg-gray-50 outline-none text-lg transition-all font-bold placeholder:text-gray-300"
              value={favoriteFruit}
              onChange={(e) => setFavoriteFruit(e.target.value)}
            />
          </div>

          <button 
            onClick={generateSuggestion}
            disabled={isLoading || !city || !favoriteFruit}
            className={`w-full py-6 rounded-2xl font-black text-xl uppercase transition-all shadow-xl flex items-center justify-center gap-3
              ${isLoading ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-pink-600 text-white hover:scale-[1.02] active:scale-95 shadow-pink-200'}
            `}
          >
            {isLoading ? 'ESTRUTURANDO SUA AMOSTRA...' : '🔥 GERAR PREVIEW DA MINHA ESTRATÉGIA'}
          </button>

          {suggestion && (
            <div className="mt-12 animate-fade-in relative">
              {/* Badge reduzido e reposicionado para não tampar a 'capa' */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1.5 rounded-full font-black text-[9px] uppercase z-20 shadow-lg border-2 border-white">
                Apenas um gostinho do que você vai receber
              </div>

              <div className="relative bg-orange-50 border-[3px] border-orange-100 rounded-[2.5rem] overflow-hidden shadow-2xl">
                {/* Header Premium com cores do site */}
                <div className="carnival-gradient p-8 text-center text-white relative">
                  <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]"></div>
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight relative z-10 drop-shadow-md">
                    {suggestion.recipeName}
                  </h3>
                  <div className="mt-3 flex flex-col gap-1 items-center relative z-10">
                    <span className="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-white font-bold text-[9px] uppercase tracking-[0.15em]">Método Sacolé Lucrativo™</span>
                    <span className="text-white font-black text-[10px] uppercase tracking-widest opacity-90 underline decoration-yellow-400 underline-offset-4">EXTRAÍDO DA PÁGINA 14 DO EBOOK</span>
                  </div>
                </div>

                <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Lado Esquerdo: Receita Cortada */}
                  <div className="relative">
                    <h4 className="text-gray-900 font-black uppercase text-base mb-4 flex items-center gap-2">
                      <span className="w-7 h-7 bg-orange-200 text-orange-700 rounded-lg flex items-center justify-center text-xs">01</span> Ingredientes base
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {suggestion.ingredients.map((ing, i) => (
                        <li key={i} className="text-base font-black text-gray-900 flex items-center gap-2">
                          <span className="text-orange-500">●</span> {ing}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-gray-900 font-black uppercase text-base mb-4 flex items-center gap-2">
                      <span className="w-7 h-7 bg-orange-200 text-orange-700 rounded-lg flex items-center justify-center text-xs">02</span> Modo de preparo
                    </h4>
                    <div className="space-y-4 relative">
                      {suggestion.partialSteps.map((step, i) => (
                        <div key={i} className="flex gap-3">
                           <span className="text-orange-400 font-black text-xl leading-none">{i + 1}.</span>
                           <p className="text-base text-gray-900 font-bold leading-tight">
                            {step}
                           </p>
                        </div>
                      ))}
                      
                      {/* Efeito de Corte e Desfoque */}
                      <div className="relative mt-6">
                         <div className="p-5 bg-white/60 backdrop-blur-[4px] border-2 border-dashed border-orange-200 rounded-2xl text-center">
                            <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest flex items-center justify-center gap-2">
                              🔒 ETAPAS 3, 4 E 5 BLOQUEADAS
                            </span>
                            <p className="text-[10px] text-gray-500 mt-2 font-bold">O modo de finalização é o que garante a cremosidade perfeita.</p>
                         </div>
                         <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-orange-50 to-transparent"></div>
                      </div>
                    </div>
                  </div>

                  {/* Lado Direito: Venda e Segredo */}
                  <div className="flex flex-col gap-6">
                    <div className="bg-white p-6 rounded-3xl border-2 border-orange-100 shadow-sm">
                      <h4 className="text-pink-600 font-black uppercase text-[10px] mb-3 tracking-widest flex items-center gap-2">
                        📣 Script de Abordagem Matador
                      </h4>
                      <p className="text-lg font-black text-gray-900 italic leading-snug">
                        "{suggestion.salesScript}"
                      </p>
                      <div className="mt-3 p-2 bg-gray-50 rounded-lg border border-dashed border-gray-200 text-center">
                         <span className="text-[9px] font-bold text-gray-400 uppercase">A frase de fechamento está no Ebook completo</span>
                      </div>
                    </div>

                    {/* SEÇÃO DO SEGREDO ALTAMENTE DESEJÁVEL */}
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-400 p-6 rounded-3xl border-4 border-white shadow-xl relative group overflow-hidden">
                       <div className="relative z-10 text-white">
                          <h4 className="text-black font-black uppercase text-xs mb-3 tracking-widest flex items-center gap-2">
                            🚀 ESTRATÉGIA DE ESCALA
                          </h4>
                          <p className="font-black text-lg text-black leading-tight mb-3">
                            Aqui vai o grande segredo que vai fazer você lucrar até 4x mais:
                          </p>
                          <div className="blur-[7px] select-none text-black/80 font-bold text-sm">
                            Pegue o {suggestion.profitSecretTeaser} e adicione exatamente 45ml de... Isso fará com que seu produto seja impossível de ignorar e o custo caia pela metade usando a técnica de...
                          </div>
                       </div>
                       
                       {/* Botão de Desbloqueio Intrigante */}
                       <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5 backdrop-blur-[2px] cursor-pointer" 
                            onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}>
                          <div className="bg-white text-black px-5 py-3 rounded-2xl font-black text-[12px] uppercase shadow-2xl flex items-center gap-3 border-2 border-orange-400 hover:scale-110 transition-transform">
                            <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                            DESBLOQUEAR ESTE SEGREDO
                          </div>
                       </div>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-3xl text-center shadow-2xl mt-auto">
                      <p className="text-white font-black text-sm uppercase mb-4 leading-none">
                        Gostou desse "gostinho"?
                      </p>
                      <button 
                        onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full bg-pink-600 text-white py-4 rounded-2xl font-black text-base uppercase tracking-widest hover:bg-pink-700 transition-all shadow-lg animate-pulse border-b-4 border-pink-800"
                      >
                        Quero meu ebook completo por 19,90
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-center mt-6 text-gray-500 text-[11px] font-black uppercase tracking-widest opacity-80">
                ⚠️ Essa é uma versão incompleta do ebook apenas para você sentir o gostinho do lucro real.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIFlavorAssistant;
