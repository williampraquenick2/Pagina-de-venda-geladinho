
import React from 'react';

const Content: React.FC = () => {
  const modules = [
    { title: "🍹 +30 receitas alcoólicas", desc: "As combinações que mais vendem no Carnaval." },
    { title: "💵 Precificação Lucrativa", desc: "Como cobrar para cobrir custos e ter lucro real." },
    { title: "🛒 Onde Comprar Barato", desc: "Dicas para economizar nos ingredientes." },
    { title: "📍 Pontos Estratégicos", desc: "Onde e quando estar para vender tudo." },
    { title: "❄️ Conservação Segura", desc: "Como manter tudo gelado por horas na rua." },
    { title: "🚀 Técnicas de Venda", desc: "Gatilhos mentais para zerar o estoque rápido." },
    { title: "📊 Planilha Profissional", desc: "Controle total das suas finanças." },
    { title: "📱 Divulgação Gratuita", desc: "Use as redes sociais a seu favor." }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-black text-center mb-10 md:mb-16 uppercase leading-tight px-4">O Que Você Vai Aprender</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-x-12 md:gap-y-8">
          {modules.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-pink-50 transition-colors group">
              <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base group-hover:scale-110 transition-transform">
                {idx + 1}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1 leading-snug">{item.title}</h4>
                <p className="text-sm md:text-base text-gray-600 leading-tight md:leading-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 p-6 md:p-10 bg-black text-white rounded-[2rem] md:rounded-3xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-10">
          <div className="text-center md:text-left flex-1">
            <h3 className="text-xl md:text-2xl font-black mb-4 uppercase text-green-400">Para quem é?</h3>
            <ul className="space-y-3 opacity-90 text-sm md:text-base text-left inline-block md:block">
              <li className="flex items-center gap-2">✔ <span className="opacity-80">Pessoas em busca de renda extra</span></li>
              <li className="flex items-center gap-2">✔ <span className="opacity-80">Quem mora em cidades com blocos</span></li>
              <li className="flex items-center gap-2">✔ <span className="opacity-80">Quem busca algo simples e prático</span></li>
            </ul>
          </div>
          
          <div className="h-px w-full md:w-px md:h-32 bg-white/20"></div>
          
          <div className="text-center md:text-left flex-1">
            <h3 className="text-xl md:text-2xl font-black mb-4 uppercase text-red-500">Para quem NÃO é?</h3>
            <ul className="space-y-3 opacity-90 text-sm md:text-base text-left inline-block md:block">
              <li className="flex items-center gap-2">❌ <span className="opacity-80">Quem busca dinheiro sem esforço</span></li>
              <li className="flex items-center gap-2">❌ <span className="opacity-80">Quem não segue instruções</span></li>
              <li className="flex items-center gap-2">❌ <span className="opacity-80">Quem espera riqueza imediata</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
