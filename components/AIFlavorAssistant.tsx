
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
    // Remove possíveis blocos de código markdown que a IA possa retornar
    return text.replace(/```json/g, '').replace(/```/g, '').trim();
  };

  const generateSuggestion = async () => {
    if (!city || !favoriteFruit) return;
    
    setIsLoading(true);
    setSuggestion(null);
    try {
      // Criando instância dentro da função para garantir que pegue o API_KEY mais atual
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Como um mestre de vendas do Carnaval 2026, crie uma estratégia de sacolé alcoólico para ${city} usando ${favoriteFruit}. 
        REGRAS OBRIGATÓRIAS:
        1. Forneça a receita de forma INCOMPLETA (apenas os 2 primeiros passos).
        2. salesScript: Crie uma abordagem matadora que comece com um gancho impossível de ignorar, mas que PARE no meio da frase mais importante com reticências...
        3. profitSecretTeaser: Coloque apenas o NOME de um ingrediente ou técnica secreta que faz a diferença.`,
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
      if (!text) throw new Error("Resposta vazia da IA");
      
      const cleanedJson = cleanJsonResponse(text);
      const data = JSON.parse(cleanedJson) as SuggestionData;
      setSuggestion(data);
    } catch (error) {
      console.error("Erro na geração:", error);
      alert("Ops! A folia travou. Verifique sua conexão ou tente novamente em alguns segundos.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white p-6 md:p-12 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-white">
          <div className="text-center mb-10">
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 inline-block shadow-sm">
              ✨ Degustação Exclusiva do Método
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tighter leading-none">
              Veja aqui uma amostra do que você vai <span className="text-pink-600">receber no ebook</span>
            </h2>
            <p className="text-gray-800 font-bold max-w-xl mx-auto leading-tight">
              Abaixo está uma versão reduzida. No Ebook completo você terá acesso a <span className="text-pink-600">+30 receitas, truques, dicas para você faturar de forma muito mais fácil.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <input 
              type="text" 
              placeholder="Sua Cidade" 
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-pink-500 bg-gray-50 outline-none text-lg transition-all font-black"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Fruta Preferida" 
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-pink-500 bg-gray-50 outline-none text-lg transition-all font-black"
              value={favoriteFruit}
              onChange={(e) => setFavoriteFruit(e.target.value)}
            />
          </div>

          <button 
            onClick={generateSuggestion}
            disabled={isLoading || !city || !favoriteFruit}
            className={`w-full py-6 rounded-2xl font-black text-xl uppercase transition-all shadow-xl flex items-center justify-center gap-3
              ${isLoading ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-pink-600 text-white hover:scale-[1.02] active:scale-95'}
            `}
          >
            {isLoading ? 'PREPARANDO SUA AMOSTRA...' : '🔥 GERAR PREVIEW DA MINHA ESTRATÉGIA'}
          </button>

          {suggestion && (
            <div className="mt-12 animate-fade-in relative flex flex-col items-center">
              {/* Selo reposicionado e reduzido */}
              <div className="mb-4 bg-red-600 text-white px-5 py-1.5 rounded-full font-black text-[10px] uppercase shadow-lg border-2 border-white inline-block">
                Apenas um gostinho do que você vai adquirir
              </div>

              <div className="w-full relative bg-orange-50 border-[3px] border-orange-200 rounded-[2.5rem] overflow-hidden shadow-2xl">
                {/* Header Estilo Capa */}
                <div className="carnival-gradient p-8 text-center text-white relative">
                  <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]"></div>
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight relative z-10 drop-shadow-md">
                    {suggestion.recipeName}
                  </h3>
                  <p className="relative z-10 font-black text-[11px] mt-2 uppercase tracking-[0.2em] text-yellow-300">
                    EXTRAÍDO DA PÁGINA 14 DO EBOOK
                  </p>
                </div>

                <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Lado Esquerdo: Receita com letras fortes */}
                  <div className="relative">
                    <h4 className="text-gray-900 font-black uppercase text-base mb-4 flex items-center gap-2">
                      <span className="w-7 h-7 bg-orange-200 text-orange-800 rounded flex items-center justify-center text-[11px]">01</span> Ingredientes base
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {suggestion.ingredients.map((ing, i) => (
                        <li key={i} className="text-base font-black text-gray-900 flex items-center gap-2">
                          <span className="text-orange-500">🔥</span> {ing}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-gray-900 font-black uppercase text-base mb-4 flex items-center gap-2">
                      <span className="w-7 h-7 bg-orange-200 text-orange-800 rounded flex items-center justify-center text-[11px]">02</span> Modo de preparo
                    </h4>
                    <div className="space-y-4 relative">
                      {suggestion.partialSteps.map((step, i) => (
                        <p key={i} className="text-base text-gray-900 font-black leading-tight flex gap-2">
                          <span className="text-orange-600">{i + 1}.</span> {step}
                        </p>
                      ))}
                      
                      {/* Efeito de Corte */}
                      <div className="relative mt-6">
                         <div className="p-5 bg-white/60 backdrop-blur-[2px] border-2 border-dashed border-orange-300 rounded-2xl text-center">
                            <span className="text-[11px] font-black text-orange-700 uppercase tracking-widest">
                              🔒 ETAPAS RESTANTES BLOQUEADAS
                            </span>
                         </div>
                         <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-orange-50 to-transparent"></div>
                      </div>
                    </div>
                  </div>

                  {/* Lado Direito: Copy e Segredo */}
                  <div className="flex flex-col gap-6">
                    <div className="bg-white p-6 rounded-3xl border-2 border-orange-100 shadow-sm">
                      <h4 className="text-pink-600 font-black uppercase text-[10px] mb-3 tracking-widest">Script de Venda Matador</h4>
                      <p className="text-lg font-black text-gray-900 italic leading-tight">
                        "{suggestion.salesScript}"
                      </p>
                    </div>

                    {/* SEÇÃO DO SEGREDO COM O TEXTO SOLICITADO */}
                    <div className="bg-gradient-to-br from-yellow-100 to-orange-200 p-6 rounded-3xl border-2 border-orange-300 relative group overflow-hidden">
                       <div className="relative z-10">
                          <h4 className="text-orange-800 font-black uppercase text-[11px] mb-2 tracking-widest flex items-center gap-2">
                            🤫 O GRANDE SEGREDO
                          </h4>
                          <p className="text-sm font-black text-gray-900 leading-tight">
                            Aqui vai o grande segredo que vai fazer você lucrar até 4x mais:
                          </p>
                          <div className="blur-[6px] select-none mt-2">
                            <p className="text-sm text-gray-800 font-black">
                              Pegue o {suggestion.profitSecretTeaser} e misture com a base ainda morna para que a reação química da liga neutra triplique o volume sem perder o sabor de...
                            </p>
                          </div>
                       </div>
                       
                       {/* Botão de desbloqueio visual */}
                       <div className="absolute inset-0 flex flex-col items-center justify-center bg-orange-400/5 backdrop-blur-[1px] cursor-pointer" 
                            onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}>
                          <div className="bg-black text-white px-5 py-2.5 rounded-2xl font-black text-[11px] uppercase shadow-2xl flex items-center gap-2 border-2 border-orange-400">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                            Pegue o segredo no Ebook
                          </div>
                       </div>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-3xl text-center mt-auto">
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
