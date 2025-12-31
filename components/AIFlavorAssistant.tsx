
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

interface SuggestionData {
  recipeName: string;
  ingredients: string[];
  steps: string[];
  salesScript: string;
  expertTip: string;
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
        contents: `Como um mestre de vendas do Carnaval 2026, crie uma receita de sacolé alcoólico irresistível para a cidade de ${city} usando ${favoriteFruit}. Foque em nomes chamativos, preparo rápido e um script de vendas matador.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              recipeName: { type: Type.STRING, description: "Nome criativo do sacolé" },
              ingredients: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "Lista de ingredientes necessários"
              },
              steps: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "Passo a passo simplificado"
              },
              salesScript: { type: Type.STRING, description: "Um script de abordagem de 2 linhas para gritar no bloco" },
              expertTip: { type: Type.STRING, description: "Dica de ouro para lucrar mais ou conservar melhor" }
            },
            required: ["recipeName", "ingredients", "steps", "salesScript", "expertTip"]
          }
        }
      });

      const data = JSON.parse(response.text || "{}") as SuggestionData;
      setSuggestion(data);
    } catch (error) {
      console.error("Erro ao gerar sugestão:", error);
      alert("Houve um pequeno erro na folia. Tente novamente!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white p-6 md:p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
          <div className="text-center mb-10">
            <span className="bg-pink-600 text-white px-4 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 inline-block shadow-lg animate-pulse">
              Amostra Grátis do Ebook
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tighter leading-none">
              Veja aqui uma amostra do que você vai <span className="text-pink-600">receber no ebook</span>
            </h2>
            <p className="text-gray-500 font-medium max-w-md mx-auto">
              Nossa Inteligência Artificial cria uma estratégia personalizada para sua cidade em segundos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">📍</span>
              <input 
                type="text" 
                placeholder="Sua Cidade (ex: Salvador)" 
                className="w-full pl-10 pr-4 py-4 rounded-2xl border-2 border-gray-50 focus:border-pink-500 bg-gray-50 focus:bg-white outline-none text-lg transition-all font-semibold"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🍓</span>
              <input 
                type="text" 
                placeholder="Uma Fruta (ex: Morango)" 
                className="w-full pl-10 pr-4 py-4 rounded-2xl border-2 border-gray-50 focus:border-pink-500 bg-gray-50 focus:bg-white outline-none text-lg transition-all font-semibold"
                value={favoriteFruit}
                onChange={(e) => setFavoriteFruit(e.target.value)}
              />
            </div>
          </div>

          <button 
            onClick={generateSuggestion}
            disabled={isLoading || !city || !favoriteFruit}
            className={`w-full py-5 rounded-2xl font-black text-xl uppercase transition-all shadow-xl flex items-center justify-center gap-3
              ${isLoading ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-pink-600 text-white hover:bg-pink-700 active:scale-95'}
            `}
          >
            {isLoading ? (
              <>
                <div className="animate-spin h-6 w-6 border-4 border-gray-300 border-t-pink-600 rounded-full"></div>
                Cruzando Dados da Folia...
              </>
            ) : '🔥 GERAR MINHA ESTRATÉGIA'}
          </button>

          {suggestion && (
            <div className="mt-12 animate-fade-in">
              <div className="relative bg-white border-2 border-pink-100 rounded-[2.5rem] overflow-hidden shadow-inner">
                {/* Header do Card de Resultado */}
                <div className="carnival-gradient p-6 text-center text-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Receita Sugerida para {city}</p>
                  <h3 className="text-2xl md:text-4xl font-black uppercase drop-shadow-md">
                    {suggestion.recipeName}
                  </h3>
                </div>

                <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Lado Esquerdo: Receita */}
                  <div>
                    <div className="mb-8">
                      <h4 className="flex items-center gap-2 text-pink-600 font-black uppercase text-sm mb-4 tracking-wider">
                        <span className="bg-pink-100 p-1 rounded">🛒</span> Ingredientes
                      </h4>
                      <ul className="space-y-2">
                        {suggestion.ingredients.map((ing, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-sm md:text-base">
                            <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                            {ing}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-pink-600 font-black uppercase text-sm mb-4 tracking-wider">
                        <span className="bg-pink-100 p-1 rounded">👨‍🍳</span> Preparo
                      </h4>
                      <div className="space-y-4">
                        {suggestion.steps.map((step, i) => (
                          <div key={i} className="flex gap-3">
                            <span className="text-pink-200 font-black text-2xl leading-none">{i + 1}</span>
                            <p className="text-gray-600 text-sm leading-tight font-medium">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Lado Direito: Vendas e Dica */}
                  <div className="flex flex-col gap-6">
                    <div className="bg-yellow-50 p-6 rounded-3xl border border-yellow-100">
                      <h4 className="flex items-center gap-2 text-orange-700 font-black uppercase text-xs mb-3 tracking-widest">
                        📣 Grito de Guerra (Script)
                      </h4>
                      <p className="text-lg md:text-xl font-black text-gray-900 leading-tight italic">
                        "{suggestion.salesScript}"
                      </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-3xl text-white relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-2 bg-pink-600 text-[10px] font-black uppercase tracking-tighter">Segredo</div>
                      <h4 className="text-pink-400 font-black uppercase text-[10px] mb-2 tracking-widest">Dica de Especialista</h4>
                      <p className="text-sm opacity-90 leading-relaxed font-medium">
                        {suggestion.expertTip}
                      </p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <p className="text-[10px] text-gray-400 font-bold uppercase text-center mb-4">Gostou dessa amostra?</p>
                      <button 
                        onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full bg-gray-100 hover:bg-pink-600 hover:text-white text-gray-600 py-3 rounded-xl font-black text-xs uppercase transition-all tracking-widest"
                      >
                        Ver todas as 50+ receitas no Ebook
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIFlavorAssistant;
