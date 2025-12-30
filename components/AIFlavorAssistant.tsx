import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIFlavorAssistant: React.FC = () => {
  const [city, setCity] = useState('');
  const [favoriteFruit, setFavoriteFruit] = useState('');
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateSuggestion = async () => {
    if (!city || !favoriteFruit) return;
    
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Como um mestre de vendas ambulantes especializado em sacolés alcoólicos para o Carnaval 2026, sugira uma receita criativa e um script de vendas de impacto para a cidade de ${city} usando ${favoriteFruit}. O tom deve ser animado, persuasivo e focado em lucro rápido. Retorne em Markdown.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setSuggestion(response.text || "Não foi possível gerar a sugestão agora. Tente novamente!");
    } catch (error) {
      console.error("Erro ao gerar sugestão:", error);
      setSuggestion("Erro ao conectar com a IA. Mas não se preocupe, o curso tem todas as receitas!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-pink-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border-4 border-pink-200">
          <div className="text-center mb-10">
            <span className="bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">Bônus: Assistente de IA</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase">IA: Flavor Master 2026</h2>
            <p className="text-gray-600">Dê uma amostra do que a tecnologia pode fazer pelo seu negócio. Insira sua cidade e uma fruta!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <input 
              type="text" 
              placeholder="Sua Cidade (ex: Salvador)" 
              className="p-4 rounded-xl border-2 border-gray-100 focus:border-pink-500 outline-none text-lg"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Fruta Favorita (ex: Maracujá)" 
              className="p-4 rounded-xl border-2 border-gray-100 focus:border-pink-500 outline-none text-lg"
              value={favoriteFruit}
              onChange={(e) => setFavoriteFruit(e.target.value)}
            />
          </div>

          <button 
            onClick={generateSuggestion}
            disabled={isLoading || !city || !favoriteFruit}
            className={`w-full py-5 rounded-2xl font-black text-xl uppercase transition-all shadow-lg flex items-center justify-center gap-3
              ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-600 text-white hover:bg-pink-700'}
            `}
          >
            {isLoading ? (
              <>
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                Gerando Ideia Lucrativa...
              </>
            ) : 'Gerar Ideia e Script de Vendas'}
          </button>

          {suggestion && (
            <div className="mt-10 p-6 bg-pink-50 rounded-2xl border border-pink-100 prose max-w-none text-gray-800 animate-fade-in">
              <div dangerouslySetInnerHTML={{ __html: suggestion.replace(/\n/g, '<br/>') }} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIFlavorAssistant;