
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

  const cleanJsonResponse = (text: string) => {
    // Remove blocos de código markdown se existirem
    let cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return cleaned;
  };

  const generateSuggestion = async () => {
    if (!city || !favoriteFruit) return;
    
    setIsLoading(true);
    setSuggestion(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Como um mestre de vendas do Carnaval 2026, crie uma estratégia de sacolé alcoólico para ${city} usando ${favoriteFruit}. 
        REGRAS DE RESPOSTA (JSON APENAS):
        1. recipeName: Nome chamativo.
        2. ingredients: 4 a 5 itens.
        3. partialSteps: Apenas os 2 primeiros passos da receita.
        4. salesScript: Uma frase de abordagem que pare no meio com reticências...
        5. profitSecretTeaser: Nome de uma técnica secreta lucrativa.`,
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

      const text = response.text;
      if (!text) throw new Error("Sem resposta da IA");
      
      const cleaned = cleanJsonResponse(text);
      const data = JSON.parse(cleaned) as SuggestionData;
      setSuggestion(data);
    } catch (error) {
      console.error("Erro na geração:", error);
      alert("Houve um pequeno erro na folia. Tente novamente clicando no botão!");
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
            <p className="text-gray-700 font-bold max-w-xl mx-auto leading-tight">
              Abaixo está uma versão reduzida. No Ebook completo você terá acesso a <span className="text-pink-600">+30 receitas, truques e dicas para você faturar de forma muito mais fácil.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <input 
              type="text" 
              placeholder="Sua Cidade" 
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-pink-500 bg-gray-50 outline-none text-lg transition-all font-black placeholder:text-gray-300"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Fruta Preferida" 
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-pink-500 bg-gray-50 outline-none text-lg transition-all font-black placeholder:text-gray-300"
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
            <div className="mt-12 animate-fade-in relative flex flex-col items-center">
              {/* Selo Reduzido e Menos Intrusivo */}
              <div className="mb-4 bg-red-600 text-white px-5 py-1.5 rounded-full font-black text-[10px] uppercase shadow-lg border-2 border-white inline-block">
                Apenas um gostinho do que você vai adquirir
              </div>

              <div className="w-full relative bg-orange-50 border-[3px] border-orange-100 rounded-[2.5rem] overflow-hidden shadow-2xl">
                {/* Header Premium */}
                <div className="carnival-gradient p-8 text-center text-white relative">
                  <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]"></div>
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight relative z-10 drop-shadow-md">
                    {suggestion.recipeName}
                  </h3>
                  <div className="mt-2 flex flex-col items-center relative z-10">
                    <span className="text-white font-black text-[10px] uppercase tracking-widest opacity-90 underline decoration-yellow-400 underline-offset-4">
                      EXTRAÍDO DA PÁGINA 14 DO EBOOK
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Lado Esquerdo: Receita */}
                  <div className="relative">
                    <h4 className="text-gray-900 font-black uppercase text-base mb-4 flex items-center gap-2">
                      <span className="w-7 h-7 bg-orange-200 text-orange-700 rounded-lg flex items-center justify-center text-[10px] font-black">01</span> Ingredientes base
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {suggestion.ingredients.map((ing, i) => (
                        <li key={i} className="text-base font-black text-gray-900 flex items-center gap-2">
                          <span className="text-orange-500">●</span> {ing}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-gray-900 font-black uppercase text-base mb-4 flex items-center gap-2">
                      <span className="w-7 h-7 bg-orange-200 text-orange-700 rounded-lg flex items-center justify-center text-[10px] font-black">02</span> Modo de preparo
                    </h4>
                    <div className="space-y-4 relative">
                      {suggestion.partialSteps.map((step, i) => (
                        <div key={i} className="flex gap-2">
                           <span className="text-orange-400 font-black text-lg leading-none">{i + 1}.</span>
                           <p className="text-base text-gray-900 font-black leading-tight">
                            {step}
                           </p>
                        </div>
                      ))}
                      
                      {/* Efeito de Corte */}
                      <div className="relative mt-6">
                         <div className="p-5 bg-white/60 backdrop-blur-[4px] border-2 border-dashed border-orange-200 rounded-2xl text-center">
                            <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest">
                              🔒 ETAPAS RESTANTES BLOQUEADAS
                            </span>
                         </div>
                         <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-orange-50 to-transparent"></div>
                      </div>
                    </div>
                  </div>

                  {/* Lado Direito: Script e Segredo */}
                  <div className="flex flex-col gap-6">
                    <div className="bg-white p-6 rounded-3xl border-2 border-orange-100 shadow-sm relative overflow-hidden">
                      <h4 className="text-pink-600 font-black uppercase text-[10px] mb-3 tracking-widest">
                        Script de Venda Matador
                      </h4>
                      <p className="text-lg font-black text-gray-900 italic leading-snug">
                        "{suggestion.salesScript}"
                      </p>
                    </div>

                    {/* SEÇÃO DO SEGREDO */}
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-400 p-6 rounded-3xl border-4 border-white shadow-xl relative overflow-hidden">
                       <div className="relative z-10 text-white">
                          <h4 className="text-black font-black uppercase text-[10px] mb-2 tracking-widest">
                            🚀 ESTRATÉGIA DE ESCALA
                          </h4>
                          <p className="font-black text-base text-black leading-tight mb-2">
                            Aqui vai o grande segredo que vai fazer você lucrar até 4x mais:
                          </p>
                          <div className="blur-[6px] select-none text-black font-black text-sm">
                            Pegue o {suggestion.profitSecretTeaser} e adicione exatamente na hora que a calda... isso triplica o rendimento sem perder a cremosidade do...
                          </div>
                       </div>
                       
                       <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5 backdrop-blur-[2px] cursor-pointer" 
                            onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}>
                          <div className="bg-white text-black px-4 py-2 rounded-xl font-black text-[10px] uppercase shadow-2xl flex items-center gap-2 border-2 border-orange-400 hover:scale-105 transition-transform">
                            <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                            DESBLOQUEAR NO EBOOK
                          </div>
                       </div>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-3xl text-center shadow-2xl mt-auto">
                      <p className="text-white font-black text-sm uppercase mb-4 leading-none">
                        Gostou desse "gostinho"?
                      </p>
                      <button 
                        onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full bg-pink-600 text-white py-4 rounded-2xl font-black text-base uppercase tracking-widest hover:bg-pink-700 transition-all shadow-lg animate-pulse"
                      >
                        Quero meu ebook completo por 19,90
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-center mt-6 text-gray-500 text-[10px] font-black uppercase tracking-widest opacity-80">
                ⚠️ Essa é uma amostra incompleta do ebook apenas para você sentir o potencial de lucro.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIFlavorAssistant;
